import { Pressable, type LayoutChangeEvent } from 'react-native';
import type { ScenarioResolution } from '../../models/scenario';
import { Text, View } from '../Themed';
import type { PathElementProps } from './props';
import { CommonNode } from './CommonNode';

interface ResolutionBlockProps extends PathElementProps {
  isToggle: boolean;
  resolution: ScenarioResolution;
  onPress?: () => void;
  onLayout?: (event: LayoutChangeEvent) => void;
}

export const ResolutionBlock: React.FC<ResolutionBlockProps> = ({
  resolution,
  style,
  isToggle,
  onLayout,
  onPress,
  ...addStyle
}) => {
  return (
    <View style={{ ...style, ...addStyle }} onLayout={onLayout}>
      <Pressable onPress={onPress}>
        <CommonNode text={resolution.title} />
      </Pressable>

      {!isToggle &&
        resolution.effects?.map((effect) => (
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
