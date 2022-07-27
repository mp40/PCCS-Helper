import React from 'react';
import { shallow } from 'enzyme';

import Grenades from './component';

const removeGrenade = jest.fn();
const increaseGrenadeQty = jest.fn();
const decreaseGrenadeQty = jest.fn();

describe('Selected Grenades', () => {
  const getWrapperWithGrenades = (grenades) => shallow(
    <Grenades
      grenades={grenades}
      removeGrenade={removeGrenade}
      increaseGrenadeQty={increaseGrenadeQty}
      decreaseGrenadeQty={decreaseGrenadeQty}
    />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not decrease grenade qty less than one', () => {
    const wrapper = getWrapperWithGrenades([{ name: 'M2', qty: 1, weight: 1.3 }]);

    wrapper.find('EquipmentRow').invoke('decreaseItem')();

    expect(decreaseGrenadeQty).not.toHaveBeenCalled();
  });
});
