import type { LayoutChangeEvent } from 'react-native';
import type { ScenarioResolution } from '../../models/scenario';
import { Text, View } from '../Themed';
import type { PathElementProps } from './props';
import { CommonNode } from './CommonNode';

interface ResolutionBlockProps extends PathElementProps {
  resolution: ScenarioResolution;
  onLayout?: (event: LayoutChangeEvent) => void;
}

export const ResolutionBlock: React.FC<ResolutionBlockProps> = ({
  resolution,
  style,
  onLayout,
  ...addStyle
}) => {
  return (
    <View style={{ ...style, ...addStyle }} onLayout={onLayout}>
      <CommonNode text={resolution.title} />
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
          {effect.effectType === 'add_journal_note' ? (
            <Text style={{ fontSize: 18 }}>{effect.text}</Text>
          ) : (
            <Text style={{ fontSize: 18 }}>{effect.text}</Text>
          )}
        </View>
      ))}
    </View>
  );
};
