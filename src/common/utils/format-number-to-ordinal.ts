import numbro from 'numbro';

export const formatNumberToOrdinal = (value: number) => {
  return numbro(value).format({ output: 'ordinal' });
};
