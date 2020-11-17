import React from 'react';
import { shallow, mount } from 'enzyme';

import { testFAMAS } from '../../helpers/testHelpers';

import GameSheet from './component';

const grenadeDouble = { name: 'The Holy Hand Grenade Of Antioch', qty: 1 };

const gearDouble = () => ({
  uniform: 'Normal',
  equipment: [],
  firearms: [testFAMAS()],
  grenades: [],
  launchers: [],
});

const getCharacterStats = () => ({
  str: 10,
  int: 10,
  hlt: 10,
  wil: 10,
  agi: 10,
  gunLevel: 4,
  handLevel: 1,
});

const getCombatStats = () => ({
  baseSpeed: 2,
  maxSpeed: 6,
  SAL: 7,
  CE: 3,
  ISF: 17,
  ASF: 13,
  knockoutValue: 9,
  damageBonus: 1.5,
  gunCombatActions: 5,
  handCombatActions: 3,
});

global.print = jest.fn();

describe('<GameSheet>', () => {
  const selectCurrentView = jest.fn();

  describe('the gamesheet lifecycle', () => {
    const wrapper = mount(
      <GameSheet
        name="Biggles"
        characterStats={getCharacterStats()}
        combatStats={getCombatStats()}
        gear={gearDouble()}
        selectCurrentView={selectCurrentView}
      />);

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

  describe('the character name', () => {
    it('should not render the character name line if name does not exist', () => {
      const wrapper = shallow(<GameSheet
        name=""
        characterStats={getCharacterStats()}
        combatStats={getCombatStats()}
        gear={gearDouble()}
        selectCurrentView={selectCurrentView}
      />);

      expect(wrapper.find('.character-name').exists()).toBe(false);
    });

    it('should render the character name', () => {
      const wrapper = shallow(<GameSheet
        name="Biggles"
        characterStats={getCharacterStats()}
        combatStats={getCombatStats()}
        gear={gearDouble()}
        selectCurrentView={selectCurrentView}
      />);

      expect(wrapper.find('.character-name').text()).toContain('Name: Biggles');
    });
  });

  describe('firearm table', () => {
    const wrapper = shallow(<GameSheet
      name="Biggles"
      characterStats={getCharacterStats()}
      combatStats={getCombatStats()}
      gear={gearDouble()}
      selectCurrentView={selectCurrentView}
    />);

    const wrapperGunTable = wrapper.find('WeaponStatsTable').dive();

    it('should render first gun in firearms list', () => {
      expect(wrapper.text()).toContain('FAMAS');
    });

    it('should css for a4 size paper', () => {
      expect(wrapperGunTable.find('.a4WeaponStatTable').exists()).toBe(true);
    });
  });

  describe('combat stats', () => {
    const wrapper = shallow(<GameSheet
      name="Biggles"
      characterStats={getCharacterStats()}
      combatStats={getCombatStats()}
      gear={gearDouble()}
      selectCurrentView={selectCurrentView}
    />);

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

  describe('conditional rendering of sections', () => {
    it('should not render grenade list if no grenades in inventory', () => {
      const wrapper = shallow(<GameSheet
        name="Biggles"
        characterStats={getCharacterStats()}
        combatStats={getCombatStats()}
        gear={gearDouble()}
        selectCurrentView={selectCurrentView}
      />);

      expect(wrapper.find('GrenadeList').exists()).toBe(false);
    });

    it('should render grenade list if grenades in inventory', () => {
      const wrapper = shallow(<GameSheet
        name="Biggles"
        characterStats={getCharacterStats()}
        combatStats={getCombatStats()}
        gear={{ uniform: 'Normal',
          equipment: [],
          firearms: [testFAMAS()],
          grenades: [grenadeDouble],
          launchers: [] }}
        selectCurrentView={selectCurrentView}
      />);

      expect(wrapper.find('GrenadeList').exists()).toBe(true);
    });

    it('should render melee list if melee weapons in inventory', () => {
      const wrapper = shallow(<GameSheet
        name="Biggles"
        characterStats={getCharacterStats()}
        combatStats={getCombatStats()}
        gear={gearDouble()}
        selectCurrentView={selectCurrentView}
      />);

      expect(wrapper.find('HandToHandTable').exists()).toBe(true);
    });

    it('should not render melee list if no melee weapons in inventory', () => {
      const wrapper = shallow(<GameSheet
        name="Biggles"
        characterStats={getCharacterStats()}
        combatStats={getCombatStats()}
        gear={{ uniform: 'Normal',
          equipment: [],
          firearms: [],
          grenades: [],
          launchers: [] }}
        selectCurrentView={selectCurrentView}
      />);

      expect(wrapper.find('HandToHandTable').exists()).toBe(false);
    });
  });
});
