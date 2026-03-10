import { useState } from 'react';
import ru from '../assets/lang/ru.json';

export const useTranslate = () => {
  const [dictionary, setDictionary] = useState<{ [key: string]: string }>(ru);
  const translate = (code: string) => dictionary[code] || code;

  const changeLanguage = (lang: string) => {
    if (lang === 'ru') setDictionary(ru);
  };

  return { translate, changeLanguage };
};
