export const choose = <T>(array: T[]): T => {
  const targetIndex = Math.floor(Math.random() * array.length);
  return array[targetIndex];
};
