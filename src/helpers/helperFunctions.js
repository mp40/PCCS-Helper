const {
  table1cSAL,
  table1aBaseSpeed,
  table1bMaxSpeed,
  table1dCombatActions,
  table1dDamageBonus,
} = require('../data/tablesCreateCharacter');

const findHighestCombatLevel = (gunLevel, handLevel) => (gunLevel > handLevel ? gunLevel : handLevel);

const findSAL = (level) => table1cSAL[level] * 1;

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

const calcSkillFactor = (attribute, skill) => attribute + skill;

const calcCombatActions = (ms, isf) => {
  if (ms === 0) {
    return 0;
  }
  const index = findKey(isf, table1dCombatActions.isf);
  return table1dCombatActions[ms][index] * 1;
};

const calcKV = (wil, highestSkill) => Math.floor(0.5 * wil) * (highestSkill || 1);

const calcDB = (ms, asf) => {
  if (ms === 0) {
    return 0;
  }
  const index = findKey(asf, table1dDamageBonus.asf);
  return table1dDamageBonus[ms][index] * 1;
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
  findHighestCombatLevel,
  calcBaseSpeed,
  findKey,
  findSAL,
  calcMaxSpeed,
  calcSkillFactor,
  calcCombatActions,
  calcKV,
  calcDB,
  actionsPerImpulse,
};
