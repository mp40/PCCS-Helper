import React from 'react';
import { shallow } from 'enzyme';
import HandToHandTable, {
  findWeaponSpeed,
  findWeaponClass,
  findWeaponCuttingDamage,
  findWeaponStabbingDamage,
  findWeaponRange,
  findParryCost,
  findSetCost,
  findStrikeCost,
  findRecoverCost,
} from './HandToHandTable';

import * as meleeModule from '../../data/melee';

const meleeDouble = [
  { Name: 'Not In List Weapon' },
  {
    Name: 'Knife, Bowie',
    ws: '2.8',
    wc: '2',
    IDc: '(3)+2',
    IDs: '(3)',
    Rng: '1',
  },
  {
    Name: 'Knife, Combat',
    ws: '2.8',
    wc: '2',
    IDc: '(3)+1',
    IDs: '(3)',
    Rng: '1',
  },
  {
    Name: 'Wood Axe (2 hands)',
    ws: '1.7',
    wc: '-2',
    IDc: '(10)+6',
    IDs: '(5)',
    Rng: '2',
  },
];

const meleeList = () => ['Knife, Bowie', 'Wood Axe (2 hands)'];

describe('the hand to hand data table', () => {
  const wrapper = shallow(<HandToHandTable meleeList={meleeList()} meleeLevel={1} />);

  beforeEach(() => {
    meleeModule.meleeData = jest.fn(() => [...meleeDouble]);
  });

  it('should display weapon name', () => {
    expect(wrapper.text()).toContain('Knife, Bowie');
    expect(wrapper.text()).toContain('Wood Axe (2 hands)');
  });

  it('should display weapon speed', () => {
    expect(wrapper.find('.speed').at(0).text()).toBe('2.8');
    expect(wrapper.find('.speed').at(1).text()).toBe('1.7');
  });

  it('should display weapon class', () => {
    expect(wrapper.find('.class').at(0).text()).toBe('2');
    expect(wrapper.find('.class').at(1).text()).toBe('-2');
  });

  it('should display the correct attack level', () => {
    expect(wrapper.find('.level').at(0).text()).toBe('3');
    expect(wrapper.find('.level').at(1).text()).toBe('-1');
  });

  it('should display the parry cost', () => {
    expect(wrapper.find('.parry').at(0).text()).toBe('1');
    expect(wrapper.find('.parry').at(1).text()).toBe('1');
  });

  it('should display the set cost', () => {
    expect(wrapper.find('.set').at(0).text()).toBe('1');
    expect(wrapper.find('.set').at(1).text()).toBe('2');
  });

  it('should display the strike cost', () => {
    expect(wrapper.find('.strike').at(0).text()).toBe('1');
    expect(wrapper.find('.strike').at(1).text()).toBe('1');
  });

  it('should display the recover cost', () => {
    expect(wrapper.find('.rec').at(0).text()).toBe('1');
    expect(wrapper.find('.rec').at(1).text()).toBe('2');
  });

  it('should display the cutting damage', () => {
    expect(wrapper.find('.cut').at(0).text()).toBe('(3)+2');
    expect(wrapper.find('.cut').at(1).text()).toBe('(10)+6');
  });

  it('should display the stabbing damage', () => {
    expect(wrapper.find('.stab').at(0).text()).toBe('(3)');
    expect(wrapper.find('.stab').at(1).text()).toBe('(5)');
  });

  it('should display the weapon range', () => {
    expect(wrapper.find('.rng').at(0).text()).toBe('1');
    expect(wrapper.find('.rng').at(1).text()).toBe('2');
  });
});

describe('HandToHandTable helpers', () => {
  beforeEach(() => {
    meleeModule.meleeData = jest.fn(() => meleeDouble);
  });

  it('should find the correct weapon speed', () => {
    expect(findWeaponSpeed('Knife, Bowie')).toBe('2.8');
    expect(findWeaponSpeed('Wood Axe (2 hands)')).toBe('1.7');
  });

  it('should find the correct weapon class', () => {
    expect(findWeaponClass('Knife, Bowie')).toBe('2');
    expect(findWeaponClass('Wood Axe (2 hands)')).toBe('-2');
  });

  it('should find the correct weapon cutting damage', () => {
    expect(findWeaponCuttingDamage('Knife, Bowie')).toBe('(3)+2');
    expect(findWeaponCuttingDamage('Wood Axe (2 hands)')).toBe('(10)+6');
  });

  it('should find the correct weapon stabbing damage', () => {
    expect(findWeaponStabbingDamage('Knife, Bowie')).toBe('(3)');
    expect(findWeaponStabbingDamage('Wood Axe (2 hands)')).toBe('(5)');
  });

  it('should find the correct weapon range', () => {
    expect(findWeaponRange('Knife, Bowie')).toBe('1');
    expect(findWeaponRange('Wood Axe (2 hands)')).toBe('2');
  });

  it('should find the correct parry cost', () => {
    expect(findParryCost(1)).toBe(3);
    expect(findParryCost(1.1)).toBe(3);
    expect(findParryCost(1.2)).toBe(2);
    expect(findParryCost(1.4)).toBe(2);
    expect(findParryCost(1.5)).toBe(1);
    expect(findParryCost(1.7)).toBe(1);
    expect(findParryCost(1.8)).toBe(1);
    expect(findParryCost(2.2)).toBe(1);
    expect(findParryCost(2.3)).toBe(1);
    expect(findParryCost(3.0)).toBe(1);
    expect(findParryCost(3.1)).toBe(1);
    expect(findParryCost(3.2)).toBe(1);
  });

  it('should find the correct set cost', () => {
    expect(findSetCost(1)).toBe(3);
    expect(findSetCost(1.1)).toBe(3);
    expect(findSetCost(1.2)).toBe(2);
    expect(findSetCost(1.4)).toBe(2);
    expect(findSetCost(1.5)).toBe(2);
    expect(findSetCost(1.7)).toBe(2);
    expect(findSetCost(1.8)).toBe(2);
    expect(findSetCost(2.2)).toBe(2);
    expect(findSetCost(2.3)).toBe(1);
    expect(findSetCost(3.0)).toBe(1);
    expect(findSetCost(3.1)).toBe(1);
    expect(findSetCost(3.2)).toBe(1);
  });

  it('should find the correct strike cost', () => {
    expect(findStrikeCost(1)).toBe(1);
    expect(findStrikeCost(1.1)).toBe(1);
    expect(findStrikeCost(1.2)).toBe(1);
    expect(findStrikeCost(1.4)).toBe(1);
    expect(findStrikeCost(1.5)).toBe(1);
    expect(findStrikeCost(1.7)).toBe(1);
    expect(findStrikeCost(1.8)).toBe(1);
    expect(findStrikeCost(2.2)).toBe(1);
    expect(findStrikeCost(2.3)).toBe(1);
    expect(findStrikeCost(3.0)).toBe(1);
    expect(findStrikeCost(3.1)).toBe(0.5);
    expect(findStrikeCost(3.2)).toBe(0.5);
  });

  it('should find the correct recover cost', () => {
    expect(findRecoverCost(1)).toBe(3);
    expect(findRecoverCost(1.1)).toBe(3);
    expect(findRecoverCost(1.2)).toBe(2);
    expect(findRecoverCost(1.4)).toBe(2);
    expect(findRecoverCost(1.5)).toBe(2);
    expect(findRecoverCost(1.7)).toBe(2);
    expect(findRecoverCost(1.8)).toBe(1);
    expect(findRecoverCost(2.2)).toBe(1);
    expect(findRecoverCost(2.3)).toBe(1);
    expect(findRecoverCost(3.0)).toBe(1);
    expect(findRecoverCost(3.1)).toBe(0.5);
    expect(findRecoverCost(3.2)).toBe(0.5);
  });
});
