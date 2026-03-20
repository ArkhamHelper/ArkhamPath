import type { ScenarioBlock } from '../../models/scenario';
import { Text } from '@/components/Text';
import { View } from '@/components/View';
import type { PathElementProps } from './props';

interface PathPlayerChoiceProps extends PathElementProps {
  block: ScenarioBlock;
}

export const PathPlayerChoice: React.FC<PathPlayerChoiceProps> = ({
  block,
  style,
}) => (
  <View
    key={`player-choice-${block.code}`}
    style={{
      ...style,
      transform: [{ rotate: '45deg' }],
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
    }}
  >
    <Text style={{ transform: [{ rotate: '-45deg' }], fontSize: 24 }}>?</Text>
  </View>
);
