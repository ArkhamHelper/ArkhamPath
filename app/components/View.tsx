import { View as DefaultView, useColorScheme } from 'react-native';
import { colors } from '../constants/colors';

export type ViewProps = {
  color?: keyof typeof colors.light;
} & DefaultView['props'];

export function View(props: ViewProps) {
  const theme = useColorScheme() ?? 'dark';

  const { style, ...otherProps } = props;
  const colorName = props.color ?? 'background-primary';
  const backgroundColor = colors[theme][colorName];

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
