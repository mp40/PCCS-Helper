const oddsOfHitting = [
  {
    eal: 28,
    Single: 99,
    Auto: 99,
  },
  {
    eal: 27,
    Single: 98,
    Auto: 98,
  },
  {
    eal: 26,
    Single: 96,
    Auto: 98,
  },
  {
    eal: 25,
    Single: 94,
    Auto: 97,
  },
  {
    eal: 24,
    Single: 90,
    Auto: 95,
  },
  {
    eal: 23,
    Single: 86,
    Auto: 92,
  },
  {
    eal: 22,
    Single: 80,
    Auto: 90,
  },
  {
    eal: 21,
    Single: 74,
    Auto: 86,
  },
  {
    eal: 20,
    Single: 67,
    Auto: 82,
  },
  {
    eal: 19,
    Single: 60,
    Auto: 77,
  },
  {
    eal: 18,
    Single: 53,
    Auto: 73,
  },
  {
    eal: 17,
    Single: 46,
    Auto: 68,
  },
  {
    eal: 16,
    Single: 39,
    Auto: 62,
  },
  {
    eal: 15,
    Single: 33,
    Auto: 57,
  },
  {
    eal: 14,
    Single: 27,
    Auto: 52,
  },
  {
    eal: 13,
    Single: 22,
    Auto: 47,
  },
  {
    eal: 12,
    Single: 18,
    Auto: 43,
  },
  {
    eal: 11,
    Single: 15,
    Auto: 38,
  },
  {
    eal: 10,
    Single: 12,
    Auto: 34,
  },
  {
    eal: 9,
    Single: 9,
    Auto: 31,
  },
  {
    eal: 8,
    Single: 7,
    Auto: 27,
  },
  {
    eal: 7,
    Single: 6,
    Auto: 24,
  },
  {
    eal: 6,
    Single: 5,
    Auto: 21,
  },
  {
    eal: 5,
    Single: 4,
    Auto: 19,
  },
  {
    eal: 4,
    Single: 3,
    Auto: 17,
  },
  {
    eal: 3,
    Single: 2,
    Auto: 15,
  },
  {
    eal: 2,
    Single: 2,
    Auto: 13,
  },
  {
    eal: 1,
    Single: 1,
    Auto: 11,
  },
  {
    eal: 0,
    Single: 1,
    Auto: 10,
  },
  {
    eal: -1,
    Single: 1,
    Auto: 9,
  },
  {
    eal: -2,
    Single: 0,
    Auto: 8,
  },
  {
    eal: -3,
    Single: false,
    Auto: 7,
  },
  {
    eal: -4,
    Single: false,
    Auto: 6,
  },
  {
    eal: -5,
    Single: false,
    Auto: 6,
  },
  {
    eal: -6,
    Single: false,
    Auto: 4,
  },
  {
    eal: -8,
    Single: false,
    Auto: 3,
  },
  {
    eal: -10,
    Single: false,
    Auto: 2,
  },
  {
    eal: -15,
    Single: false,
    Auto: 1,
  },
  {
    eal: -17,
    Single: false,
    Auto: 0,
  },
  {
    eal: -22,
    Single: false,
    Auto: false,
  },
];

export const getOddsOfHitting = (alm, sizeMod, rof) => {
  const eal = alm + sizeMod;
  const rofType = rof === '3RB' ? 'Auto' : rof;

  if (eal >= 28) {
    return 99;
  }

  if (eal <= -22) {
    return 'NA';
  }

  let odds = false;

  for (let i = 1; i < oddsOfHitting.length; i += 1) {
    if (oddsOfHitting[i - 1].eal > eal || oddsOfHitting[i].eal === eal) {
      odds = oddsOfHitting[i][rofType];
    }

    if (oddsOfHitting[i].eal < eal) {
      break;
    }
  }

  return odds === false ? 'NA' : odds;
};
