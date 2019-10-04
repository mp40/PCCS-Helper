// [[KD][Recoil Recovery Values]]
const recoilReovery = [
  [2, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  [3, [2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  [4, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  [5, [2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]],
  [7, [3, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]],
  [10, [3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]],
  [14, [3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
];

export const getRecoilRecoveryValue = (kdValue, skillLevel) => {
  if (kdValue === 1 || skillLevel >= 13) {
    return 0;
  }
  return recoilReovery.reduce((result, row) => (row[0] <= kdValue ? row[1][skillLevel] : result), 0);
};
