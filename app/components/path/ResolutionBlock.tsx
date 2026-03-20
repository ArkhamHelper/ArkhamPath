import { Pressable, type LayoutChangeEvent } from 'react-native';
import type { ScenarioResolution } from '../../models/scenario';
import { Text } from '@/components/Text';
import { View } from '@/components/View';
import type { PathElementProps } from './props';
import { CommonNode } from './CommonNode';
import { useTranslate } from '../../hooks/useTranslate';

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
  const { translate } = useTranslate();

  return (
    <View style={{ ...style, ...addStyle }} onLayout={onLayout}>
      <Pressable onPress={onPress}>
        <CommonNode text={translate(resolution.code)} />
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
              <Text style={{ fontSize: 18 }}>{translate(effect.code)}</Text>
            ) : (
              <Text style={{ fontSize: 18 }}>{translate(effect.code)}</Text>
            )}
          </View>
        ))}
    </View>
  );
};
