import React from 'react';
import { shallow } from 'enzyme';

import EquipmentCardTable from './component';

describe('the equipment list table', () => {
  const removeEquipment = jest.fn();
  const increaseEquipmentQty = jest.fn();
  const decreaseEquipmentQty = jest.fn();

  const wrapper = shallow(<EquipmentCardTable
    removeEquipment={removeEquipment}
    increaseEquipmentQty={increaseEquipmentQty}
    decreaseEquipmentQty={decreaseEquipmentQty}
    equipment={[]}
    totalEquipmentWeight={1337}
  />);

  it('should not be possible to decrease equipment less than one', () => {
    wrapper.setProps({ equipment: [{ name: 'gear', qty: 1, weight: 1 }] });

    wrapper.find('GearTableEntry').invoke('decreaseItem')();

    expect(decreaseEquipmentQty).not.toHaveBeenCalled();
  });
});
