// TODO work out which of below can be deleted
// import { findGear, createArrayOfEquipment, filterEquipment, createFilterSet } from '../helpers/equipmentListFunctions';
import { equipment } from './equipmentList';

describe('validating equipment data', () => {
  const equipmentList = equipment();
  it('should have a name key with a string value', () => {
    for (let i = 0; i < equipmentList.length; i += 1) {
      expect(typeof equipmentList[i].name).toBe('string');
    }
  });
  it('should have a weight key with a number value', () => {
    for (let i = 0; i < equipmentList.length; i += 1) {
      expect(typeof equipmentList[i].weight).toBe('number');
    }
  });
  it('should have a qty key with a number value', () => {
    for (let i = 0; i < equipmentList.length; i += 1) {
      expect(typeof equipmentList[i].qty).toBe('number');
    }
  });
  it('should have a tags key with a array value with length of at least 1', () => {
    for (let i = 0; i < equipmentList.length; i += 1) {
      expect(Array.isArray(equipmentList[i].tags)).toBe(true);
      expect(equipmentList[i].tags.length > 0).toBe(true);
    }
  });
});

// describe('finding things in the equipment list', () => {
//   it('should return items based on name', () => {
//     expect(findGear('Belt').weight).toBe(0.7);
//     expect(findGear('Canteen').weight).toBe(2.5);
//     expect(findGear('Rock').weight).toBe(1.5);
//     expect(findGear('Combat Stretcher, Folding').weight).toBe(15);
//   });
// });

// describe('filtering the equipment list', () => {
//   it('should filter based on type key value', () => {
//     expect(Object.keys(filterEquipment(['WW2'])).length).toBe(14);
//     expect(filterEquipment(['WW2'])['Bayonet, M1 w/M7 scabard'].weight).toBe(1.56);
//     expect(Object.keys(filterEquipment(['ALICE'])).length).toBe(5);
//     expect(Object.keys(filterEquipment(['Load Bearing'])).length).toBe(34);
//   });
//   it('should return filtered list with correct key names', () => {
//     expect(typeof filterEquipment(['WW2'])).toEqual('object');
//     expect(filterEquipment(['WW2'])).toHaveProperty('Bayonet, M1 w/M7 scabard');
//   });
//   it('should be able to filter more than one tag', () => {
//     expect(Object.keys(filterEquipment(['Rations', 'Medical'])).length).toBe(21);
//   });
//   it('should not filter if parameter is empty array', () => {
//     expect(Object.keys(filterEquipment([])).length).toBe(88);
//   });
// });

// describe('creating an array of equipment', () => {
//   const smallList = {
//     'Baseball Bat': {
//       weight: 2.2,
//       tags: ['Melee'],
//     },
//     'Basic Pouch': {
//       weight: 0.4,
//       tags: ['Load Bearing', 'ALICE'],
//     },
//     Bayonet: {
//       weight: 1,
//       tags: ['Melee'],
//     },
//   };
//   const result = createArrayOfEquipment(smallList);
//   it('should take nested objects and convert to an array of objects', () => {
//     expect(Array.isArray(result)).toBe(true);
//   });
//   it('should have a length equal to the equipment objects', () => {
//     expect(result.length).toBe(3);
//   });
//   it('should create objects with a name', () => {
//     expect(result[0]).toEqual({ name: 'Baseball Bat', weight: 2.2 });
//   });
//   it('should create objects with a weight', () => {
//     expect(result[0]).toEqual({ name: 'Baseball Bat', weight: 2.2 });
//   });
// });

// describe('making a set of equipment tags', () => {
//   it('should return a set of tags', () => {
//     const smallList = {
//       'Baseball Bat': {
//         weight: 2.2,
//         tags: ['Melee'],
//       },
//       Bayonet: {
//         weight: 1,
//         tags: ['Melee'],
//       },
//     };
//     const tags = createFilterSet(smallList);
//     expect(tags.length).toBe(1);
//   });
//   it('should add multiple tags from singlr target array', () => {
//     const list = {
//       'Baseball Bat': {
//         weight: 2.2,
//         tags: ['Melee'],
//       },
//       'Basic Pouch': {
//         weight: 0.4,
//         tags: ['Load Bearing', 'ALICE'],
//       },
//       Bayonet: {
//         weight: 1,
//         tags: ['Melee'],
//       },
//     };
//     const tags = createFilterSet(list);
//     expect(tags.length).toBe(3);
//   });
// });
