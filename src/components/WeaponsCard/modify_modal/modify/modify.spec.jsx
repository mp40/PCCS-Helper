import React from 'react';
import { shallow, mount } from 'enzyme';

import FirearmModify from './component';

import { testM1911A1, testM16, testM16WithoutJhpAp, testFAMAS, testRemington } from '../../../../helpers/testHelpers';

describe(' Modify Firearm', () => {
  const replaceMagazine = jest.fn();
  const removeMagazine = jest.fn();
  const modifyFirearm = jest.fn();
  const addCustomMagazine = jest.fn();
  const setPrimaryMagazine = jest.fn();
  const removeFirearmModification = jest.fn();
  const removeAllModificationsFromFirearm = jest.fn();
  const gunObj = testM16();

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
