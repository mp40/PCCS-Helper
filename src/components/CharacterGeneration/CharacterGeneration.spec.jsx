import React from 'react';
import { shallow } from 'enzyme';

import CharacterGeneration from './component';

import { mountAppWithStore } from '../../helpers/testHelpers';

describe('Selecting Charcter Generation', () => {
  window.history.pushState({}, '', '/edit');
  const wrapper = mountAppWithStore();

  afterAll(() => {
    window.history.pushState({}, '', '/');
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

  beforeEach(() => {
    wrapper = shallow(<CharacterGeneration
      totalWeight={69}
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

});
