import { format } from 'date-fns';

export const createDbTimestamp = (date?: string) => {
  // We are using sqlite in Jest for an in-memory database.
  // sqlite does not natively support the timestamp type,
  // so those values must be converted to strings.
  if (!process.env.JEST_WORKER_ID) {
    return date ? new Date(date) : new Date();
  } else {
    return date
      ? format(new Date(date), 'yyyy-MM-dd')
      : format(new Date(), 'yyyy-MM-dd');
  }
};
