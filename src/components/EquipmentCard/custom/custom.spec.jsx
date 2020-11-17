import React from 'react';
import { shallow } from 'enzyme';

import CustomEquipment, { createValidEqipmentObject } from './component';

describe('adding custom equipment', () => {
  let wrapper;

  const addEquipment = jest.fn();
  const handleSetShowCustomInput = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<CustomEquipment
      equipment={[{ name: 'added equip' }]}
      addEquipment={addEquipment}
      handleSetShowCustomInput={handleSetShowCustomInput}
    />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be possible to cancel custom input', () => {
    wrapper.find('.close').simulate('click');

    expect(handleSetShowCustomInput).toHaveBeenCalled();
  });

  it('should be posible to add custom equipment to the list', () => {
    wrapper.find('TextInput').at(0).dive().find('input')
      .simulate('change', { target: { value: 'Custom Equipment' } });

    wrapper.find('TextInput').at(1).dive().find('input')
      .simulate('change', { target: { value: '666' } });

    wrapper.find('button[children="Submit"]').simulate('click');

    expect(addEquipment).toHaveBeenCalled();
  });

  it('should display error msg if custom equipment name not provided', () => {
    wrapper.find('TextInput').at(1).dive().find('input')
      .simulate('change', { target: { value: '666' } });

    wrapper.find('button[children="Submit"]').simulate('click');

    expect(wrapper.text()).toContain('Please Enter Valid Equipment Name and Weight');
  });

  it('should display error msg if custom equipment weight not provided', () => {
    wrapper.find('TextInput').at(0).dive().find('input')
      .simulate('change', { target: { value: 'added equip' } });

    wrapper.find('button[children="Submit"]').simulate('click');

    expect(wrapper.text()).toContain('Please Enter Valid Equipment Name and Weight');
  });

  it('should display error msg if custom equipment weight input not a number', () => {
    wrapper.find('TextInput').at(0).dive().find('input')
      .simulate('change', { target: { value: 'Custom Equipment' } });

    wrapper.find('TextInput').at(1).dive().find('input')
      .simulate('change', { target: { value: 'x666' } });

    wrapper.find('button[children="Submit"]').simulate('click');

    expect(wrapper.text()).toContain('Please Enter Valid Equipment Name and Weight');
  });

  it('should display error msg if equipment name already selected', () => {
    wrapper.find('TextInput').at(0).dive().find('input')
      .simulate('change', { target: { value: 'added equip' } });

    wrapper.find('TextInput').at(1).dive().find('input')
      .simulate('change', { target: { value: '666' } });

    wrapper.find('button[children="Submit"]').simulate('click');

    expect(wrapper.text()).toContain('Already In List, Please Enter Valid Equipment Name');
  });
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
