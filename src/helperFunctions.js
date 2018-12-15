const {
  table1C_SAL,
  table1A_BaseSpeed,
  table1B_MaxSpeed,
  table1D_CombatActions
} = require("./tables");

const findSAL = function(level) {
  return table1C_SAL[level];
};

const findKey = (enc, arr) => {
  let result = undefined;
  arr.forEach(function(val, dex) {
    if (enc === val || enc > val) {
      result = dex;
    }
  });
  return result;
};

const calcBaseSpeed = (str, enc) => {
  const index = findKey(enc, table1A_BaseSpeed.lbs);
  if (table1A_BaseSpeed[str][index] === undefined) {
    return "Weight Limit Exceeded";
  }
  return table1A_BaseSpeed[str][index];
};

const calcMaxSpeed = (agi, baseSpd) => {
  const index = findKey(baseSpd, table1B_MaxSpeed.baseSpeed);
  return table1B_MaxSpeed[agi][index];
};

const calcISF = function(int, sal, adjust = 0) {
  return int + sal + adjust;
};

// const table1D_CombatActions = {
//   isf: [0, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39],
//   1: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
//   2: [1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4],
//   3: [1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6],
//   4: [2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7],
//   5: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9],
//   6: [3, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11],
//   7: [3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13],
//   8: [3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 11, 12, 12, 13, 14, 14, 15],
//   9: [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15, 15, 16, 17],
//   10: [4, 6, 7, 8, 9, 10, 11, 12, 12, 13, 14, 15, 16, 16, 17, 18, 18],
//   11: [5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 15, 16, 17, 18, 19, 19, 20],
//   12: [5, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21, 22],
//   13: [6, 7, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
// };

const calcCombatActions = (ms, isf) => {
  return table1D_CombatActions.isf.map(function(val, dex) {
    isf === 19 ? isf++ : (isf = isf);
    if ((isf <= val && isf > table1D_CombatActions.isf[dex - 1]) || isf === 8) {
      if (table1D_CombatActions[ms][dex]) {
        return table1D_CombatActions[ms][dex];
      }
    }
  });
};

module.exports = {
  calcBaseSpeed,
  findKey,
  findSAL,
  calcMaxSpeed,
  calcISF,
  calcCombatActions
};
