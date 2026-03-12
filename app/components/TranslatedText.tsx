import { useTranslate } from '../hooks/useTranslate';
import { Text } from './Themed';
import { Text as DefaultText } from 'react-native';

type TranslateProps = {
  text: string;
};

export type TranslatedTextProps = TranslateProps & DefaultText['props'];

export const TranslatedText = ({
  text,
  ...otherProps
}: TranslatedTextProps) => {
  const { translate } = useTranslate();

  return <Text {...otherProps}>{translate(text)}</Text>;
};
