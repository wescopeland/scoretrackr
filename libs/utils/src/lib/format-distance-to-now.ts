import { formatDistanceToNow as dateFnsFormatDistanceToNow } from 'date-fns';
import { enUS, ja } from 'date-fns/locale';

import { getCurrentLanguage } from './get-current-language';

export const formatDistanceToNow = (date: Date) => {
  const currentLanguage = getCurrentLanguage();

  let currentLocale = enUS;
  if (currentLanguage === 'jp') {
    currentLocale = ja;
  }

  return dateFnsFormatDistanceToNow(date, {
    addSuffix: true,
    locale: currentLocale
  });
};
