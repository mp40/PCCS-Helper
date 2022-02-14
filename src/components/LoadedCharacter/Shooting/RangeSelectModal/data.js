import { getRangeBrackets } from '../../../../data/firearms/rangeBrackets';

export const ranges = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  11,
  12,
  14,
  16,
  19,
  22,
  25,
  30,
  35,
  40,
  45,
  50,
  65,
  75,
  85,
  100,
  115,
  130,
  150,
  170,
  200,
  230,
  250,
  300,
  350,
  400,
];

export const getWeaponMaxRange = (list) => {
  const rangeBrackets = getRangeBrackets(list);

  const maxRange = rangeBrackets[rangeBrackets.length - 1];

  return [...ranges].filter((r) => r <= maxRange);
};
