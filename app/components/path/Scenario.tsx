import { useWindowDimensions } from 'react-native';
import type { Scenario } from '../../models/scenario';
import { View } from '../Themed';
import { BeginBlock } from './BeginBlock';
import { ResolutionBlock } from './ResolutionBlock';

const NODE_WIDTH_COEFFICIENT = 0.35;
const NODE_HEIGHT_COEFFICIENT = 0.05;

interface PathScenarioProps {
  scenario: Scenario;
}

export const PathScenario: React.FC<PathScenarioProps> = ({ scenario }) => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  // const userResults = userPath.data[scenario.code];
  const [standardNodeWidth, standardNodeHeight] = [
    screenWidth * NODE_WIDTH_COEFFICIENT,
    screenHeight * NODE_HEIGHT_COEFFICIENT,
  ];

  return (
    <View>
      <View
        style={{
          top: scenario.coordinates.start.y * screenHeight,
          left:
            scenario.coordinates.start.x * screenWidth - standardNodeWidth / 2,
          width: standardNodeWidth,
          height: standardNodeHeight,
        }}
      >
        <BeginBlock width={standardNodeWidth} height={standardNodeHeight} />
      </View>
      <View
        style={{
          height: scenario.resolutions.length * standardNodeHeight,
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
