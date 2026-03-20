export interface ColorScheme {
  'text-primary': string;
  'text-secondary': string;
  'background-primary': string;
  'background-secondary': string;
  'background-accent': string;
}

export const colors: { light: ColorScheme; dark: ColorScheme } = {
  light: {
    'text-primary': '#000',
    'text-secondary': '',
    'background-primary': '#fff',
    'background-secondary': '',
    'background-accent': '#000',
  },
  dark: {
    'text-primary': '#fff',
    'text-secondary': '',
    'background-primary': '#24303C',
    'background-secondary': '#485359',
    'background-accent': '#CFB03B',
  },
};
