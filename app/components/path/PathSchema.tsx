import { use, useState } from 'react';
import type { Path } from '../../models/path';
import { Text, View } from '../Themed';
import { BeginEllipse } from './BeginEllipse';
import { useWindowDimensions } from 'react-native';

const NODE_WIDTH_COEFFICIENT = 0.35;
const NODE_HEIGHT_COEFFICIENT = 0.05;

interface PathSchemaProps {
  userPath: Path;
  scenarios: string[];
}

export const PathSchema = ({ userPath, scenarios }: PathSchemaProps) => {
  // Будем хранить координаты всех блоков сценария в закрытом виде
  // Когда пользователь открывает сценарий, будем увеличивать y-координату на открытое меню
  const [shrinkHeight, setShrinkHeight] = useState(0);
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  const renderScenario = (scenario: string, startY: number) => {
    const userResults = userPath.data[scenario];
    const middleX = screenWidth / 2;
    const [standardNodeWidth, standardNodeHeight] = [
      screenWidth * NODE_WIDTH_COEFFICIENT,
      screenHeight * NODE_HEIGHT_COEFFICIENT,
    ];

    return (
      <View>
        <View
          style={{
            top: startY,
            left: middleX - standardNodeWidth / 2,
            width: standardNodeWidth,
            height: standardNodeHeight,
          }}
        >
          <BeginEllipse width={standardNodeWidth} height={standardNodeHeight} />
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
      <Text>Path</Text>
      {scenarios.map((scenario, index) => (
        <View key={scenario}>
          {renderScenario(scenario, (index + 1) * 100)}
        </View>
      ))}
    </View>
  );
};
