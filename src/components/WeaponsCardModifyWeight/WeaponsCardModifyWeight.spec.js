import React from 'react';
import { shallow } from 'enzyme';
import { mountAppWithStore, storeWithCreateCharacterView, testM1911A1WithMods, createWrapperTextInput } from '../../helpers/testHelpers';
import WeaponsCardModifyWeight from './index';

describe('the <WeaponsCardCustomMag/> component', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const wrapper = shallow(<WeaponsCardModifyWeight />);
  const inputValue = createWrapperTextInput(wrapper);
  it('should take an input for a note on modification', () => {
    inputValue('#modifyWeightNoteInput', 'removed stock');
    expect(wrapper.state('modWeightNote')).toEqual('removed stock');
  });
  it('should take an input for weight', () => {
    inputValue('#modifyWeightValueInput', '1.2');
    expect(wrapper.state('modWeightNumber')).toEqual('1.2');
  });
});

describe('modifing firearm weight', () => {
  let wrapper;
  let inputValue;
  const gunList = () => wrapper.find('.equipmentListBody');
  const selectedWeapons = () => wrapper.find('#characterWeaponList');
  const modifyPanel = () => wrapper.find('.modifyWeaponPanel');
  const addTorchAsMod = () => {
    modifyPanel().find('#modifyWeaponWeight').simulate('click');
    inputValue('#modifyWeightNoteInput', 'added torch');
    inputValue('#modifyWeightValueInput', '.5');
    wrapper.find('#submitModifiedWeight').simulate('click');
  };

  beforeEach(() => {
    wrapper = mountAppWithStore(storeWithCreateCharacterView());
    inputValue = createWrapperTextInput(wrapper);
    wrapper.find('#addFirearm').simulate('click');
    gunList(wrapper).find('#M16').simulate('click');
    selectedWeapons(wrapper).find('#modifyM16').simulate('click');
  });

  it('should be possible to modify and render firearm weight', () => {
    addTorchAsMod();
    expect(wrapper.find('#WeaponStatWeight').text()).toContain('9.2');
    expect(modifyPanel().text()).toContain('added torch');
    expect(modifyPanel().text()).toContain('0.5');
  });
  it('should be possible to remove weapon weight modifications', () => {
    addTorchAsMod();
    wrapper.find('.removeModification').simulate('click');
    expect(wrapper.find('#WeaponStatWeight').text()).toContain('8.7');
    expect(wrapper.text()).not.toContain('added torch');
  });
});

describe('modify weapon weight gaurd clauses', () => {
  let wrapper;
  let inputValue;
  const gunList = () => wrapper.find('.equipmentListBody');
  const selectedWeapons = () => wrapper.find('#characterWeaponList');
  const modifyPanel = () => wrapper.find('.modifyWeaponPanel');

  beforeEach(() => {
    wrapper = mountAppWithStore(storeWithCreateCharacterView());
    inputValue = createWrapperTextInput(wrapper);
    wrapper.find('#addFirearm').simulate('click');
    gunList(wrapper).find('#M16').simulate('click');
    selectedWeapons(wrapper).find('#modifyM16').simulate('click');
    modifyPanel().find('#modifyWeaponWeight').simulate('click');
  });

  it('should only accept numbers for weight value', () => {
    inputValue('#modifyWeightNoteInput', 'added torch');
    inputValue('#modifyWeightValueInput', 'one pound');
    wrapper.find('#submitModifiedWeight').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Data');
  });
  it('should have a value entered in type nore feild', () => {
    inputValue('#modifyWeightValueInput', '1');
    wrapper.find('#submitModifiedWeight').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Data');
  });
  it('should be possible to remove all mods', () => {
    wrapper = mountAppWithStore(storeWithCreateCharacterView(testM1911A1WithMods()));
    selectedWeapons(wrapper).find('#modifyM1911A1').simulate('click');
    modifyPanel().find('.removeAllMods').simulate('click');
    expect(modifyPanel().text()).not.toContain('TestMag');
    expect(wrapper.find('#WeaponStatWeight').text()).toContain('3');
  });
});
