import type { ScenarioCondition } from '../../models/scenario';
import { Text, View } from '../Themed';
import type { PathElementProps } from './props';

interface PathConditionProps extends PathElementProps {
  condition: ScenarioCondition;
}

export const PathCondition: React.FC<PathConditionProps> = ({
  style,
  condition,
}) => {
  return (
    <View
      style={{
        ...style,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: 'gray',
      }}
    >
      {condition.isSpoiler && (
        <View>
          <Text>EYE</Text>
        </View>
      )}

      {condition.conditionType === 'have_journal_note' && (
        <View>
          <Text>PEN</Text>
        </View>
      )}

      <View style={{ backgroundColor: 'gray' }}>
        <Text>{condition.text}</Text>
      </View>
    </View>
  );
};
