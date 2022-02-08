import React from 'react';
import { shallow } from 'enzyme';

import { act } from 'react-dom/test-utils';

import { firearms } from '../../data/firearms';

import GameSheet from './component';

const testFAMAS = () => ({ ...firearms.FAMAS });

const grenadeDouble = { name: 'The Holy Hand Grenade Of Antioch', qty: 1, length: 1, weight: 1, r: 1, data: {}, heading: '' };

global.print = jest.fn();

describe('<GameSheet>', () => {
  let wrapper;
  const closeModal = jest.fn();

  const getWrappedComponent = () => shallow(
    <GameSheet
      name="Biggles"
      str={10}
      int={10}
      hlt={10}
      wil={10}
      agi={10}
      gunLevel={4}
      handLevel={1}
      equipment={[]}
      firearms={[testFAMAS()]}
      grenades={[]}
      helmet={undefined}
      vest={undefined}
      gunCombatActions={5}
      handCombatActions={3}
      knockoutValue={9}
      closeModal={closeModal}
    />);

  wrapper = getWrappedComponent();

  it('should render the character name', () => {
    expect(wrapper.find('.name').text()).toContain('Name: Biggles');
  });

  it('should not render the character name line if name does not exist', () => {
    wrapper.setProps({ name: undefined });

    expect(wrapper.find('.name').exists()).toBe(false);
  });

  it('should render first gun in firearms list', () => {
    expect(wrapper.text()).toContain('FAMAS');
  });

  it('should css for a4 size paper', () => {
    const wrapperGunTable = wrapper.find('WeaponStatsTable').dive();

    expect(wrapperGunTable.find('.a4WeaponStatTable').exists()).toBe(true);
  });

  it('should render combat stats info box', () => {
    expect(wrapper.find('Connect(CharacterInfo)').exists()).toBe(true);
  });

  it('should not render grenade list if no grenades in inventory', () => {
    expect(wrapper.find('GrenadeList').exists()).toBe(false);
  });

  it('should render grenade list if grenades in inventory', () => {
    wrapper.setProps({ grenades: [grenadeDouble] });

    expect(wrapper.find('GrenadeList').exists()).toBe(true);
  });

  it('should render melee list if melee weapons in inventory', () => {
    expect(wrapper.find('HandToHandTable').exists()).toBe(true);
  });

  it('should not render melee list if no melee weapons in inventory', () => {
    wrapper.setProps({ firearms: [] });

    expect(wrapper.find('HandToHandTable').exists()).toBe(false);
  });

  describe('the gamesheet lifecycle', () => {
    let useEffect;

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
        await waitOneTick((wrapper = await getWrappedComponent()
        ));
      });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should call window.print after rendering', () => {
      expect(global.print).toHaveBeenCalled();
    });

    it('should close modal after printing', () => {
      expect(closeModal).toHaveBeenCalled();
    });
  });
});
