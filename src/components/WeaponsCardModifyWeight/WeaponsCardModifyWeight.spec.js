import React from 'react';
import { shallow } from 'enzyme';
import { mountAppWithStore, storeWithCreateCharacterView, testM1911A1WithMods } from '../../helpers/testHelpers';
import WeaponsCardModifyWeight from './index';

describe('the <WeaponsCardCustomMag/> component', () => {
  const wrapper = shallow(<WeaponsCardModifyWeight />);
  it('should take an input for a note on modification', () => {
    wrapper.find('#modifyWeightNoteInput').simulate('change', {
      target: { value: 'removed stock' },
    });
    expect(wrapper.state('modWeightNote')).toEqual('removed stock');
  });
  it('should take an input for weight', () => {
    wrapper.find('#modifyWeightValueInput').simulate('change', {
      target: { value: '1.2' },
    });
    expect(wrapper.state('modWeightNumber')).toEqual('1.2');
  });
});

describe('modifing firearm weight', () => {
  let wrapper;
  const gunList = () => wrapper.find('.equipmentListBody');
  const selectedWeapons = () => wrapper.find('#characterWeaponList');
  const modifyPanel = () => wrapper.find('.modifyWeaponPanel');
  beforeEach(() => {
    wrapper = mountAppWithStore(storeWithCreateCharacterView());
    wrapper.find('#addFirearm').simulate('click');
    gunList(wrapper).find('#M16').simulate('click');
    selectedWeapons(wrapper).find('#modifyM16').simulate('click');
  });
  it('should be possible to modify firearm weight', () => {
    modifyPanel().find('#modifyWeaponWeight').simulate('click');
    wrapper.find('#modifyWeightNoteInput').simulate('change', {
      target: { value: 'added torch' },
    });
    wrapper.find('#modifyWeightValueInput').simulate('change', {
      target: { value: '.5' },
    });
    wrapper.find('#submitModifiedWeight').simulate('click');
    expect(wrapper.find('#WeaponStatWeight').text()).toContain('9.2');
  });
  it('should render the weight modifications', () => {
    modifyPanel().find('#modifyWeaponWeight').simulate('click');
    wrapper.find('#modifyWeightNoteInput').simulate('change', {
      target: { value: 'added torch' },
    });
    wrapper.find('#modifyWeightValueInput').simulate('change', {
      target: { value: '.5' },
    });
    wrapper.find('#submitModifiedWeight').simulate('click');
    expect(modifyPanel().text()).toContain('added torch');
    expect(modifyPanel().text()).toContain('0.5');
  });
  it('should be possible to remove weapon weight modifications', () => {
    modifyPanel().find('#modifyWeaponWeight').simulate('click');
    wrapper.find('#modifyWeightNoteInput').simulate('change', {
      target: { value: 'added torch' },
    });
    wrapper.find('#modifyWeightValueInput').simulate('change', {
      target: { value: '.5' },
    });
    wrapper.find('#submitModifiedWeight').simulate('click');
    wrapper.find('.removeModification').simulate('click');
    expect(wrapper.find('#WeaponStatWeight').text()).toContain('8.7');
    expect(wrapper.text()).not.toContain('added torch');
  });
});

describe('modify weapon weight gaurd clauses', () => {
  let wrapper;
  const gunList = () => wrapper.find('.equipmentListBody');
  const selectedWeapons = () => wrapper.find('#characterWeaponList');
  const modifyPanel = () => wrapper.find('.modifyWeaponPanel');
  beforeEach(() => {
    wrapper = mountAppWithStore(storeWithCreateCharacterView());
    wrapper.find('#addFirearm').simulate('click');
    gunList(wrapper).find('#M16').simulate('click');
    selectedWeapons(wrapper).find('#modifyM16').simulate('click');
    modifyPanel().find('#modifyWeaponWeight').simulate('click');
  });
  it('should only accept numbers for weight value', () => {
    wrapper.find('#modifyWeightNoteInput').simulate('change', {
      target: { value: 'added torch' },
    });
    wrapper.find('#modifyWeightValueInput').simulate('change', {
      target: { value: 'one pound' },
    });
    wrapper.find('#submitModifiedWeight').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Data');
  });
  it('should have a value entered in type nore feild', () => {
    wrapper.find('#modifyWeightValueInput').simulate('change', {
      target: { value: '1' },
    });
    wrapper.find('#submitModifiedWeight').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Data');
  });
  // });
  it('should be possible to remove all mods', () => {
    wrapper = mountAppWithStore(storeWithCreateCharacterView(testM1911A1WithMods()));
    selectedWeapons(wrapper).find('#modifyM1911A1').simulate('click');
    modifyPanel().find('.removeAllMods').simulate('click');
    expect(modifyPanel().text()).not.toContain('TestMag');
    expect(wrapper.find('#WeaponStatWeight').text()).toContain('3');
  });
});
