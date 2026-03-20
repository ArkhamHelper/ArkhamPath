import { Text as DefaultText, useColorScheme, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

const TEXT_SIZE = {
  extraSmall: 14,
  small: 16,
  medium: 18,
  large: 24,
};

export type TextProps = {
  size?: keyof typeof TEXT_SIZE;
  color?: keyof typeof colors.light;
} & DefaultText['props'];

export function Text({
  size = 'medium',
  color = 'text-primary',
  ...props
}: TextProps) {
  const theme = useColorScheme() ?? 'dark';

  const { style, ...otherProps } = props;
  const colorName = color ?? 'background-primary';
  const textColor = colors[theme][colorName];

  const getFontSize = () => {
    let fontSize = TEXT_SIZE[size];

    const flatStyle = StyleSheet.flatten(props.style);
    if (flatStyle?.fontFamily === 'Conkordia-Regular') {
      fontSize *= 1.25;
    }

    return fontSize;
  };

  return (
    <DefaultText
      style={[{ color: textColor, fontSize: getFontSize() }, style]}
      {...otherProps}
    />
  );
}
