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
    Name: 'Wood Axe (2 hand)',
    ws: '1.7',
    wc: '-2',
    IDc: '(10)+6',
    IDs: '(5)',
    Rng: '2',
  },
];

meleeModule.meleeData = jest.fn(() => meleeDouble);

const meleeList = () => ['Knife, Bowie', 'Wood Axe (2 hand)'];


describe('the hand to hand data table', () => {
  const wrapper = shallow(<HandToHandTable meleeList={meleeList()} meleeLevel={1} />);
  it('should display weapon name', () => {
    expect(wrapper.text()).toContain('Knife, Bowie');
    expect(wrapper.text()).toContain('Wood Axe (2 hand)');
  });
  it('should display weapon speed', () => {
    expect(wrapper.find('.weapon0').find('.speed').text()).toBe('2.8');
    expect(wrapper.find('.weapon1').find('.speed').text()).toBe('1.7');
  });
  it('should display weapon class', () => {
    expect(wrapper.find('.weapon0').find('.class').text()).toBe('2');
    expect(wrapper.find('.weapon1').find('.class').text()).toBe('-2');
  });
  it('should display the correct attack level', () => {
    expect(wrapper.find('.weapon0').find('.level').text()).toBe('3');
    expect(wrapper.find('.weapon1').find('.level').text()).toBe('-1');
  });
  it('should display the parry cost', () => {
    expect(wrapper.find('.weapon0').find('.parry').text()).toBe('1');
    expect(wrapper.find('.weapon1').find('.parry').text()).toBe('1');
  });
  it('should display the set cost', () => {
    expect(wrapper.find('.weapon0').find('.set').text()).toBe('1');
    expect(wrapper.find('.weapon1').find('.set').text()).toBe('2');
  });
  it('should display the strike cost', () => {
    expect(wrapper.find('.weapon0').find('.strike').text()).toBe('1');
    expect(wrapper.find('.weapon1').find('.strike').text()).toBe('1');
  });
  it('should display the recover cost', () => {
    expect(wrapper.find('.weapon0').find('.rec').text()).toBe('1');
    expect(wrapper.find('.weapon1').find('.rec').text()).toBe('2');
  });
  it('should display the cutting damage', () => {
    expect(wrapper.find('.weapon0').find('.cut').text()).toBe('(3)+2');
    expect(wrapper.find('.weapon1').find('.cut').text()).toBe('(10)+6');
  });
  it('should display the stabbing damage', () => {
    expect(wrapper.find('.weapon0').find('.stab').text()).toBe('(3)');
    expect(wrapper.find('.weapon1').find('.stab').text()).toBe('(5)');
  });
  it('should display the weapon range', () => {
    expect(wrapper.find('.weapon0').find('.rng').text()).toBe('1');
    expect(wrapper.find('.weapon1').find('.rng').text()).toBe('2');
  });
});
describe('HandToHandTable helpers', () => {
  it('should find the correct weapon speed', () => {
    expect(findWeaponSpeed('Knife, Bowie')).toBe('2.8');
    expect(findWeaponSpeed('Wood Axe (2 hand)')).toBe('1.7');
  });
  it('should find the correct weapon class', () => {
    expect(findWeaponClass('Knife, Bowie')).toBe('2');
    expect(findWeaponClass('Wood Axe (2 hand)')).toBe('-2');
  });
  it('should find the correct weapon cutting damage', () => {
    expect(findWeaponCuttingDamage('Knife, Bowie')).toBe('(3)+2');
    expect(findWeaponCuttingDamage('Wood Axe (2 hand)')).toBe('(10)+6');
  });
  it('should find the correct weapon stabbing damage', () => {
    expect(findWeaponStabbingDamage('Knife, Bowie')).toBe('(3)');
    expect(findWeaponStabbingDamage('Wood Axe (2 hand)')).toBe('(5)');
  });
  it('should find the correct weapon range', () => {
    expect(findWeaponRange('Knife, Bowie')).toBe('1');
    expect(findWeaponRange('Wood Axe (2 hand)')).toBe('2');
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
