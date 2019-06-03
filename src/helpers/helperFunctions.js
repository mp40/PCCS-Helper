const {
  table1cSAL,
  table1aBaseSpeed,
  table1bMaxSpeed,
  table1dCombatActions,
  table1dDamageBonus,
} = require('./tables');

const findSAL = level => table1cSAL[level] * 1;

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
  const index = findKey(enc, table1aBaseSpeed.lbs);
  if (table1aBaseSpeed[str][index] === undefined) {
    return 0;
  }
  return table1aBaseSpeed[str][index] * 1;
};

const calcMaxSpeed = (agi, baseSpd) => {
  const index = findKey(baseSpd, table1bMaxSpeed.baseSpeed);
  if (baseSpd === 0) {
    return 0;
  }
  return table1bMaxSpeed[agi][index] * 1;
};

const calcISF = (int, sal) => int + sal;

const calcCombatActions = (ms, isf) => {
  if (ms === 0) {
    return 0;
  }
  const index = findKey(isf, table1dCombatActions.isf);
  return table1dCombatActions[ms][index] * 1;
};

const calcKV = (wil, highestSkill) => Math.floor(0.5 * wil) * highestSkill;

const calcDB = (ms, asf) => {
  if (ms === 0) {
    return 0;
  }
  const index = findKey(asf, table1dDamageBonus.asf);
  return table1dDamageBonus[ms][index] * 1;
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

const actionsPerImpulse = (actions) => {
  let impulse1 = Math.floor(actions / 4);
  const impulse2 = Math.floor(actions / 4);
  let impulse3 = Math.floor(actions / 4);
  let impulse4 = Math.floor(actions / 4);

  if (actions % 4 > 0) {
    impulse1 += 1;
  }

  if (actions % 4 > 1) {
    impulse3 += 1;
  }

  if (actions % 4 > 2) {
    impulse4 += 1;
  }

  return [impulse1, impulse2, impulse3, impulse4];
};

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
