import { useWindowDimensions } from 'react-native';
import type { Scenario, ScenarioResolution } from '../../models/scenario';
import { View } from '../Themed';
import { CommonNode } from './CommonNode';
import { ResolutionBlock } from './ResolutionBlock';
import Svg, { Path, Rect } from 'react-native-svg';
import { useState } from 'react';

const NODE_HEIGHT_COEFFICIENT = 0.05;

interface PathScenarioProps {
  scenario: Scenario;
}

export const PathScenario: React.FC<PathScenarioProps> = ({ scenario }) => {
  const [additionalHeightByBlocks, setAdditionalHeightByBlocks] = useState<{
    [key: string]: number;
  }>({});
  // const userResults = userPath.data[scenario.code];
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const commonNodeHeight = screenHeight * NODE_HEIGHT_COEFFICIENT;

  const getAdditionalHeight = (sourceBlockCode: string): number => {
    const sourceBlock = scenario.blocks.find((r) => r.code === sourceBlockCode);

    if (!sourceBlock) return 0;

    const prevBlocksCodes = scenario.blocks
      .filter((block) => block.coordinates.y <= sourceBlock.coordinates.y)
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
          commonNodeHeight,
      }}
    >
      {scenario.blocks.map((block) =>
        block.blockType === 'resolution' ? (
          <ResolutionBlock
            key={`resolution-${block.code}`}
            resolution={block as ScenarioResolution}
            style={{
              width: `${block.width * 100}%`,
              top: block.coordinates.y * screenHeight,
              left: block.coordinates.x * screenWidth,

              position: 'absolute',
              borderWidth: 1,
              zIndex: 1,
            }}
          />
        ) : (
          <CommonNode
            text={block.code}
            key={`${scenario.code}-${block.code}`}
            style={{
              width: block.width * screenWidth,
              height: commonNodeHeight,
              left: block.coordinates.x * screenWidth,
              top: block.coordinates.y * screenHeight,
            }}
          />
        ),
      )}
      <Svg
        width="100%"
        height="100%"
        style={{ position: 'absolute', zIndex: 2 }}
      >
        <Rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="none"
          stroke="red"
          strokeWidth="4"
          strokeDasharray="10,5" // пунктир
          strokeLinecap="round"
        />
        {scenario.lines.map((line) => {
          const { startBlock, endBlock } = line;
          const startPoint = {
            x:
              startBlock.coordinates.x * screenWidth +
              startBlock.width * line.startBlockPadding * screenWidth,
            y:
              startBlock?.coordinates.y * screenHeight +
              +commonNodeHeight +
              getAdditionalHeight(startBlock.code),
          };
          const endPoint = {
            x:
              endBlock.coordinates.x * screenWidth +
              startBlock.width * line.endBlockPadding * screenWidth,
            y:
              endBlock.coordinates.y * screenHeight +
              getAdditionalHeight(endBlock.code),
          };

          return (
            <Path
              key={`line-${startBlock.code}-${endBlock.code}`}
              stroke="black"
              strokeWidth={4}
              d={`M ${startPoint.x} ${startPoint.y} L ${endPoint.x} ${endPoint.y}`}
            />
          );
        })}
      </Svg>
    </View>
  );
};
