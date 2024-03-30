export const addZeroPad = (num: number, length?: number) => {
  return num.toLocaleString('en-US', {
    style: 'decimal',
    minimumIntegerDigits: 3,
    maximumFractionDigits: length,
  });
};
