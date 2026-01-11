import {
  useWindowDimensions,
  type LayoutChangeEvent,
  type ViewStyle,
} from 'react-native';
import type {
  Scenario,
  ScenarioBlock,
  ScenarioCondition,
  ScenarioResolution,
} from '../../models/scenario';
import { Text, View } from '../Themed';
import { COMMON_NODE_HEIGHT_COEFFICIENT, CommonNode } from './CommonNode';
import { ResolutionBlock } from './ResolutionBlock';
import Svg from 'react-native-svg';
import { useState } from 'react';
import { PathLine } from './Line';
import { PathConnection } from './Connection';
import { PathPlayerChoice } from './PlayerChoice';
import { PathCondition } from './Condition';

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

  const getDefaultNodeStyle = (block: ScenarioBlock): ViewStyle => ({
    position: 'absolute',
    left: block.coordinates.x * screenWidth,
    top:
      block.coordinates.y * screenHeight +
      getAdditionalHeight(block.code, false),
    width: block.width * screenWidth,
  });

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
                ...getDefaultNodeStyle(block),
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
            <PathPlayerChoice
              block={block}
              style={{
                ...getDefaultNodeStyle(block),
                height: block.width * screenWidth,
                backgroundColor: 'gray',
              }}
            />
          );

        if (block.blockType === 'connection')
          return (
            <PathConnection
              key={`connection-${block.code}`}
              block={block}
              style={{
                ...getDefaultNodeStyle(block),
                height: block.width * screenWidth,
              }}
            />
          );

        if (block.blockType === 'condition')
          return (
            <PathCondition
              key={`condition-${block.code}`}
              condition={block as ScenarioCondition}
              style={{
                ...getDefaultNodeStyle(block),
              }}
            />
          );

        if (['start', 'setup', 'end'].includes(block.blockType))
          return (
            <CommonNode
              text={block.code}
              key={`${scenario.code}-${block.code}`}
              style={{
                ...getDefaultNodeStyle(block),
              }}
            />
          );
      })}
      <Svg width="100%" height="100%" style={{ position: 'absolute' }}>
        {scenario.lines.map((line) => (
          <PathLine line={line} getAdditionalHeight={getAdditionalHeight} />
        ))}
      </Svg>
    </View>
  );
};
