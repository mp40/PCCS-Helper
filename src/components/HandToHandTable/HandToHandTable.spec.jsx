import React from 'react';
import { shallow } from 'enzyme';
import HandToHandTable from '.';

const meleeDouble = {
  'Knife, Bowie': {
    Name: 'Knife, Bowie',
    ws: '2.8',
    wc: '2',
    IDc: '(3)+2',
    IDs: '(3)',
    Rng: '1',
  },
  'Knife, Combat': {
    Name: 'Knife, Combat',
    ws: '2.8',
    wc: '2',
    IDc: '(3)+1',
    IDs: '(3)',
    Rng: '1',
  },
  'Wood Axe (2 hands)': {
    Name: 'Wood Axe (2 hands)',
    ws: '1.7',
    wc: '-2',
    IDc: '(10)+6',
    IDs: '(5)',
    Rng: '2',
  },
};

jest.mock('../../data/melee', () => {
  const actual = jest.requireActual('../../data/melee');
  return {
    __esModule: true,
    meleeData: meleeDouble,
    weaponSpeedActionCosts: actual.weaponSpeedActionCosts,
  };
});

const meleeList = () => ['Knife, Bowie', 'Wood Axe (2 hands)'];

describe('the hand to hand data table', () => {
  const meleeLevel = 1;
  const wrapper = shallow(<HandToHandTable meleeList={meleeList()} meleeLevel={meleeLevel} />);

  it('should display weapon name', () => {
    expect(wrapper.text()).toContain('Knife, Bowie');
    expect(wrapper.text()).toContain('Wood Axe (2 hands)');
  });

  it('should display details of first weapon', () => {
    const name = 'Knife, Bowie';
    const ws = '2.8';
    const attackClass = 2;
    const attackLevel = attackClass + meleeLevel;
    const parry = 1;
    const set = 1;
    const strike = 1;
    const rec = 1;
    const cut = '(3)+2';
    const stab = '(3)';
    const rng = 1;

    expect(wrapper.text()).toContain(`${name}${ws}${attackClass}${attackLevel}${parry}${set}${strike}${rec}${cut}${stab}${rng}`);
  });

  it('should display details of second weapon', () => {
    const name = 'Wood Axe (2 hands)';
    const ws = '1.7';
    const attackClass = -2;
    const attackLevel = attackClass + meleeLevel;
    const parry = 1;
    const set = 2;
    const strike = 1;
    const rec = 2;
    const cut = '(10)+6';
    const stab = '(5)';
    const rng = 2;

    expect(wrapper.text()).toContain(`${name}${ws}${attackClass}${attackLevel}${parry}${set}${strike}${rec}${cut}${stab}${rng}`);
  });
});
