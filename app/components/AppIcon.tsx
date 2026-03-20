import { useColorScheme, type ImageStyle, type StyleProp } from 'react-native';
import { APP_ICONS_DARK, APP_ICONS_LIGHT } from '../constants/icons';
import { View } from './Themed';

type IconName = keyof typeof APP_ICONS_LIGHT;

const ICON_SIZE = {
  extraSmall: 16,
  small: 24,
  medium: 32,
  large: 48,
};

interface AppIconProps {
  name: IconName;
  size?: keyof typeof ICON_SIZE;
  style?: StyleProp<ImageStyle>;
}

export const AppIcon = ({ name, size = 'medium', style }: AppIconProps) => {
  const themeColor = useColorScheme() ?? 'dark';
  const APP_ICONS = themeColor === 'dark' ? APP_ICONS_DARK : APP_ICONS_LIGHT;
  const IconComponent = APP_ICONS[name];

  return (
    <View style={[{ backgroundColor: 'transparent' }, style]}>
      <IconComponent width={ICON_SIZE[size]} height={ICON_SIZE[size]} />
    </View>
  );
};
