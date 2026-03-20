/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native';

import { colors } from '@/constants/colors';
import { useColorScheme } from '../hooks/useColorScheme';

type ThemeProps = {
  color?: keyof typeof colors.light;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(colorName: keyof typeof colors.light) {
  const theme = useColorScheme() ?? 'light';

  return colors[theme][colorName];
}

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;
  const color = useThemeColor(props.color ?? 'text-primary');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;
  const backgroundColor = useThemeColor(props.color ?? 'background-primary');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
