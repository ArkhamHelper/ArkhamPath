import { useTranslate } from '../hooks/useTranslate';
import { Text, type TextProps } from '@/components/Text';

type TranslateProps = {
  text: string;
};

export type TranslatedTextProps = TranslateProps & TextProps;

export const TranslatedText = ({
  text,
  ...otherProps
}: TranslatedTextProps) => {
  const { translate } = useTranslate();

  return <Text {...otherProps}>{translate(text)}</Text>;
};
