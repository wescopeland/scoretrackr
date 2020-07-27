export const hasUniqueErrorOnField = (error: any, fieldName: string) => {
  return (
    error?.message?.includes('Unique') &&
    error?.meta?.target?.includes(fieldName)
  );
};
