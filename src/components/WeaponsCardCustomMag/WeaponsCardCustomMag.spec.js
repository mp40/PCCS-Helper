import React from 'react';
import { shallow } from 'enzyme';
import { mountAppWithStore, storeWithCreateCharacterView } from '../../helpers/testHelpers';
import WeaponsCardCustomMag from './index';

describe('the <WeaponsCardCustomMag/> component', () => {
  const wrapper = shallow(<WeaponsCardCustomMag />);
  it('should take an input for ammo capacity', () => {
    wrapper.find('#customMagCapacityInput').simulate('change', {
      target: { value: '18' },
    });
    expect(wrapper.state('capacity')).toEqual('18');
  });
  it('should take an input for weight', () => {
    wrapper.find('#customMagWeightInput').simulate('change', {
      target: { value: '.7' },
    });
    expect(wrapper.state('weight')).toEqual('.7');
  });
  it('should take an input for magazine type', () => {
    wrapper.find('#customMagTypeInput').simulate('change', {
      target: { value: 'Drum' },
    });
    expect(wrapper.state('type')).toEqual('Drum');
  });
});

describe('custom magazine gaurd clases', () => {
  let wrapper;
  const gunList = () => wrapper.find('.equipmentListBody');
  const selectedWeapons = () => wrapper.find('#characterWeaponList');
  const modifyPanel = () => wrapper.find('.modifyWeaponPanel');
  const enterMagCapacity = () => {
    wrapper.find('#customMagCapacityInput').simulate('change', {
      target: { value: '18' },
    });
  };
  const enterMagType = () => {
    wrapper.find('#customMagTypeInput').simulate('change', {
      target: { value: 'Mag' },
    });
  };
  const enterMagWeight = () => {
    wrapper.find('#customMagWeightInput').simulate('change', {
      target: { value: '.65' },
    });
  };
  const enterMagWeightAndType = () => {
    enterMagWeight(wrapper);
    enterMagType(wrapper);
  };

  beforeEach(() => {
    wrapper = mountAppWithStore(storeWithCreateCharacterView());
    wrapper.find('#addFirearm').simulate('click');
    gunList(wrapper).find('#M16').simulate('click');
    selectedWeapons(wrapper).find('#modifyM16').simulate('click');
    modifyPanel().find('#addCustomMagazine').simulate('click');
  });
  it('should only accept numbers for capacity', () => {
    wrapper.find('#customMagCapacityInput').simulate('change', {
      target: { value: 'six' },
    });
    enterMagWeightAndType(wrapper);
    wrapper.find('#submitCustomMag').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Data');
  });
  it('should only accept whole numbers for capacity', () => {
    wrapper.find('#customMagCapacityInput').simulate('change', {
      target: { value: '18.5' },
    });
    enterMagWeightAndType(wrapper);
    wrapper.find('#submitCustomMag').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Data');
  });
  it('should only accept numbers for weight', () => {
    enterMagCapacity(wrapper);
    wrapper.find('#customMagWeightInput').simulate('change', {
      target: { value: 'point six five' },
    });
    enterMagType(wrapper);
    wrapper.find('#submitCustomMag').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Data');
  });
  it('should have a value at least two characters long for type', () => {
    enterMagCapacity(wrapper);
    enterMagWeight(wrapper);
    wrapper.find('#customMagTypeInput').simulate('change', {
      target: { value: '!' },
    });
    wrapper.find('#submitCustomMag').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Data');
  });
});
