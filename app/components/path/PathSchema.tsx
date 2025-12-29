import { useEffect, useState } from 'react';
import type { Path } from '../../models/path';
import { Text, View } from '../Themed';
import { BeginEllipse } from './BeginEllipse';
import { useWindowDimensions } from 'react-native';
import { useCycle } from '../../hooks/useCycle';
import type { Scenario } from '../../models/scenario';
import { ResolutionBlock } from './ResolutionBlock';

const NODE_WIDTH_COEFFICIENT = 0.35;
const NODE_HEIGHT_COEFFICIENT = 0.05;

interface PathSchemaProps {
  userPath: Path;
}

export const PathSchema = ({ userPath }: PathSchemaProps) => {
  // Будем хранить координаты всех блоков сценария в закрытом виде
  // Когда пользователь открывает сценарий, будем увеличивать y-координату на открытое меню
  const [shrinkHeight, setShrinkHeight] = useState(0);
  const { cycleCode, scenarios } = useCycle();
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const [standardNodeWidth, standardNodeHeight] = [
    screenWidth * NODE_WIDTH_COEFFICIENT,
    screenHeight * NODE_HEIGHT_COEFFICIENT,
  ];

  if (!scenarios?.length) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading scenarios...</Text>
      </View>
    );
  }

  const renderScenario = (scenario: Scenario) => {
    const userResults = userPath.data[scenario.code];

    return (
      <View>
        <View
          style={{
            top: scenario.coordinates.start.y * screenHeight + shrinkHeight,
            left:
              scenario.coordinates.start.x * screenWidth -
              standardNodeWidth / 2,
            width: standardNodeWidth,
            height: standardNodeHeight,
          }}
        >
          <BeginEllipse width={standardNodeWidth} height={standardNodeHeight} />
        </View>
        <View
          style={{
            height:
              scenario.resolutions.length * standardNodeHeight + shrinkHeight,
          }}
        >
          {scenario.resolutions.map((resolution) => (
            <View
              key={`resolution-${resolution.code}`}
              style={{
                position: 'absolute',
                top: resolution.pathCoordinates.y * screenHeight,
                left: resolution.pathCoordinates.x * screenWidth,
                width: `${resolution.width * 100}%`,
                borderColor: 'black',
                borderWidth: 1,
              }}
            >
              <ResolutionBlock resolution={resolution} />
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {scenarios?.map((scenario) => (
        <View key={scenario.code}>{renderScenario(scenario)}</View>
      ))}
    </View>
  );
};
