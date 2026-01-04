import { useWindowDimensions } from 'react-native';
import type { Scenario } from '../../models/scenario';
import { Text, View } from '../Themed';
import { BeginBlock } from './BeginBlock';
import { ResolutionBlock } from './ResolutionBlock';
import Svg, { Path, Rect } from 'react-native-svg';
import { useState } from 'react';

const NODE_WIDTH_COEFFICIENT = 0.35;
const NODE_HEIGHT_COEFFICIENT = 0.05;

interface PathScenarioProps {
  scenario: Scenario;
}

export const PathScenario: React.FC<PathScenarioProps> = ({ scenario }) => {
  const [additionalHeightByBlocks, setAdditionalHeightByBlocks] = useState<{
    [key: string]: number;
  }>({});
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  // const userResults = userPath.data[scenario.code];
  const [standardNodeWidth, standardNodeHeight] = [
    screenWidth * NODE_WIDTH_COEFFICIENT,
    screenHeight * NODE_HEIGHT_COEFFICIENT,
  ];

  const getAdditionalHeight = (sourceBlockCode: string): number => {
    const sourceBlock = scenario.resolutions.find(
      (r) => r.code === sourceBlockCode,
    );

    if (!sourceBlock) return 0;

    const prevBlocksCodes = scenario.resolutions
      .filter(
        (resolution) =>
          resolution.pathCoordinates.y <= sourceBlock.pathCoordinates.y,
      )
      .map((resolution) => resolution.code);

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
        height: scenario.coordinates.end.y * screenHeight,
      }}
    >
      <BeginBlock
        width={standardNodeWidth}
        height={standardNodeHeight}
        top={scenario.coordinates.start.y * screenHeight}
        left={
          scenario.coordinates.start.x * screenWidth - standardNodeWidth / 2
        }
      />
      {scenario.resolutions.map((resolution) => (
        <ResolutionBlock
          style={{
            position: 'absolute',
            borderWidth: 1,
            zIndex: 1,
          }}
          key={`resolution-${resolution.code}`}
          resolution={resolution}
          width={`${resolution.width * 100}%`}
          top={resolution.pathCoordinates.y * screenHeight}
          left={resolution.pathCoordinates.x * screenWidth}
        />
      ))}
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
          const [startBlockCode, endBlockCode] = line;
          const startBlock = scenario.resolutions.find(
            (r) => r.code === startBlockCode,
          );
          const endBlock = scenario.resolutions.find(
            (r) => r.code === endBlockCode,
          );

          if (!startBlock && startBlockCode !== 'begin') return null;
          if (!endBlock) return null;

          const startPoint = {
            x:
              (startBlock?.pathCoordinates.x ?? scenario.coordinates.start.x) *
              screenWidth,
            y:
              (startBlock?.pathCoordinates.y ?? scenario.coordinates.start.y) *
                screenHeight +
              getAdditionalHeight(startBlockCode),
          };
          const endPoint = {
            x: endBlock.pathCoordinates.x * screenWidth,
            y:
              endBlock.pathCoordinates.y * screenHeight +
              getAdditionalHeight(endBlockCode),
          };

          console.log(`
            ${startBlockCode} -> ${endBlockCode}
            ${startPoint.x} ${startPoint.y} -> ${endPoint.x} ${endPoint.y}
          `);

          return (
            <Path
              key={`line-${startBlockCode}-${endBlockCode}`}
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
