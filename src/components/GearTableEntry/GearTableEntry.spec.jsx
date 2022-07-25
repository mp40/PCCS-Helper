import React from 'react';
import { shallow } from 'enzyme';

import GearTableEntry from './index';

describe('Gear Table Entry', () => {
  let wrapper;

  const text = 'Gear Item';
  const removeItem = jest.fn();
  const modifyItem = jest.fn();
  const weight = 5.5;
  const qty = 3;
  const increaseItem = jest.fn();
  const decreaseItem = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <GearTableEntry
        text={text}
        removeItem={removeItem}
        modifyItem={modifyItem}
        weight={weight}
        qty={qty}
        increaseItem={increaseItem}
        decreaseItem={decreaseItem}
      />,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show total weight', () => {
    const total = weight * qty;
    expect(wrapper.text()).toContain(total.toString());
  });

  it('should possible to increase qty', () => {
    wrapper.find('.button--up').simulate('click');

    expect(increaseItem).toHaveBeenCalled();
  });

  it('should possible to increase qty', () => {
    wrapper.find('.button--down').simulate('click');

    expect(decreaseItem).toHaveBeenCalled();
  });

  it('should possible to remove item if allowed', () => {
    wrapper.find('.button--close').simulate('click');

    expect(removeItem).toHaveBeenCalled();
  });

  // it('should possible to modify item if allowed', () => {
  //   mptodo
  //   wrapper.find('.button-clickable-item-row').simulate('click');

  //   expect(modifyItem).toHaveBeenCalled();
  // });

  it('should not be possible to modify if not allowed', () => {
    wrapper.setProps({ modifyItem: false });

    expect(wrapper.find('.button-clickable-item-row').exists()).toBe(false);
  });

  it('should not be possible to remove if not allowed', () => {
    wrapper.setProps({ modifyItem: false });
    wrapper.setProps({ removeItem: false });

    expect(wrapper.find('.button--close').exists()).toBe(false);
  });
});
