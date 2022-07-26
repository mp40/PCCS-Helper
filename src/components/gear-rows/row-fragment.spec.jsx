import React from 'react';
import { shallow } from 'enzyme';

import RowFragment from './row-fragment';

describe('RowFragment', () => {
  let wrapper;

  const weight = 5.5;
  const qty = 3;
  const increaseItem = jest.fn();
  const decreaseItem = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <RowFragment
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
});
