import React from 'react';
import { shallow } from 'enzyme';

import { act } from 'react-dom/test-utils';

import { firearms } from '../../data/firearms';

import GameSheet from './component';

const testFAMAS = () => ({ ...firearms.FAMAS });

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
    let useEffect;
    let wrapper;
    let spySelectCurrentView;

    const waitOneTick = (simulate) => new Promise((resolve) => {
      setTimeout(() => {
        resolve(simulate);
      }, 0);
    });

    const mockUseEffect = () => {
      useEffect.mockImplementationOnce((f) => f());
    };

    beforeEach(async () => {
      useEffect = jest.spyOn(React, 'useEffect');

      mockUseEffect();

      await act(async () => {
        spySelectCurrentView = jest.fn();

        await waitOneTick((wrapper = await shallow(
          <GameSheet
            name="Biggles"
            characterStats={getCharacterStats()}
            combatStats={getCombatStats()}
            gear={gearDouble()}
            selectCurrentView={spySelectCurrentView}
          />,
        )));
      });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should call window.print after rendering', () => {
      expect(global.print).toHaveBeenCalled();
    });

    it('should call selectCurrentView with "createChar"', () => {
      expect(spySelectCurrentView).toHaveBeenCalledWith('createChar');
    });
  });

  describe('the character name', () => {
    const getWrapper = (name = '') => shallow(<GameSheet
      name={name}
      characterStats={getCharacterStats()}
      combatStats={getCombatStats()}
      gear={gearDouble()}
      selectCurrentView={selectCurrentView}
    />,

    );

    it('should not render the character name line if name does not exist', () => {
      const wrapper = getWrapper();

      expect(wrapper.find('.name').exists()).toBe(false);
    });

    it('should render the character name', () => {
      const wrapper = getWrapper('Biggles');

      expect(wrapper.find('.name').text()).toContain('Name: Biggles');
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

  describe('character combat stats', () => {
    const wrapper = shallow(<GameSheet
      name="Biggles"
      characterStats={getCharacterStats()}
      combatStats={getCombatStats()}
      gear={gearDouble()}
      selectCurrentView={selectCurrentView}
    />);

    it('should render combat stats info box', () => {
      expect(wrapper.find('Connect(CharacterInfo)').exists()).toBe(true);
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
