import type { ScenarioResolution } from '../../models/scenario';
import { Text, View } from '../Themed';

interface ResolutionBlockProps {
  resolution: ScenarioResolution;
}

export const ResolutionBlock: React.FC<ResolutionBlockProps> = ({
  resolution,
}) => {
  return (
    <View>
      <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 24 }}>{resolution.title}</Text>
      </View>
      {resolution.effects?.map((effect) => (
        <View
          key={`resolution-effect-${effect.code}`}
          style={{
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            overflow: 'visible',
          }}
        >
          {effect.count && (
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
              {effect.count}
            </Text>
          )}
          {effect.type === 'add_journal_note' ? (
            <Text style={{ fontSize: 18 }}>{effect.text}</Text>
          ) : (
            <Text style={{ fontSize: 18 }}>{effect.text}</Text>
          )}
        </View>
      ))}
    </View>
  );
};
