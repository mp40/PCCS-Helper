import { mountAppWithStore, storeWithCreateCharacterView } from '../../helpers/testHelpers';
import { createValidEqipmentObject } from './component';

describe('adding custom equipment', () => {
  let wrapper;

  const inputCustomEquipmentName = (value) => wrapper.find('#equipNameInput').simulate('change', { target: { value } });
  const inputCustomEquipmentWeight = (value) => wrapper.find('#equipWeightInput').simulate('change', { target: { value } });

  beforeEach(() => {
    wrapper = mountAppWithStore(storeWithCreateCharacterView());
    wrapper.find('#toggleCustomEquipment').simulate('click');
  });

  it('should be possible to cancel custom input', () => {
    wrapper.find('.cancelCustomInput').simulate('click');
    expect(wrapper.find('#equipNameInput').exists()).toEqual(false);
  });
  it('should be posible to add custom equipment to the list', () => {
    inputCustomEquipmentName('CustomEquipment');
    inputCustomEquipmentWeight('666');
    wrapper.find('#submitCustomEquipButton').simulate('click');
    expect(wrapper.text()).toContain(666);
    expect(wrapper.text()).toContain('CustomEquipment');
  });
  it('should display error msg if custom equipment name not provided', () => {
    inputCustomEquipmentName(undefined);
    inputCustomEquipmentWeight('666');
    wrapper.find('#submitCustomEquipButton').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Equipment Name and Weight');
  });
  it('should display error msg if custom equipment weight not provided', () => {
    inputCustomEquipmentName('New Equipment');
    inputCustomEquipmentWeight(undefined);
    wrapper.find('#submitCustomEquipButton').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Equipment Name and Weight');
  });
  it('should display error msg if custom equipment weight input not a number', () => {
    inputCustomEquipmentName('CustomEquipment');
    inputCustomEquipmentWeight('x666');
    wrapper.find('#submitCustomEquipButton').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Equipment Name and Weight');
  });
  it('should display error msg if equipment name already selected', () => {
    inputCustomEquipmentName('newCustomEquipment');
    inputCustomEquipmentWeight('666');
    wrapper.find('#submitCustomEquipButton').simulate('click');
    wrapper.find('#toggleCustomEquipment').simulate('click');
    inputCustomEquipmentName('newCustomEquipment');
    inputCustomEquipmentWeight('666');
    wrapper.find('#submitCustomEquipButton').simulate('click');
    expect(wrapper.text()).toContain('Already In List, Please Enter Valid Equipment Name');
  });
  describe('creating valid equipment object', () => {
    it('should return an object with the correct shape', () => {
      const validName = 'Rock';
      const validWeight = 666;
      const validObject = {
        name: validName,
        weight: validWeight,
        qty: 1,
        tags: ['Custom'],
      };
      expect(createValidEqipmentObject(validName, validWeight)).toMatchObject(validObject);
    });
  });
});
