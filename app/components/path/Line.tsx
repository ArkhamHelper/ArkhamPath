import { Path } from 'react-native-svg';
import type { ScenarioLine } from '../../models/scenario';
import type { PathElementProps } from './props';
import { useWindowDimensions } from 'react-native';
import { COMMON_NODE_HEIGHT_COEFFICIENT } from './CommonNode';

interface PathLineProps extends PathElementProps {
  line: ScenarioLine;
  getAdditionalHeight: (code: string, isUseSourceHeight: boolean) => number;
}

export const PathLine: React.FC<PathLineProps> = ({
  line,
  getAdditionalHeight,
}) => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const commonNodeHeight = screenHeight * COMMON_NODE_HEIGHT_COEFFICIENT;
  const { startBlock, endBlock } = line;
  const startPoint = {
    x:
      startBlock.coordinates.x * screenWidth +
      startBlock.width * line.startBlockPadding * screenWidth,
    y:
      startBlock.coordinates.y * screenHeight +
      +commonNodeHeight +
      getAdditionalHeight(startBlock.code, true),
  };
  const endPoint = {
    x:
      endBlock.coordinates.x * screenWidth +
      endBlock.width * line.endBlockPadding * screenWidth,
    y:
      endBlock.coordinates.y * screenHeight +
      getAdditionalHeight(endBlock.code, false),
  };

  //Костыли расчетов, вообще не могу понять как высчитывать))
  if (startBlock.blockType === 'playerChoice') {
    const squareSide = startBlock.width * screenWidth;
    const squareDiagonal = Math.sqrt(squareSide ** 2 * 2);
    const diagonalDifferent = squareDiagonal / 2.25;

    startPoint.y -= diagonalDifferent;
    startPoint.x +=
      (squareDiagonal - squareSide * 1.25) *
      (line.startBlockPadding === 0 ? -1 : 1);
  }

  if (endBlock.blockType === 'playerChoice') {
    const squareSide = startBlock.width * screenWidth;
    const squareDiagonal = Math.sqrt(squareSide ** 2 * 2);

    endPoint.y -= squareDiagonal - squareSide * 1.38;
  }

  if (startBlock.blockType === 'connection') {
    const squareSide = startBlock.width * screenWidth;
    const squareDiagonal = Math.sqrt(squareSide ** 2 * 2);
    const diagonalDifferent = squareDiagonal / 2.25;

    startPoint.y -= diagonalDifferent;
    startPoint.x +=
      (squareDiagonal - squareSide) * (line.startBlockPadding === 0 ? -1 : 1);
  }

  if (endBlock.blockType === 'connection') {
    const squareSide = startBlock.width * screenWidth;
    const squareDiagonal = Math.sqrt(squareSide ** 2 * 2);

    endPoint.y -= squareDiagonal - squareSide * 1.48;
    endPoint.x -=
      (squareDiagonal - squareSide * 1.41) *
      (line.endBlockPadding === 0 ? -1 : 1);
  }

  return (
    <Path
      key={`line-${startBlock.code}-${endBlock.code}`}
      stroke="black"
      fill={'none'}
      strokeWidth={4}
      d={`
        M ${startPoint.x} ${startPoint.y}
        Q ${line.controlPointX * screenWidth}
          ${
            line.controlPointY * screenHeight +
            getAdditionalHeight(
              line.controlPointY > startBlock.coordinates.y
                ? endBlock.code
                : startBlock.code,
              false,
            )
          }
          ${endPoint.x} ${endPoint.y}`}
    />
  );
};
