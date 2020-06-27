import { isToday, isYesterday, parseISO } from 'date-fns';

import { formatDistanceToNow } from './format-distance-to-now';

export const getDateDistanceText = (
  date: string,
  todayText: string,
  yesterdayText: string
) => {
  const parsedDate = parseISO(date);

  if (isToday(parsedDate)) {
    return todayText;
  } else if (isYesterday(parsedDate)) {
    return yesterdayText;
  }

  return formatDistanceToNow(parsedDate);
};
