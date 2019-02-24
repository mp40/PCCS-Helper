const {
  table1C_SAL,
  table1A_BaseSpeed,
  table1B_MaxSpeed,
  table1D_CombatActions,
  table1D_DamageBonus
} = require("./tables");

const findSAL = function (level) {
  return table1C_SAL[level];
};

const findKey = (enc, arr) => {
  let result = undefined;
  arr.forEach(function (val, dex) {
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
  return table1A_BaseSpeed[str][index];
};

const calcMaxSpeed = (agi, baseSpd) => {
  const index = findKey(baseSpd, table1B_MaxSpeed.baseSpeed);
  if (baseSpd === 0) {
    return 0;
  }
  return table1B_MaxSpeed[agi][index];
};

const calcISF = function (int, sal) {
  return int + sal;
};

const calcCombatActions = (ms, isf) => {
  if (ms === 0) {
    return 0;
  }
  const index = findKey(isf, table1D_CombatActions.isf);
  return table1D_CombatActions[ms][index];
};

const calcKV = (wil, highestSkill) => {
  return Math.floor(0.5 * wil) * highestSkill;
}

const calcDB = (ms, asf) => {
  if (ms === 0) {
    return 0;
  }
  const index = findKey(asf, table1D_DamageBonus.asf);
  return table1D_DamageBonus[ms][index];
}

const calculateStateObject = function (str, enc, agi, gunSkill, int, handSkill, wil) {
  const bs = calcBaseSpeed(str, enc);
  const ms = calcMaxSpeed(agi, bs);
  const salResult = findSAL(gunSkill);
  const isfResult = calcISF(int, salResult);
  const gunResults = calcCombatActions(ms, isfResult);
  const ceResult = findSAL(handSkill);
  const asfResult = calcISF(agi, ceResult);
  const handResults = calcCombatActions(ms, asfResult);
  const knockout = calcKV(wil, gunSkill > handSkill ? gunSkill : handSkill);
  const damBonus = calcDB(ms, asfResult);

  return {
    baseSpeed: bs,
    maxSpeed: ms,
    sal: salResult,
    ce: ceResult,
    isf: isfResult,
    asf: asfResult,
    gunActions: gunResults,
    handActions: handResults,
    knockoutValue: knockout,
    damageBonus: damBonus
  };
};

function actionsPerImpulse(actions){
  let impulseArray = [0,0,0,0]

  while(actions>0){
    if (actions%4 === 0){
      impulseArray[1]++
      actions--
    }
  
    if (actions%4 === 3){
      impulseArray[3]++
      actions--
    }
    
    if (actions%4 === 2){
      impulseArray[2]++
      actions--
    }
  
    if(actions%4 === 1){
      impulseArray[0]++
      actions--
    }
  }

  return impulseArray
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
  actionsPerImpulse
};