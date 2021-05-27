import { filterEquipment, createFilterSet, toggleTagsInList } from './equipmentListFunctions';
import * as equipmentModule from '../data/equipmentList';

const equipmentDouble = [
  {
    name: 'Basic Pouch',
    weight: 0.4,
    qty: 1,
    tags: ['Load Bearing', 'ALICE'],
  },
  { tags: ['WW2'] },
  { tags: ['ALICE', 'Load Bearing'] },
  { tags: ['test'] },
  { tags: ['WW2', 'Medical'] },
  { tags: ['test', 'Rations'] },
  { tags: ['ALICE', 'Load Bearing'] },
  { tags: ['test'] },
  { tags: ['WW2', 'Load Bearing'] },
  { tags: ['ALICE', 'Load Bearing'] },
  { tags: ['WW2', 'Rations'] },
  { tags: ['ALICE', 'Load Bearing'] },
  { tags: ['test', 'Rations'] },
];

equipmentModule.equipment = jest.fn(() => equipmentDouble);

describe('filtering the equipment list', () => {
  it('should filter based on type key value', () => {
    expect(filterEquipment(['WW2']).length).toBe(4);
    expect(filterEquipment(['ALICE']).length).toBe(5);
    expect(filterEquipment(['Load Bearing']).length).toBe(6);
  });
  it('should be able to filter more than one tag', () => {
    expect(filterEquipment(['Rations', 'Medical']).length).toBe(4);
  });
  it('should not filter if parameter is empty array', () => {
    expect(filterEquipment([]).length).toBe(equipmentDouble.length);
  });
});

describe('making a set of equipment tags', () => {
  const smallList = [
    {
      name: 'Baseball Bat',
      weight: 2.2,
      qty: 1,
      tags: ['Melee'],
    },
    {
      name: 'Bayonet',
      weight: 1,
      qty: 1,
      tags: ['Melee'],
    },
  ];
  it('should return a set of individual tags', () => {
    const tags = createFilterSet(smallList);
    expect(tags.length).toBe(1);
  });
  it('should add multiple tags from single target array', () => {
    const list = [...smallList,
      { name: 'Basic Pouch',
        weight: 0.4,
        tags: ['Load Bearing', 'ALICE'] },
    ];
    const tags = createFilterSet(list);
    expect(tags.length).toBe(3);
  });
});

describe('handling tags for filter list', () => {
  it('should add tag to filter list if not present', () => {
    let list = [];
    list = toggleTagsInList(list, 'test');
    expect(list).toStrictEqual(['test']);
    list = toggleTagsInList(list, 'next');
    expect(list).toStrictEqual(['test', 'next']);
  });
  it('should remove tag from list if already present', () => {
    let list = ['test', 'last'];
    list = toggleTagsInList(list, 'test');
    expect(list).toStrictEqual(['last']);
    list = toggleTagsInList(list, 'last');
    expect(list.length).toBe(0);
  });
});