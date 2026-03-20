import { useTranslate } from '../../hooks/useTranslate';
import type { ScenarioCondition } from '../../models/scenario';
import { Text } from '@/components/Text';
import { View } from '@/components/View';
import type { PathElementProps } from './props';

interface PathConditionProps extends PathElementProps {
  condition: ScenarioCondition;
}

export const PathCondition: React.FC<PathConditionProps> = ({
  style,
  condition,
}) => {
  const { translate } = useTranslate();

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
        <Text>{translate(condition.code)}</Text>
      </View>
    </View>
  );
};
