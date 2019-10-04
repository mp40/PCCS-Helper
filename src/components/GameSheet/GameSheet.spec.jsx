import React from 'react';
import { shallow, mount } from 'enzyme';
import GameSheet from './component';
import { testFAMAS } from '../../helpers/testHelpers';

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
  gunLevel: 4,
  handLevel: 1,
};

const combatStats = {
  baseSpeed: 2,
  maxSpeed: 6,
  SAL: 7,
  CE: 3,
  ISF: 17,
  ASF: 13,
  knockoutValue: 9,
  damageBonus: 1.5,
  combatActions: [5, 3],
};

const props = {
  totalWeight: 20.5,
  characterStats,
  combatStats,
  gear: gearDouble(),
  selectCurrentView: jest.fn(),
};

global.print = jest.fn();

describe('<GameSheet>', () => {
  describe('the gamesheet lifecycle', () => {
    const wrapper = mount(<GameSheet {...props} />);
    const spySelectCurrentView = jest.spyOn(wrapper.props(), 'selectCurrentView');
    it('should render', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it('should call window.print after rendering', () => {
      expect(global.print).toHaveBeenCalled();
    });
    it('should call selectCurrentView with "createChar"', () => {
      expect(spySelectCurrentView).toHaveBeenCalled();
    });
  });
  describe('firearm table', () => {
    const wrapper = shallow(<GameSheet {...props} />);
    const wrapperGunTable = wrapper.find('WeaponsCardWeaponStats').dive();
    it('should render first gun in firearms list', () => {
      expect(wrapperGunTable.text()).toContain('FAMAS');
    });
    it('should css for a4 size paper', () => {
      expect(wrapperGunTable.find('.a4WeaponStatTable').exists()).toBe(true);
    });
  });
  describe('combat stats', () => {
    const wrapper = shallow(<GameSheet {...props} />);
    const wrapperCombatStats = wrapper.find('CombatStatsInfo').dive();
    it('should render combat stats info box', () => {
      expect(wrapper.find('CombatStatsInfo').exists()).toBe(true);
    });
    it('should render base speed', () => {
      expect(wrapperCombatStats.text()).toContain('Base Speed:2');
    });
    it('should render max speed', () => {
      expect(wrapperCombatStats.text()).toContain('Max Speed:6');
    });
    it('should render knockout value', () => {
      expect(wrapperCombatStats.text()).toContain('Knockout Val:9');
    });
    it('should render gun combat level', () => {
      expect(wrapperCombatStats.text()).toContain('Gun Combat:4');
    });
    it('should render hand to hand level', () => {
      expect(wrapperCombatStats.text()).toContain('Melee Combat:1');
    });
    it('should render damage bonus', () => {
      expect(wrapperCombatStats.text()).toContain('Damage Bonus:1.5');
    });
  });
});
