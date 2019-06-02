const {
  table1C_SAL,
  table1A_BaseSpeed,
  table1B_MaxSpeed,
  table1D_CombatActions,
  table1D_DamageBonus,
} = require('./tables');

const findSAL = level => table1C_SAL[level] * 1;

const findKey = (enc, arr) => {
  let result;
  arr.forEach((val, dex) => {
    if (dex === 0 && enc <= val) {
      result = dex;
    }
    if (enc <= val && enc > arr[dex - 1]) {
      result = dex;
    }
  });
  return result;
};

const calcBaseSpeed = (str, enc) => {
  const index = findKey(enc, table1A_BaseSpeed.lbs);
  if (table1A_BaseSpeed[str][index] === undefined) {
    return 0;
  }
  return table1A_BaseSpeed[str][index] * 1;
};

const calcMaxSpeed = (agi, baseSpd) => {
  const index = findKey(baseSpd, table1B_MaxSpeed.baseSpeed);
  if (baseSpd === 0) {
    return 0;
  }
  return table1B_MaxSpeed[agi][index] * 1;
};

const calcISF = (int, sal) => {
  int *= 1;
  sal *= 1;
  return int + sal;
};

const calcCombatActions = (ms, isf) => {
  if (ms === 0) {
    return 0;
  }
  const index = findKey(isf, table1D_CombatActions.isf);
  return table1D_CombatActions[ms][index] * 1;
};

const calcKV = (wil, highestSkill) => Math.floor(0.5 * wil) * highestSkill;

const calcDB = (ms, asf) => {
  if (ms === 0) {
    return 0;
  }
  const index = findKey(asf, table1D_DamageBonus.asf);
  return table1D_DamageBonus[ms][index] * 1;
};

const calculateStateObject = (characterStats, weight) => {
  const bs = calcBaseSpeed(characterStats.str, weight);
  const ms = calcMaxSpeed(characterStats.agi, bs);
  const salResult = findSAL(characterStats.gunLevel);
  const isfResult = calcISF(characterStats.int, salResult);
  const gunResults = calcCombatActions(ms, isfResult);
  const ceResult = findSAL(characterStats.handLevel);
  const asfResult = calcISF(characterStats.agi, ceResult);
  const handResults = calcCombatActions(ms, asfResult);
  const knockout = calcKV(characterStats.wil, characterStats.gunLevel > characterStats.handLevel ? characterStats.gunLevel : characterStats.handLevel);
  const damBonus = calcDB(ms, asfResult);

  return {
    baseSpeed: bs,
    maxSpeed: ms,
    SAL: salResult,
    CE: ceResult,
    ISF: isfResult,
    ASF: asfResult,
    knockoutValue: knockout,
    damageBonus: damBonus,
    combatActions: [gunResults, handResults],
  };
};

function actionsPerImpulse(actions) {
  const impulseArray = [0, 0, 0, 0];

  while (actions > 0) {
    if (actions % 4 === 0) {
      impulseArray[1]++;
      actions--;
    }

    if (actions % 4 === 3) {
      impulseArray[3]++;
      actions--;
    }

    if (actions % 4 === 2) {
      impulseArray[2]++;
      actions--;
    }

    if (actions % 4 === 1) {
      impulseArray[0]++;
      actions--;
    }
  }

  return impulseArray;
}

module.exports = {
  calcBaseSpeed,
  findKey,
  findSAL,
  calcMaxSpeed,
  calcISF,
  calcCombatActions,
  calcKV,
  calcDB,
  calculateStateObject,
  actionsPerImpulse,
};
