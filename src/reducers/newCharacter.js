export class NewCharacter {
  constructor() {
    this.name = '';
    this.str = 10;
    this.int = 10;
    this.hlt = 10;
    this.wil = 10;
    this.agi = 10;
    this.gunLevel = 0;
    this.handLevel = 0;
    this.totalWeight = 5;
    this.baseSpeed = 3;
    this.maxSpeed = 6;
    this.SAL = 0;
    this.CE = 0;
    this.ISF = 10;
    this.ASF = 10;
    this.knockoutValue = 5;
    this.damageBonus = 1;
    this.gunCombatActions = 4;
    this.handCombatActions = 4;
    this.uniform = 'Normal';
    this.equipment = [];
    this.firearms = [];
    this.grenades = [];
    this.launchers = [];
    this.helmet = undefined;
    this.vest = undefined;
  }
}
