import { format } from 'date-fns';
import { enUS, ja } from 'date-fns/locale';

import { getCurrentLanguage } from './get-current-language';

export const formatToReadableDate = (date: Date | string) => {
  if (date instanceof Date === false) {
    date = new Date(date);
  }

  const currentLanguage = getCurrentLanguage();

  let currentLocale = enUS;
  if (currentLanguage === 'jp') {
    currentLocale = ja;
  }

  if (currentLanguage === 'jp') {
    // "2015年5月4日", see: https://en.wikipedia.org/wiki/Date_and_time_notation_in_Japan
    return format(date as Date, 'yyyy年MMMdo', { locale: currentLocale });
  }

  // "May 5, 2015"
  return format(date as Date, 'MMM d, yyyy', { locale: currentLocale });
};
