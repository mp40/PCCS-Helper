import React from 'react';
import { shallow } from 'enzyme';

import CharacterGeneration from './component';

import { mountAppWithStore } from '../../helpers/testHelpers';

describe('Selecting Charcter Generation', () => {
  const wrapper = mountAppWithStore();
  wrapper.find('button[children="Create Character"]').simulate('click');

  it('should generate default stats for character', () => {
    expect(wrapper.find('.topCard').text()).toContain('Total Lbs: 5');
    expect(wrapper.find('.updateStrength').text()).toBe('10');
    expect(wrapper.find('.updateIntelligence').text()).toBe('10');
    expect(wrapper.find('.updateWillpower').text()).toBe('10');
    expect(wrapper.find('.updateHealth').text()).toBe('10');
    expect(wrapper.find('.updateAgility').text()).toBe('10');
    expect(wrapper.find('.updateGun').text()).toBe('0');
    expect(wrapper.find('.updateHand').text()).toBe('0');
  });

  it('should be possible to print character', () => {
    const spyGlobalPrint = jest.fn();

    global.print = spyGlobalPrint;

    wrapper.find('Print').find('button').simulate('click');

    expect(spyGlobalPrint).toHaveBeenCalled();
  });
});

describe('Character Generation', () => {
  let wrapper;

  const selectCurrentView = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<CharacterGeneration
      totalWeight={69}
      selectCurrentView={selectCurrentView}
      signedIn={false}
    />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show print character button', () => {
    expect(wrapper.find('Connect(Print)').exists()).toBe(true);
  });

  it('should not show save character button if not signed in', () => {
    expect(wrapper.find('Save').exists()).toBe(false);
  });

  it('should show save character button if signed in', () => {
    wrapper.setProps({ signedIn: true });

    expect(wrapper.find('Save').exists()).toBe(true);
  });

  it('should be possible to change to use characters', () => {
    wrapper.find('button').simulate('click');

    expect(selectCurrentView).toHaveBeenCalledWith('playCharacter');
  });
});
