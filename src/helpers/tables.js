const table1C_SAL = [
  0,
  5,
  7,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
];

const table1A_BaseSpeed = {
  lbs: [
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55,
    60,
    70,
    80,
    90,
    100,
    125,
    150,
    200,
  ],
  21: [4.5, 4.5, 4, 4, 4, 3.5, 3.5, 3.5, 3.5, 3.5, 3, 3, 3, 3, 3, 2.5, 2.5, 2],
  20: [
    4.5,
    4,
    4,
    3.5,
    3.5,
    3.5,
    3.5,
    3.5,
    3,
    3,
    3,
    3,
    3,
    2.5,
    2.5,
    2.5,
    2.5,
    2,
  ],
  19: [4, 4, 3.5, 3.5, 3, 3, 3, 3, 3, 2.5, 2.5, 2.5, 2.5, 2.5, 2, 2, 2, 1.5],
  18: [
    4,
    3.5,
    3.5,
    3,
    3,
    3,
    2.5,
    2.5,
    2.5,
    2.5,
    2.5,
    2,
    2,
    2,
    2,
    1.5,
    1.5,
    1.5,
  ],
  17: [3.5, 3, 3, 3, 2.5, 2.5, 2.5, 2.5, 2, 2, 2, 2, 2, 1.5, 1.5, 1.5, 1.5, 1],
  16: [3.5, 3, 2.5, 2.5, 2.5, 2.5, 2, 2, 2, 2, 2, 1.5, 1.5, 1.5, 1.5, 1, 1, 1],
  15: [3, 3, 2.5, 2.5, 2, 2, 2, 2, 2, 1.5, 1.5, 1.5, 1.5, 1.5, 1, 1, 1],
  14: [3, 2.5, 2.5, 2, 2, 2, 2, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1, 1, 1, 1],
  13: [3, 2.5, 2.5, 2, 2, 2, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1, 1, 1, 1],
  12: [3, 2.5, 2, 2, 2, 2, 1.5, 1.5, 1.5, 1.5, 1.5, 1, 1, 1, 1],
  11: [3, 2.5, 2, 2, 2, 2, 1.5, 1.5, 1.5, 1.5, 1.5, 1, 1, 1, 1],
  10: [3, 2.5, 2, 2, 2, 2, 1.5, 1.5, 1.5, 1.5, 1.5, 1, 1, 1, 1],
  9: [3, 2.5, 2, 2, 2, 2, 1.5, 1.5, 1.5, 1.5, 1.5, 1, 1, 1, 1],
  8: [3, 2.5, 2, 2, 2, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1, 1, 1, 1],
  7: [2.5, 2.5, 2, 2, 2, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1, 1, 1, 1],
  6: [2.5, 2.5, 2, 2, 2, 1.5, 1.5, 1.5, 1.5, 1.5, 1, 1, 1, 1, 1],
  5: [2.5, 2.5, 2, 2, 1.5, 1.5, 1.5, 1.5, 1.5, 1, 1, 1, 1, 1],
  4: [2.5, 2, 2, 1.5, 1.5, 1.5, 1.5, 1, 1, 1, 1, 1],
  3: [2.5, 2, 1.5, 1.5, 1.5, 1, 1, 1, 1, 1, 1],
  2: [2, 1.5, 1.5, 1.5, 1, 1, 1, 1],
  1: [1.5, 1.5, 1],
};

const table1B_MaxSpeed = {
  baseSpeed: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
  21: [2, 4, 5, 7, 9, 10, 12, 13],
  20: [2, 4, 5, 7, 8, 10, 11, 13],
  19: [2, 4, 5, 7, 8, 10, 11, 12],
  18: [2, 4, 5, 6, 8, 9, 11, 12],
  17: [2, 3, 5, 6, 8, 9, 10, 12],
  16: [2, 3, 5, 6, 8, 9, 10, 11],
  15: [2, 3, 5, 6, 7, 9, 10, 11],
  14: [2, 3, 4, 6, 7, 8, 9, 11],
  13: [2, 3, 4, 6, 7, 8, 9, 10],
  12: [2, 3, 4, 5, 7, 8, 9, 10],
  11: [2, 3, 4, 5, 6, 7, 8, 9],
  10: [2, 3, 4, 5, 6, 7, 8, 9],
  9: [2, 3, 4, 5, 6, 7, 8, 9],
  8: [2, 3, 4, 4, 5, 6, 7, 8],
  7: [2, 3, 3, 4, 5, 6, 7, 8],
  6: [2, 2, 3, 4, 5, 5, 6, 7],
  5: [1, 2, 3, 4, 4, 5, 6, 6],
  4: [1, 2, 3, 3, 4, 4, 5, 6],
  3: [1, 2, 2, 3, 3, 4, 4, 5],
  2: [1, 1, 2, 2, 3, 3, 4, 4],
  1: [1, 1, 1, 2, 2, 2, 3, 3],
};

const table1D_CombatActions = {
  isf: [7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39],
  1: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
  2: [1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4],
  3: [1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6],
  4: [2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7],
  5: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9],
  6: [3, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11],
  7: [3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13],
  8: [3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 11, 12, 12, 13, 14, 14, 15],
  9: [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15, 15, 16, 17],
  10: [4, 6, 7, 8, 9, 10, 11, 12, 12, 13, 14, 15, 16, 16, 17, 18, 18],
  11: [5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 15, 16, 17, 18, 19, 19, 20],
  12: [5, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21, 22],
  13: [6, 7, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
};

const table1D_DamageBonus = {
  asf: [7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39],
  1: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
  2: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1],
  3: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  4: [0.5, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5, 1.5, 1.5, 1.5, 1.5, 2],
  5: [0.5, 1, 1, 1, 1, 1, 1.5, 1.5, 1.5, 1.5, 2, 2, 2, 2.5, 2.5, 2.5, 2.5],
  6: [1, 1, 1, 1.5, 1.5, 1.5, 2, 2, 2, 2.5, 2.5, 3, 3, 3, 3.5, 3.5, 4],
  7: [1, 1, 1.5, 1.5, 2, 2, 2.5, 2.5, 3, 3, 3.5, 3.5, 4, 4, 4.5, 4.5, 5],
  8: [1, 1.5, 2, 2, 2.5, 2.5, 3, 3.5, 3.5, 4, 4.5, 4.5, 5, 5.5, 5.5, 6, 6.5],
  9: [1.5, 2, 2, 2.5, 3, 3.5, 4, 4, 4.5, 5, 5.5, 6, 6, 6.5, 7, 7.5, 8],
  10: [2, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
  11: [2, 2.5, 3, 3.5, 4.5, 5, 5.5, 6, 6.5, 7.5, 8, 8.5, 9, 9.5, 10, 11, 12],
};

module.exports = {
  table1C_SAL,
  table1A_BaseSpeed,
  table1B_MaxSpeed,
  table1D_CombatActions,
  table1D_DamageBonus,
};
