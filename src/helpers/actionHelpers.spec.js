import {
  calculateAmmoWeight,
  calculateGunAndAmmoWeight,
  calculateFirearmsArrayWeight,
  calculateObjectWeightDifference,
  calculateTotalWeight,
  findUniformWeight,
  findEquipmentWeight,
} from './actionHelpers';

const testPistol = (qty = 1) => ({
  weight: 2,
  qty,
  mag: [{ weight: 0.5, qty: 2 }],
});

const testRifle = () => ({
  weight: 10,
  qty: 1,
  mag: [{ weight: 1, qty: 1 }, { weight: 1.5, qty: 2 }],
});

const belt = {
  name: 'belt',
  weight: 0.7,
  qty: 1,
};

const pouch = {
  name: 'pouch',
  weight: 0.4,
  qty: 2,
};

describe('calculating firearms weight', () => {
  it('should calculate total ammo weight of gun object', () => {
    expect(calculateAmmoWeight(testPistol())).toBe(1);
    expect(calculateAmmoWeight(testRifle())).toBe(4);
  });
  it('should calculate the weight of the gun and spare ammo', () => {
    expect(calculateGunAndAmmoWeight(testPistol())).toBe(3);
    expect(calculateGunAndAmmoWeight(testRifle())).toBe(14);
  });
  it('should calulate multiple types of same gun', () => {
    expect(calculateGunAndAmmoWeight(testPistol(2))).toBe(5);
  });
  it('should calculate weight of array of firearms', () => {
    expect(calculateFirearmsArrayWeight([testPistol(), testRifle()])).toBe(17);
  });
  it('should claculate difference between old gun/mag object and new gun/mag object', () => {
    expect(calculateObjectWeightDifference(testPistol(), 1)).toBe(2);
    expect(calculateObjectWeightDifference(testPistol(), -1)).toBe(-2);
    expect(calculateObjectWeightDifference(testPistol().mag[0], 1)).toBe(0.5);
    expect(calculateObjectWeightDifference(testPistol().mag[0], -1)).toBe(-0.5);
  });
});

describe('calculating total weight of all equipment', () => {
  it('should claculate weight of uniform', () => {
    const uniform = 'Normal';
    const winterUniform = 'Winter';
    const tropicalUniform = 'Tropical';
    expect(findUniformWeight(uniform)).toEqual(5);
    expect(findUniformWeight(winterUniform)).toEqual(7);
    expect(findUniformWeight(tropicalUniform)).toEqual(4.5);
  });
  it('should calculate weight of equipment array', () => {
    const equipment = [belt, pouch];
    expect(findEquipmentWeight(equipment)).toEqual(1.5);
    equipment.push({ qty: 3, weight: 2 });
    expect(findEquipmentWeight(equipment)).toEqual(7.5);
  });
  it('should calaculate weight of uniform, equipment and firearms', () => {
    const uniform = 'Normal';
    const equipment = [belt, pouch];
    const firearms = [testRifle(), testPistol()];
    const grenades = [];
    expect(calculateTotalWeight({ uniform, equipment, firearms, grenades })).toEqual(5 + 1.5 + 17);
  });
  it('should return a number if the equipment array is empty', () => {
    const equipment = [];
    expect(findEquipmentWeight(equipment)).toEqual(0);
  });
  it('should return 0 if no guns are selected', () => {
    const firearms = [];
    expect(calculateFirearmsArrayWeight(firearms)).toEqual(0);
  });
  it('should return null if array is undefined', () => {
    expect(calculateFirearmsArrayWeight(undefined)).toEqual(null);
  });
  it('should calculate correct weight if equipment array is empty', () => {
    const uniform = 'Normal';
    const equipment = [];
    const firearms = [testRifle(), testPistol()];
    const grenades = [];
    expect(calculateTotalWeight({ uniform, equipment, firearms, grenades })).toEqual(5 + 17);
  });
  it('should calculate correct weight if firearm array is empty', () => {
    const uniform = 'Normal';
    const equipment = [belt, pouch];
    const firearms = [];
    const grenades = [];
    expect(calculateTotalWeight({ uniform, equipment, firearms, grenades })).toEqual(5 + 1.5);
  });
  it('should calculate correct weight if helmet is present', () => {
    const uniform = 'Normal';
    const equipment = [belt, pouch];
    const firearms = [testRifle(), testPistol()];
    const grenades = [];
    const helmet = { name: 'testHelmet', weight: 2.5 };
    expect(calculateTotalWeight({ uniform, equipment, firearms, helmet, grenades })).toEqual(5 + 1.5 + 17 + 2.5);
  });
  it('should calculate correct weight if vest is present', () => {
    const uniform = 'Normal';
    const equipment = [belt, pouch];
    const firearms = [testRifle(), testPistol()];
    const grenades = [];
    const vest = { name: 'testVest', weight: 5 };
    expect(calculateTotalWeight({ uniform, equipment, firearms, vest, grenades })).toEqual(5 + 1.5 + 17 + 5);
  });
  it('should calculate correct weight if grenades are present', () => {
    const uniform = 'Normal';
    const equipment = [belt, pouch];
    const firearms = [testRifle(), testPistol()];
    const grenades = [{ name: 'bang', weight: 1, qty: 2 }, { name: 'boom', weight: 1.5, qty: 1 }];
    expect(calculateTotalWeight({ uniform, equipment, firearms, grenades })).toEqual(5 + 1.5 + 17 + 3.5);
  });
});
