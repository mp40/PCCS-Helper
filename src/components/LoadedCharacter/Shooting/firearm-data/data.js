import { getRangeBrackets } from '../../../../data/firearms/rangeBrackets';
import { expandedTargetSizeMods } from '../data';

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

export const getTargetSizeMod = (rof, size) => {
  if (rof === 'Single') {
    return expandedTargetSizeMods[size].size;
  }

  return expandedTargetSizeMods[size].elev;
};

export const getMasterPhaseImpluse = (tof) => {
  const raw = tof / 5;
  const imp = Math.floor(raw);
  const masterPhase = ((tof % 5) / 10) + 0.1;
  return imp + masterPhase;
};
