import React from 'react';
import { mount, shallow } from 'enzyme';

import FirearmModificationForm from './index';

describe('The Firearm Modification Form', () => {
  const toggleOffWeaponCardViews = jest.fn();
  const handleModification = jest.fn();

  describe('magazine form', () => {
    let wrapper;

    let capacity;
    let weight;
    let type;

    beforeEach(() => {
      wrapper = mount(
        <FirearmModificationForm
          formType="Magazine"
          toggleOffWeaponCardViews={toggleOffWeaponCardViews}
          handleModification={handleModification}
        />);

      capacity = wrapper.find('TextInput').find('[heading="Capacity"]');
      weight = wrapper.find('TextInput').find('[heading="Weight"]');
      type = wrapper.find('TextInput').find('[heading="Type"]');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should render the correct heading and text', () => {
      expect(wrapper.text()).toContain('Add Custom Magazine');
      expect(capacity.text()).toBe('Capacity');
      expect(weight.text()).toBe('Weight');
      expect(type.text()).toBe('Type');
    });

    it('should to possible to submit magazine details', () => {
      capacity.find('input').simulate('change', { target: { value: '18' } });
      weight.find('input').simulate('change', { target: { value: '.65' } });
      type.find('input').simulate('change', { target: { value: 'Mag' } });

      wrapper.find('button[children="Submit"]').simulate('click');

      expect(handleModification).toHaveBeenCalledWith({
        cap: 18,
        custom: true,
        qty: 0,
        type: 'Mag',
        weight: 0.65,
      });
    });

    it('should show error msg if the weight is not a number', () => {
      capacity.find('input').simulate('change', { target: { value: '18' } });
      weight.find('input').simulate('change', { target: { value: 'x.65' } });
      type.find('input').simulate('change', { target: { value: 'Mag' } });

      wrapper.find('button[children="Submit"]').simulate('click');

      expect(handleModification).not.toHaveBeenCalled();
      expect(wrapper.text()).toContain('Please Enter Valid Data');
    });

    it('should show error msg if the capacity is not a round number', () => {
      capacity.find('input').simulate('change', { target: { value: '18.5' } });
      weight.find('input').simulate('change', { target: { value: '.65' } });
      type.find('input').simulate('change', { target: { value: 'Mag' } });

      wrapper.find('button[children="Submit"]').simulate('click');

      expect(handleModification).not.toHaveBeenCalled();
      expect(wrapper.text()).toContain('Please Enter Valid Data');
    });

    it('should show error msg if the mag type is less than two characters', () => {
      capacity.find('input').simulate('change', { target: { value: '18' } });
      weight.find('input').simulate('change', { target: { value: '.65' } });
      type.find('input').simulate('change', { target: { value: 'M' } });

      wrapper.find('button[children="Submit"]').simulate('click');

      expect(handleModification).not.toHaveBeenCalled();
      expect(wrapper.text()).toContain('Please Enter Valid Data');
    });
  });

  describe('modification form', () => {
    let wrapper;

    let modification;
    let weight;

    beforeEach(() => {
      wrapper = mount(
        <FirearmModificationForm
          formType="Firearm"
          toggleOffWeaponCardViews={toggleOffWeaponCardViews}
          handleModification={handleModification}
        />);

      modification = wrapper.find('TextInput').find('[heading="Modification"]');
      weight = wrapper.find('TextInput').find('[heading="Weight"]');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should render the correct heading and text', () => {
      expect(wrapper.text()).toContain('Add Modification');
      expect(modification.text()).toBe('Modification');
      expect(weight.text()).toBe('Weight');
    });

    it('should to possible to submit modification details', () => {
      modification.find('input').simulate('change', { target: { value: 'torch' } });
      weight.find('input').simulate('change', { target: { value: '.5' } });

      wrapper.find('button[children="Submit"]').simulate('click');

      expect(handleModification).toHaveBeenCalledWith({
        note: 'torch',
        weightMod: 0.5,
      });
    });

    it('should show error msg if the weight is not a number', () => {
      modification.find('input').simulate('change', { target: { value: 'torch' } });
      weight.find('input').simulate('change', { target: { value: 'x.5' } });

      wrapper.find('button[children="Submit"]').simulate('click');

      expect(handleModification).not.toHaveBeenCalled();
      expect(wrapper.text()).toContain('Please Enter Valid Data');
    });

    it('should show error msg if the mote is less than one character', () => {
      modification.find('input').simulate('change', { target: { value: '' } });
      weight.find('input').simulate('change', { target: { value: '.5' } });

      wrapper.find('button[children="Submit"]').simulate('click');

      expect(handleModification).not.toHaveBeenCalled();
      expect(wrapper.text()).toContain('Please Enter Valid Data');
    });
  });
});
