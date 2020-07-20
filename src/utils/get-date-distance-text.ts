import { isToday, parseISO } from 'date-fns';

import { formatDistanceToNow } from './format-distance-to-now';

export const getDateDistanceText = (date: string, todayText: string) => {
  const parsedDate = parseISO(date);

  if (isToday(parsedDate)) {
    return todayText;
  }

  return formatDistanceToNow(parsedDate);
};
