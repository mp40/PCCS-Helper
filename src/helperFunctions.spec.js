const {
  calcBaseSpeed,
  findKey,
  findSAL,
  calcMaxSpeed,
  calcISF,
  calcCombatActions
} = require("./helperFunctions");

const { table1A_BaseSpeed } = require("./tables");

describe("calculate SAL", () => {
  it("should return the correct SAL based on skill level", () => {
    expect(findSAL(0)).toEqual(0);
    expect(findSAL(1)).toEqual(5);
    expect(findSAL(2)).toEqual(7);
    expect(findSAL(3)).toEqual(9);
    expect(findSAL(4)).toEqual(10);
    expect(findSAL(5)).toEqual(11);
    expect(findSAL(20)).toEqual(26);
  });
});

describe("calculate Base Speed", () => {
  it("should find the correct index from weight", () => {
    expect(findKey(10, table1A_BaseSpeed.lbs)).toEqual(0);
    expect(findKey(15, table1A_BaseSpeed.lbs)).toEqual(1);
    expect(findKey(20, table1A_BaseSpeed.lbs)).toEqual(2);
    expect(findKey(25, table1A_BaseSpeed.lbs)).toEqual(3);
    expect(findKey(100, table1A_BaseSpeed.lbs)).toEqual(14);
    expect(findKey(125, table1A_BaseSpeed.lbs)).toEqual(15);
    expect(findKey(150, table1A_BaseSpeed.lbs)).toEqual(16);
    expect(findKey(200, table1A_BaseSpeed.lbs)).toEqual(17);
  });
  it("should find base speed using STR and Weight", () => {
    expect(calcBaseSpeed(21, 200)).toEqual(2);
    expect(calcBaseSpeed(21, 10)).toEqual(4.5);
    expect(calcBaseSpeed(1, 10)).toEqual(1.5);
    expect(calcBaseSpeed(1, 20)).toEqual(1);
    expect(calcBaseSpeed(14, 45)).toEqual(1.5);
    expect(calcBaseSpeed(14, 90)).toEqual(1);
  });
  it("should return error msg if weight exceeds carrying capicity", () => {
    expect(calcBaseSpeed(1, 25)).toEqual("Weight Limit Exceeded");
    expect(calcBaseSpeed(14, 200)).toEqual("Weight Limit Exceeded");
  });
});
