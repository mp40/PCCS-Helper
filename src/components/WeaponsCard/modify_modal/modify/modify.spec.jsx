import React from 'react';
import { shallow, mount } from 'enzyme';

import FirearmModify from './component';

// import { testM1911A1, testM16, testM16WithoutJhpAp, testFAMAS, testRemington } from '../../../../helpers/testHelpers';

const m16 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
};

describe(' Modify Firearm', () => {
  const replaceMagazine = jest.fn();
  const removeMagazine = jest.fn();
  const modifyFirearm = jest.fn();
  const addCustomMagazine = jest.fn();
  const setPrimaryMagazine = jest.fn();
  const removeFirearmModification = jest.fn();
  const removeAllModificationsFromFirearm = jest.fn();
  const gunObj = m16;

  const wrapper = shallow(<FirearmModify
    replaceMagazine={replaceMagazine}
    removeMagazine={removeMagazine}
    modifyFirearm={modifyFirearm}
    addCustomMagazine={addCustomMagazine}
    setPrimaryMagazine={setPrimaryMagazine}
    removeFirearmModification={removeFirearmModification}
    removeAllModificationsFromFirearm={removeAllModificationsFromFirearm}
    gunObj={gunObj}
  />);

  it('should be able to close magazine form', () => {
    wrapper.find('button[children="add magazine"]').simulate('click');
    wrapper.find('Form').props().toggleOffWeaponCardViews();

    expect(wrapper.find('Form').exists()).toBe(false);
  });

  it('should be able to close modification form', () => {
    wrapper.find('button[children="add modification"]').simulate('click');
    wrapper.find('Form').props().toggleOffWeaponCardViews();

    expect(wrapper.find('Form').exists()).toBe(false);
  });
});
