import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import HandToHandTable, {
  findWeaponSpeed,
  findWeaponClass,
  findWeaponCuttingDamage,
  findWeaponStabbingDamage,
  findWeaponRange,
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
// import GameSheet from './index.jsx';
// import { mountAppWithStore, testFAMAS } from '../../helpers/testHelpers';
// import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';

const meleeList = () => ['Knife, Bowie', 'Wood Axe (2 hand)'];


describe('the hand to hand data table', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const wrapper = shallow(<HandToHandTable meleeList={meleeList()} meleeLevel={1} />);
  it('should display weapon name', () => {
    expect(wrapper.text()).toContain('Knife, Bowie');
    // expect(wrapper.text()).toContain('Wood Axe (2 hand)');
  });
  it('should display weapon speed', () => {
    expect(wrapper.find('.weapon0').find('.speed').text()).toBe('2.8');
  });
  it('should display weapon class', () => {
    expect(wrapper.find('.weapon0').find('.class').text()).toBe('2');
  });
  it('should display the correct attack level', () => {
    expect(wrapper.find('.weapon0').find('.level').text()).toBe('3');
  });
  it('should display the parry cost', () => {
    expect(wrapper.find('.weapon0').find('.parry').text()).toBe('1');
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
});

//   {
//     Name: 'Knife, Bowie',
//     ws: '2.8',
//     wc: '2',
//     IDc: '(3)+2',
//     IDs: '(3)',
//     Rng: '1',
//   },
//   {
//     Name: 'Knife, Combat',
//     ws: '2.8',
//     wc: '2',
//     IDc: '(3)+1',
//     IDs: '(3)',
//     Rng: '1',
//   },
// {
//     Name: 'Wood Axe (2 hand)',
//     ws: '1.7',
//     wc: '-2',
//     IDc: '(10)+6',
//     IDs: '(5)',
//     Rng: '2',
//   },
