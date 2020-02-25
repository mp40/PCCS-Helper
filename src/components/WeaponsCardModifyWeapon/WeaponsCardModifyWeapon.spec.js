import { mountAppWithStore, storeWithCreateCharacterView, createWrapperTextInput } from '../../helpers/testHelpers';

describe('modifying weapons', () => {
  let wrapper;
  let inputValue;
  const gunList = () => wrapper.find('.firearmSelectModal').find('.gearModalContents');
  const selectedWeapons = () => wrapper.find('#characterWeaponList');
  const modifyPanel = () => wrapper.find('.modifyWeaponPanel');
  beforeEach(() => {
    wrapper = mountAppWithStore(storeWithCreateCharacterView());
    inputValue = createWrapperTextInput(wrapper);
    wrapper.find('#addFirearm').simulate('click');
    gunList(wrapper).find('#M16').simulate('click');
    selectedWeapons(wrapper).find('#modifyM16').simulate('click');
  });
  it('should be possible to change default magazine type when magazine options are available', () => {
    modifyPanel().find('.M16MagAtIndex1').find('.selectPrimaryButton').simulate('click');
    expect(modifyPanel().find('.primaryMagazine').childAt(1).text()).toContain('30');
  });
  it('should update weight when primary mags changed', () => {
    modifyPanel().find('.M16MagAtIndex1').find('.selectPrimaryButton').simulate('click');
    expect(wrapper.find('#WeaponStatAW').text()).toContain('1');
    expect(wrapper.find('#WeaponStatWeight').text()).toContain('9');
  });
  it('should be possible to add custom magazine', () => {
    modifyPanel().find('#addCustomMagazine').simulate('click');
    inputValue('#customMagCapacityInput', '18');
    inputValue('#customMagWeightInput', '.65');
    inputValue('#customMagTypeInput', 'Mag');
    wrapper.find('#submitCustomMag').simulate('click');
    expect(modifyPanel().find('.M16MagAtIndex2').exists()).toBe(true);
    expect(modifyPanel().find('.M16MagAtIndex2').text()).toContain('18');
    expect(modifyPanel().find('.M16MagAtIndex2').text()).toContain('0.65');
    expect(modifyPanel().find('.M16MagAtIndex2').text()).toContain('Mag');
  });
  it('should be possible to close the modify weapon modal', () => {
    wrapper.find('#closeGunStatView').simulate('click');
    expect(wrapper.text()).not.toContain('Modify Weapon');
  });
  it('should be possible to remove/hide a particular magazine', () => {
    const remove30RoundMagazineButton = wrapper.find('.removeMagazineButton').last();
    remove30RoundMagazineButton.simulate('click');
    expect(wrapper.find('#characterWeaponList').text()).not.toContain('30 round Mag');
  });
  // mptodo - re below, it longer does this
  // it('should change name of button to "replace" after removing magazine', () => {
  //   expect(modifyPanel().text()).not.toContain('replace');
  //   const remove30RoundMagazineButton = wrapper.find('.modifyMagazines').find('button').last();
  //   remove30RoundMagazineButton.simulate('click');
  //   expect(modifyPanel().text()).toContain('replace');
  // });
  it('should not be possible to remove the primary magazine', () => {
    const remove20RoundMagazineButton = wrapper.find('.removeMagazineButton').first();
    remove20RoundMagazineButton.simulate('click');
    expect(wrapper.find('#characterWeaponList').text()).not.toContain('20 round Mag');
  });
  // mptodo this test is too tightly coupled to old implementation
  // it('should be possible to replace the magazine', () => {
  //   const handle30RoundMagazineButton = wrapper.find('.removeMagazineButton').last();
  //   handle30RoundMagazineButton.simulate('click');
  //   expect(modifyPanel().text()).toContain('replace');
  //   handle30RoundMagazineButton.simulate('click');
  //   expect(modifyPanel().text()).not.toContain('replace');
  // });
  it('should not be possible to set a removed magazine as primary', () => {
    const remove30RoundMagazineButton = wrapper.find('.removeMagazineButton').last();
    const set30RoundMagazineAsPrimaryButton = wrapper.find('.selectPrimaryButton').last();
    remove30RoundMagazineButton.simulate('click');
    expect(wrapper.find('#WeaponStatWeight').text()).toBe('W8.7');
    set30RoundMagazineAsPrimaryButton.simulate('click');
    expect(wrapper.find('#WeaponStatWeight').text()).toBe('W8.7');
    expect(wrapper.find('#WeaponStatAW').text()).toBe('AW0.7');
  });
  // mptodo this function no longer exisits
  // describe('helper functions', () => {
  //   it('should return string describing rounds in magazine', () => {
  //     const magDouble = { cap: 30, type: 'Mag' };
  //     expect(renderAmmoCapacity(magDouble)).toBe('30 round Mag - ');
  //   });
  //   it('should return string describing amount of loose rounds', () => {
  //     const magDouble = { cap: 5, type: 'Rnd' };
  //     expect(renderAmmoCapacity(magDouble)).toBe('5 loose rounds - ');
  //   });
  // });
});
