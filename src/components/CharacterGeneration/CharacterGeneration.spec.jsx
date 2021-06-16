import React from 'react';
import { shallow } from 'enzyme';

import CharacterGeneration from './component';

import { mountAppWithStore } from '../../helpers/testHelpers';

describe('Selecting Charcter Generation', () => {
  it('should generate default stats for character', () => {
    const wrapper = mountAppWithStore();
    wrapper.find('button[children="Create Character"]').simulate('click');

    expect(wrapper.find('.topCard').text()).toContain('Total Lbs: 5');
    expect(wrapper.find('.updateStrength').text()).toBe('10');
    expect(wrapper.find('.updateIntelligence').text()).toBe('10');
    expect(wrapper.find('.updateWillpower').text()).toBe('10');
    expect(wrapper.find('.updateHealth').text()).toBe('10');
    expect(wrapper.find('.updateAgility').text()).toBe('10');
    expect(wrapper.find('.updateGun').text()).toBe('0');
    expect(wrapper.find('.updateHand').text()).toBe('0');
  });
});

describe('Character Generation', () => {
  let wrapper;

  const selectCurrentView = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<CharacterGeneration
      totalWeight={69}
      selectCurrentView={selectCurrentView}
    />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be possible to change to use characters', () => {
    wrapper.find('button').simulate('click');

    expect(selectCurrentView).toHaveBeenCalledWith('playCharacter');
  });
});
