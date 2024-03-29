import React from 'react';
import { mount } from 'enzyme';

import Shooting from './index';

import { firearms } from '../../../data/firearms';
import { launcherList } from '../../../data/launchers';

const testFAMAS = () => ({ ...firearms.FAMAS });
const testM16 = () => ({ ...firearms.M16 });
const testM60 = () => ({ ...firearms.M60 });
const testM79 = () => ({ ...launcherList.M79 });

describe('Default ROF Selection', () => {
  const setWeapon = jest.fn();
  const getWrapper = (firearm) => mount(<Shooting weapon={firearm} level={0} setWeapon={setWeapon} />);

  it('should set selector to Single by default', () => {
    const selector = getWrapper(testFAMAS()).find('.selector');

    expect(selector.find('.Single').exists()).toBe(true);
  });

  it('should set selector to Auto if not able to fire Single', () => {
    const selector = getWrapper(testM60()).find('.selector');

    expect(selector.find('.Auto').exists()).toBe(true);
  });
});

describe('Changing Firearm', () => {
  const firearm = testFAMAS();
  const setWeapon = jest.fn();
  const wrapper = mount(<Shooting weapon={firearm} level={0} setWeapon={setWeapon} />);
  wrapper.find('PewPew').invoke('setRof')('Auto');

  it('should reset ROF on weapon change', () => {
    wrapper.setProps({ weapon: testM16() });
    wrapper.update();

    expect(wrapper.find('PewPew').props().rof).toBe('Single');
  });

  it('should clear aims on weapon change', () => {
    wrapper.find('button[children="+"]').simulate('click');
    wrapper.setProps({ weapon: testM16() });
    wrapper.update();

    expect(wrapper.text()).toContain('Aims1');
  });

  it('should clear situation mods on weapon change', () => {
    wrapper.find('span[children="Situation"]').closest('button').simulate('click');
    wrapper.find('CheckBox').at(0).simulate('click');
    wrapper.find('SituationSelectModal').invoke('setModal')(false);

    wrapper.setProps({ weapon: testM16() });
    wrapper.update();

    expect(wrapper.find('span[children="Situation"]').closest('button').text()).toBe('SituationALM: 0');
  });
});

describe('Shooting Card Integration', () => {
  const firearm = testFAMAS();
  const setWeapon = jest.fn();
  const getWrapper = (level = 0) => mount(<Shooting weapon={firearm} level={level} setWeapon={setWeapon} />);

  describe('level 0 Standing Shooter vs Standing Target, 1 Aim, Single Shot', () => {
    it('should have 5% chance to hit at Range 5', () => {
      const wrapper = getWrapper();
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=5]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 5%');
    });

    it('should have no chance to hit at Range 25', () => {
      const wrapper = getWrapper();
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=25]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: NA');
    });

    it('should have no chance to hit at Range 50', () => {
      const wrapper = getWrapper();
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=50]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: NA');
    });

    it('should have no chance to hit at Range 100', () => {
      const wrapper = getWrapper();
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=100]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: NA');
    });

    it('should have no chance to hit at Range 400', () => {
      const wrapper = getWrapper();
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=400]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: NA');
    });
  });

  describe('level 0 Standing Shooter vs Standing Target, 1 Aim, Auto Shot', () => {
    it('should have 47% chance to hit elevation at Range 5', () => {
      const wrapper = getWrapper();
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=5]').simulate('click');
      wrapper.find('button[children="Auto"]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 47%');
    });

    it('should have 11% chance to hit elevation at Range 25', () => {
      const wrapper = getWrapper();
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=25]').simulate('click');
      wrapper.find('button[children="Auto"]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 11%');
    });

    it('should have 6% chance to hit elevation at Range 50', () => {
      const wrapper = getWrapper();
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=50]').simulate('click');
      wrapper.find('button[children="Auto"]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 6%');
    });

    it('should have 2% chance to hit elevation at Range 100', () => {
      const wrapper = getWrapper();
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=100]').simulate('click');
      wrapper.find('button[children="Auto"]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 2%');
    });

    it('should have 1% chance to hit elevation at Range 200', () => {
      const wrapper = getWrapper();
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=200]').simulate('click');
      wrapper.find('button[children="Auto"]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 1%');
    });

    it('should have 0% chance to hit elevation at Range 300', () => {
      const wrapper = getWrapper();
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=300]').simulate('click');
      wrapper.find('button[children="Auto"]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 0%');
    });

    it('should have no chance to hit elevation at Range 400', () => {
      const wrapper = getWrapper();
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=400]').simulate('click');
      wrapper.find('button[children="Auto"]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: NA');
    });
  });

  describe('level 4 Kneeling Shooter vs Target Firing Over Cover, 3 Aims, Single Shot', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = getWrapper(4);

      wrapper.find('span[children="Shooter Stance"]').closest('button').simulate('click');
      wrapper.find('button[children="Kneeling"]').simulate('click');

      wrapper.find('span[children="Target Size"]').closest('button').simulate('click');
      wrapper.find('button[children="Fire Over/Around"]').simulate('click');

      wrapper.find('span[children="Aims"]').closest('button').simulate('click');
      wrapper.find('button[children=3]').simulate('click');
    });

    it('should have 96% chance to hit at Range 5', () => {
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=5]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 96%');
    });

    it('should have 27% chance to hit at Range 25', () => {
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=25]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 27%');
    });

    it('should have 9% chance to hit at Range 50', () => {
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=50]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 9%');
    });

    it('should have 3% chance to hit at Range 100', () => {
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=100]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 3%');
    });
  });

  describe('level 4 Kneeling Shooter vs Target Firing Over Cover, 3 Aims, Auto fire', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = getWrapper(4);

      wrapper.find('span[children="Shooter Stance"]').closest('button').simulate('click');
      wrapper.find('button[children="Kneeling"]').simulate('click');

      wrapper.find('span[children="Target Size"]').closest('button').simulate('click');
      wrapper.find('button[children="Fire Over/Around"]').simulate('click');

      wrapper.find('span[children="Aims"]').closest('button').simulate('click');
      wrapper.find('button[children=3]').simulate('click');

      wrapper.find('button[children="Auto"]').simulate('click');
    });

    it('should have 99% chance to hit elevation at Range 5', () => {
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=5]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 99%');
    });

    it('should have 62% chance to hit elevation at Range 25', () => {
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=25]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 62%');
    });

    it('should have 38% chance to hit elevation at Range 50', () => {
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=50]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 38%');
    });

    it('should have 21% chance to hit elevation at Range 100', () => {
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=100]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 21%');
    });
  });

  describe('level 0 standing Shooter vs Standing Target, 1 Aim, Three Round Burst', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = getWrapper(0);

      wrapper.find('button[children="3RB"]').simulate('click');
    });

    it('should have 47% chance to hit elevation at Range 5', () => {
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=5]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 47%');
    });

    it('should have 11% chance to hit elevation at Range 25', () => {
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=25]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 11%');
    });
  });

  describe('level 0 standing Shooter vs Standing Target, 1 Aim, Single Fire, Range 5', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = getWrapper(0);

      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=4]').simulate('click');
    });

    it('should have 4% chance to hit at Dusk', () => {
      wrapper.find('span[children="Visibility"]').closest('button').simulate('click');
      wrapper.find('button[children="Dusk"]').simulate('click');
      wrapper.find('button[children="Done"]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 4%');
    });

    it('should have 2% chance with broken iron sights', () => {
      wrapper.find('span[children="Visibility"]').closest('button').simulate('click');
      wrapper.find('span[children="Iron Sights Broken"]').closest('div').find('CheckBox').simulate('click');
      wrapper.find('button[children="Done"]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 2%');
    });

    it('should have 1% chance to hit moving target', () => {
      wrapper.find('span[children="Movement"]').closest('button').simulate('click');
      wrapper.find('KeyPad').at(1).find('button[children=0.25]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 1%');
    });

    it('should have 9% chance to hit target with misc bonus of 2', () => {
      wrapper.find('span[children="Miscellaneous"]').closest('button').simulate('click');
      wrapper.find('KeyPad').find('button[children=2]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 9%');
    });
  });

  describe('Ducking', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = getWrapper(4);

      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('button[children=4]').simulate('click');
    });

    it('should have standard odds of hitting if no one ducking', () => {
      expect(wrapper.text()).toContain('Hit Chance: 46%');
    });

    it('should apply -5 penalty to ALM if target ducking', () => {
      wrapper.find('button[children="Duck\nTarget"]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 18%');
    });

    it('should apply -10 penalty to ALM if shooter ducking', () => {
      wrapper.find('button[children="Duck\nShooter"]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 6%');
    });

    it('should apply -15 penalty to ALM if both ducking', () => {
      wrapper.find('button[children="Duck\nShooter"]').simulate('click');
      wrapper.find('button[children="Duck\nTarget"]').simulate('click');

      expect(wrapper.text()).toContain('Hit Chance: 2%');
    });
  });
});

describe('Grenade Launcher Integration', () => {
  const weapon = testM79();
  const setWeapon = jest.fn();
  const wrapper = mount(<Shooting weapon={weapon} level={0} setWeapon={setWeapon} />);

  it('it should have 1% change to hit hex with M79, Range 25', () => {
    wrapper.find('span[children="Target Size"]').closest('button').simulate('click');
    wrapper.find('button[children="Hex - indirect"]').simulate('click');

    wrapper.find('span[children="Range"]').closest('button').simulate('click');
    wrapper.find('button[children=25]').simulate('click');

    expect(wrapper.text()).toContain('Hit Chance: 1%');
  });
});
