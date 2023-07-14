import { rangeMods } from './data';

/*
  Notes
  Perhaps instead of calculating alm or odds based on which ROF and Target Size,
  it could be better to return EAL (the modifiers before target size applied).
  then this part could be ambivalent to ROF and Target matters (size, elevation, movement)

  Quite possibly remove/split up lighting, visibility and situation as well,
  however, at least for the moment, need to consider current UI
*/

export class ProofOfConcept {
  constructor(sal) {
    this.sal = sal;
    this.range = 50;
    this.aims = 1;
    this.stance = 'Standing';
    this.target = 'Standing Exposed';
    this.rof = 'Single'; // maybe on seperate gun class? nah this is the shooters decision the gun would affect what options are avialble though
    this.lighting = 'Good';
    this.movement = {
      shooter: 0,
      target: 0,
    };
    this.situation = {
      braced: false, // shooter ?
      slingSupport: false, // shooter ?
      hipFire: false, // shooter ?
      rifleOneHand: false, // shooter, but value determined by firearm ?
      smgOneHand: false, // shooter, but value determined by firearm ?
      pistolOneHand: false, // shooter, but value determined by firearm ?
      foldingStockNotUsed: false, // firearm ?
      pistolDoubleAction: false, // firearm ?
      bipodNotBraced: false, // shooter, but option determined by firearm ?
      bipodBraced: false, // shooter, but option determined by firearm ?
      tripodMount: false, // firearm ?
      pintleMount: false, // firearm ?
      turretMount: false, // firearm ?
    };
    this.visibility = {
      //   lighting: "Good", <- this is seperate from others
      muzzleFlash: false,
      smokeFogHaze: false, // environment ?
      lookingIntoLight: false, // shooter ?
      opticalUnder8: false, // shooter range, option determined by fiream ?
      opticsBroken: false, // firearm ?
      aasBroken: false, // firearm ?
      sightsBroken: false, // firearm ?
      teargasNoMask: false, // shooter, option determined by environment ? or viceversa ?
      notLooking: false, // shooter ?
    };
    this.miscellaneous = 0;
  }

  setRange(value) {
    this.range = value;
  }

  setAims(value) {
    this.aims = value;
  }

  setStance(stance) {
    this.stance = stance;
  }

  setTarget(target) {
    this.target = target;
  }

  setShooterMovement(movement) {
    this.movement.shooter = movement;
  }

  setTargetMovement(movement) {
    this.movement.target = movement;
  }

  setLighting(lighting) {
    this.lighting = lighting;
  }

  toggleVisibilityValue(key) {
    this.visibility[key] = !this.visibility[key];
  }

  toggleSituationValue(key) {
    this.situation[key] = !this.situation[key];
  }

  setMiscellaneous(value) {
    this.miscellaneous = value;
  }

  getStanceMod() {
    switch (this.stance) {
      case 'Prone':
        return 6;
      case 'Kneeling':
        return 3;
      default:
        return 0;
    }
  }

  getTargetSizeMod() {
    switch (this.target) {
      case 'Fire Over/Around':
        return 0;
      case 'Kneeling Exposed':
        return 6;
      default:
        return 7;
    }
  }

  getRangeMod() {
    const mod = rangeMods[this.range];
    return mod;
  }

  getLightingMod() {
    switch (this.lighting) {
      case 'No Moon':
        return -12;
      case 'Half Moon':
        return -6;
      case 'Full Moon':
        return -4;
      case 'Dusk':
        return -2;
      default:
        return 0;
    }
  }

  getAlm() {
    const rangeMod = this.getRangeMod();
    const shooterStanceMod = this.getStanceMod();
    const targetStanceMod = this.getTargetSizeMod();
    const lightingMod = this.getLightingMod();

    return (
      this.sal + rangeMod + shooterStanceMod + targetStanceMod + lightingMod + this.miscellaneous
    );
  }
}
