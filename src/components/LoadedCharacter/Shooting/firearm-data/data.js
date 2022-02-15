import { getRangeBrackets } from '../../../../data/firearms/rangeBrackets';

export const getWeaponRangeIndex = (list, range) => {
  const rangeBrackets = getRangeBrackets(list);

  let index;

  for (let i = 0; i < rangeBrackets.length; i += 1) {
    if (rangeBrackets[i] >= range) {
      index = i;
      break;
    }
  }

  return index;
};

export const targetSizeMods = {
  'Look Over/Around': { size: -4, elev: -3, width: -3 },
  'Fire Over/Around': { size: 0, elev: 2, width: 2 },
  'Standing Exposed': { size: 7, elev: 14, width: 1 },
  'Kneeling Exposed': { size: 6, elev: 11, width: 3 },
  'Prone/Crawl': { size: 2, elev: 2, width: 2 },
  Running: { size: 8, elev: 14, width: 1 },
  'Low Crouch': { size: 7, elev: 11, width: 2 },
  'Hands and Knees': { size: 6, elev: 8, width: 1 },
  'Low Prone': { size: 1, elev: 0, width: 5 },
};

export const getTargetSizeMod = (rof, size) => {
  if (rof === 'Single') {
    return targetSizeMods[size].size;
  }

  return targetSizeMods[size].elev;
};
