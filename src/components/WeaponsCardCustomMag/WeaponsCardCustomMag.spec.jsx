import { mountAppWithStore, storeWithCreateCharacterView } from '../../helpers/testHelpers';

// mptodo
// describe('the <WeaponsCardCustomMag/> component', () => {
//   const mockToggle = jest.fn();
//   const wrapper = shallow(<WeaponsCardCustomMag toggleOffWeaponCardViews={mockToggle} />);
//   const inputValue = createWrapperTextInput(wrapper);
//   it('should take an input for ammo capacity', () => {
//     inputValue('#customMagCapacityInput', '18');
//     expect(wrapper.state('capacity')).toEqual('18');
//   });
//   it('should take an input for weight', () => {
//     inputValue('#customMagWeightInput', '.7');
//     expect(wrapper.state('weight')).toEqual('.7');
//   });
//   it('should take an input for magazine type', () => {
//     inputValue('#customMagTypeInput', 'Drum');
//     expect(wrapper.state('type')).toEqual('Drum');
//   });
//   it('should have a back button', () => {
//     wrapper.find('#backCustomMag').simulate('click');
//     expect(mockToggle).toHaveBeenCalled();
//   });
// });

describe('custom magazine gaurd clases', () => {
  let wrapper;

  const gunList = () => wrapper.find('.firearmSelectModal').find('.gearModalContents');
  const selectedWeapons = () => wrapper.find('#characterWeaponList');
  const modifyPanel = () => wrapper.find('.modifyWeaponPanel');

  const inputCapacityValue = (value = '18') => wrapper.find('#customMagCapacityInput').simulate('change', { target: { value } });
  const inputWeightValue = (value = '.65') => wrapper.find('#customMagWeightInput').simulate('change', { target: { value } });
  const inputTypeValue = (value = 'Mag') => wrapper.find('#customMagTypeInput').simulate('change', { target: { value } });

  beforeEach(() => {
    wrapper = mountAppWithStore(storeWithCreateCharacterView());
    wrapper.find('#addFirearm').simulate('click');
    gunList(wrapper).find('#M16').simulate('click');
    selectedWeapons(wrapper).find('#modifyM16').simulate('click');
    modifyPanel().find('#addCustomMagazine').simulate('click');
  });
  it('should only accept numbers for capacity', () => {
    inputCapacityValue('six');
    inputWeightValue();
    inputTypeValue();
    wrapper.find('.submitCustomMagazine').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Data');
  });
  it('should only accept whole numbers for capacity', () => {
    inputCapacityValue('18.5');
    inputWeightValue();
    inputTypeValue();
    wrapper.find('.submitCustomMagazine').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Data');
  });
  it('should only accept numbers for weight', () => {
    inputCapacityValue();
    inputWeightValue('point six five');
    inputTypeValue();
    wrapper.find('.submitCustomMagazine').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Data');
  });
  it('should have a value at least two characters long for type', () => {
    inputCapacityValue();
    inputWeightValue();
    inputTypeValue('1');
    wrapper.find('.submitCustomMagazine').simulate('click');
    expect(wrapper.text()).toContain('Please Enter Valid Data');
  });
});
