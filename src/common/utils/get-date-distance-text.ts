import { isToday, isYesterday, parseISO } from 'date-fns';
import { useTranslation } from 'react-i18next';

import { formatDistanceToNow } from './format-distance-to-now';

export const getDateDistanceText = (date: string) => {
  const { t } = useTranslation('common');

  const parsedDate = parseISO(date);

  if (isToday(parsedDate)) {
    return t('dates.today');
  } else if (isYesterday(parsedDate)) {
    return t('dates.yesterday');
  }

  return formatDistanceToNow(parsedDate);
};
