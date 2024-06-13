export const getRandomNumber = (maxNumber: number, count: number): number[] => {
  const numbers = new Set<number>();
  while (numbers.size < count) {
    numbers.add(Math.floor(Math.random() * (maxNumber + 1)));
  }
  return [...numbers];
};