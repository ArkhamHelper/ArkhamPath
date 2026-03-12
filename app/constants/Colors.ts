export interface ColorScheme {
  text: string;
  tint: string;
  background: string;
}

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const colors: { light: ColorScheme; dark: ColorScheme } = {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#24303C',
    tint: tintColorDark,
  },
};
