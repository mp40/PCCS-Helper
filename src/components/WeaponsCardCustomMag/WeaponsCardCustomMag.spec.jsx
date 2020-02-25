import React from 'react';
import { shallow } from 'enzyme';
import { mountAppWithStore, storeWithCreateCharacterView, createWrapperTextInput } from '../../helpers/testHelpers';
import WeaponsCardCustomMag from './index';

describe('the <WeaponsCardCustomMag/> component', () => {
  const mockToggle = jest.fn();
  const wrapper = shallow(<WeaponsCardCustomMag toggleOffWeaponCardViews={mockToggle} />);
  const inputValue = createWrapperTextInput(wrapper);
  it('should take an input for ammo capacity', () => {
    inputValue('#customMagCapacityInput', '18');
    expect(wrapper.state('capacity')).toEqual('18');
  });
  it('should take an input for weight', () => {
    inputValue('#customMagWeightInput', '.7');
    expect(wrapper.state('weight')).toEqual('.7');
  });
  it('should take an input for magazine type', () => {
    inputValue('#customMagTypeInput', 'Drum');
    expect(wrapper.state('type')).toEqual('Drum');
  });
  it('should have a back button', () => {
    wrapper.find('#backCustomMag').simulate('click');
    expect(mockToggle).toHaveBeenCalled();
  });
});

describe('custom magazine gaurd clases', () => {
  let wrapper;
  let inputValue;
  const gunList = () => wrapper.find('.firearmSelectModal').find('.gearModalContents');
  const selectedWeapons = () => wrapper.find('#characterWeaponList');
  const modifyPanel = () => wrapper.find('.modifyWeaponPanel');
  const enterMagCapacity = () => {
    inputValue('#customMagCapacityInput', '18');
  };
  const enterMagType = () => {
    inputValue('#customMagTypeInput', 'Mag');
  };
  const enterMagWeight = () => {
    inputValue('#customMagWeightInput', '.65');
  };
  const enterMagWeightAndType = () => {
    enterMagWeight(wrapper);
    enterMagType(wrapper);
  };

  beforeEach(() => {
    wrapper = mountAppWithStore(storeWithCreateCharacterView());
    inputValue = createWrapperTextInput(wrapper);
    wrapper.find('#addFirearm').simulate('click');
    gunList(wrapper).find('#M16').simulate('click');
    selectedWeapons(wrapper).find('#modifyM16').simulate('click');
    modifyPanel().find('#addCustomMagazine').simulate('click');
  });
  it('should only accept numbers for capacity', () => {
    inputValue('#customMagCapacityInput', 'six');
    enterMagWeightAndType(wrapper);
    wrapper.find('#submitCustomMag').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Data');
  });
  it('should only accept whole numbers for capacity', () => {
    inputValue('#customMagCapacityInput', '18.5');
    enterMagWeightAndType(wrapper);
    wrapper.find('#submitCustomMag').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Data');
  });
  it('should only accept numbers for weight', () => {
    enterMagCapacity(wrapper);
    inputValue('#customMagWeightInput', 'point six five');
    enterMagType(wrapper);
    wrapper.find('#submitCustomMag').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Data');
  });
  it('should have a value at least two characters long for type', () => {
    enterMagCapacity(wrapper);
    enterMagWeight(wrapper);
    inputValue('#customMagTypeInput', '1');
    wrapper.find('#submitCustomMag').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Data');
  });
});
