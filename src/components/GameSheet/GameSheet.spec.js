import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import GameSheet from './index.jsx';
import { mountAppWithStore, testFAMAS } from '../../helpers/testHelpers';
import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';

const gearDouble = () => ({
  uniform: 'Normal',
  equipment: [],
  firearms: [testFAMAS()],
  grenades: [],
  launchers: [],
});

const characterStats = {
  str: 10,
  int: 10,
  hlt: 10,
  wil: 10,
  agi: 10,
  gunLevel: 0,
  handLevel: 0,
};

const combatStats = {
  baseSpeed: 3,
  maxSpeed: 6,
  SAL: 7,
  CE: 3,
  ISF: 10,
  ASF: 10,
  knockoutValue: 5,
  damageBonus: 1,
  combatActions: [4, 4],
};

const props = {
  totalWeight: 10,
  characterStats,
  combatStats,
  gear: gearDouble(),
};

describe('<GameSheet>', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const wrapper = shallow(<GameSheet {...props} />);
  describe('firearm table', () => {
    const wrapperGunTable = wrapper.find('WeaponsCardWeaponStats').dive();
    it('should render first gun in firearms list', () => {
      expect(wrapperGunTable.text()).toContain('FAMAS');
    });
    it('should css for a4 size paper', () => {
      expect(wrapperGunTable.find('.a4WeaponStatTable').exists()).toBe(true);
    });
  });
});
