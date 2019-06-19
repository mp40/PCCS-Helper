import { mountAppWithStore, storeWithCreateCharacterView } from '../../helpers/testHelpers';

describe('adding custom equipment', () => {
  let wrapper;
  const submitCustomEquipment = (name, weight) => {
    if (name) {
      wrapper.find('#equipNameInput').simulate('change', {
        target: { value: name },
      });
    }
    if (weight) {
      wrapper.find('#equipWeightInput').simulate('change', {
        target: { value: weight },
      });
    }
    wrapper.find('#submitCustomEquipButton').simulate('click');
  };
  beforeEach(() => {
    wrapper = mountAppWithStore(storeWithCreateCharacterView());
    wrapper.find('#toggleCustomEquipment').simulate('click');
  });
  it('should be posible to add custom equipment to the list', () => {
    submitCustomEquipment('CustomEquipment', '666');
    expect(wrapper.text()).toContain(666);
    expect(wrapper.text()).toContain('CustomEquipment');
  });
  it('should display error msg if custom equipment name not provided', () => {
    submitCustomEquipment(undefined, '666');
    expect(wrapper.text()).toContain('Please Enter Valid Equipment Name and Weight');
  });
  it('should display error msg if custom equipment weight not provided', () => {
    submitCustomEquipment('newEquipment', undefined);
    expect(wrapper.text()).toContain('Please Enter Valid Equipment Name and Weight');
  });
  it('should display error msg if custom equipment weight input not a number', () => {
    submitCustomEquipment('CustomEquipment', 'x666');
    expect(wrapper.text()).toContain('Please Enter Valid Equipment Name and Weight');
  });
  it('should display error msg if equipment name already selected', () => {
    submitCustomEquipment('newCustomEquipment', '666');
    wrapper.find('#toggleCustomEquipment').simulate('click');
    submitCustomEquipment('newCustomEquipment', '666');
    expect(wrapper.text()).toContain('Already In List, Please Enter Valid Equipment Name');
  });
});
