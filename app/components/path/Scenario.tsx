import { useWindowDimensions, type LayoutChangeEvent } from 'react-native';
import type { Scenario, ScenarioResolution } from '../../models/scenario';
import { Text, View } from '../Themed';
import { COMMON_NODE_HEIGHT_COEFFICIENT, CommonNode } from './CommonNode';
import { ResolutionBlock } from './ResolutionBlock';
import Svg, { Path } from 'react-native-svg';
import { useState } from 'react';

interface PathScenarioProps {
  scenario: Scenario;
}

export const PathScenario: React.FC<PathScenarioProps> = ({ scenario }) => {
  const [toggledBlock, setToggledBlock] = useState<{ [key: string]: boolean }>(
    {},
  );
  const [additionalHeightByBlocks, setAdditionalHeightByBlocks] = useState<{
    [key: string]: number;
  }>({});
  // const userResults = userPath.data[scenario.code];
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const commonNodeHeight = screenHeight * COMMON_NODE_HEIGHT_COEFFICIENT;

  const calculateAdditionalHeightByLayout = (
    event: LayoutChangeEvent,
    elementCode: string,
  ) => {
    const { height } = event.nativeEvent.layout;
    const elementAdditionalHeight = height - commonNodeHeight;

    setAdditionalHeightByBlocks((prevAdditionalHeight) => ({
      ...prevAdditionalHeight,
      [elementCode]: elementAdditionalHeight,
    }));
  };

  const getAdditionalHeight = (
    sourceBlockCode: string,
    isUseSourceHeight: boolean,
  ): number => {
    const sourceBlock = scenario.blocks.find((r) => r.code === sourceBlockCode);

    if (!sourceBlock) return 0;

    const prevBlocksCodes = scenario.blocks
      .filter((block) =>
        isUseSourceHeight
          ? block.coordinates.y <= sourceBlock.coordinates.y
          : block.coordinates.y < sourceBlock.coordinates.y,
      )
      .map((block) => block.code);

    return prevBlocksCodes.reduce(
      (acc, curr) => acc + (additionalHeightByBlocks[curr] ?? 0),
      0,
    );
  };

  return (
    <View
      style={{
        position: 'absolute',
        width: screenWidth,
        height:
          scenario.blocks.find((b) => b.code === 'end')!.coordinates.y *
            screenHeight +
          commonNodeHeight +
          getAdditionalHeight('end', false),
      }}
    >
      {scenario.blocks.map((block) => {
        if (block.blockType === 'resolution')
          return (
            <ResolutionBlock
              key={`resolution-${block.code}`}
              resolution={block as ScenarioResolution}
              isToggle={toggledBlock[block.code] ?? true}
              style={{
                width: `${block.width * 100}%`,
                top:
                  block.coordinates.y * screenHeight +
                  getAdditionalHeight(block.code, false),
                left: block.coordinates.x * screenWidth,

                position: 'absolute',
                borderWidth: 1,
                zIndex: 1, //Костыль для нажатия на блок и отработки onPress
              }}
              onPress={() =>
                setToggledBlock((prev) => ({
                  ...prev,
                  [block.code]: prev[block.code] === true ? false : true,
                }))
              }
              onLayout={(event) =>
                calculateAdditionalHeightByLayout(event, block.code)
              }
            />
          );

        if (block.blockType === 'playerChoice')
          return (
            <View
              key={`playerChoice-${block.code}`}
              style={{
                position: 'absolute',
                left: block.coordinates.x * screenWidth,
                top:
                  block.coordinates.y * screenHeight +
                  getAdditionalHeight(block.code, false),
                width: block.width * screenWidth,
                height: block.width * screenWidth,
                backgroundColor: 'gray',
                transform: [{ rotate: '45deg' }], // Поворот на 45°
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
              }}
            >
              <Text style={{ transform: [{ rotate: '-45deg' }], fontSize: 24 }}>
                ?
              </Text>
            </View>
          );
        if (block.blockType === 'connection')
          return (
            <View
              key={`connection-${block.code}`}
              style={{
                width: block.width * screenWidth,
                height: block.width * screenWidth,
                position: 'absolute',
                left: block.coordinates.x * screenWidth,
                top:
                  block.coordinates.y * screenHeight +
                  getAdditionalHeight(block.code, false),
                borderRadius: '50%',
                backgroundColor: 'black',
              }}
            />
          );
        if (['start', 'setup', 'end'].includes(block.blockType))
          return (
            <CommonNode
              text={block.code}
              key={`${scenario.code}-${block.code}`}
              style={{
                position: 'absolute',
                width: block.width * screenWidth,
                left: block.coordinates.x * screenWidth,
                top:
                  block.coordinates.y * screenHeight +
                  getAdditionalHeight(block.code, false),
              }}
            />
          );
      })}
      <Svg width="100%" height="100%" style={{ position: 'absolute' }}>
        {scenario.lines.map((line) => {
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
              (squareDiagonal - squareSide) *
              (line.startBlockPadding === 0 ? -1 : 1);
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
              d={`M ${startPoint.x} ${startPoint.y}
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
        })}
      </Svg>
    </View>
  );
};
