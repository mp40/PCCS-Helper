import { mountAppWithStore, storeWithCreateCharacterView, createWrapperTextInput } from '../../helpers/testHelpers';

describe('modifying weapons', () => {
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
  });
  it('should be possible to change default magazine type when magazine options are available', () => {
    modifyPanel().find('#M16MagAtIndex1').simulate('click');
    expect(modifyPanel().find('.modifyMagazines').childAt(1).text()).toContain('30');
  });
  it('should update weight when primary mags changed', () => {
    modifyPanel().find('#M16MagAtIndex1').simulate('click');
    expect(wrapper.find('#WeaponStatAW').text()).toContain('1');
    expect(wrapper.find('#WeaponStatWeight').text()).toContain('9');
  });
  it('should be possible to add custom magazine', () => {
    modifyPanel().find('#addCustomMagazine').simulate('click');
    inputValue('#customMagCapacityInput', '18');
    inputValue('#customMagWeightInput', '.65');
    inputValue('#customMagTypeInput', 'Mag');
    wrapper.find('#submitCustomMag').simulate('click');
    expect(modifyPanel().find('.modifyMagazines').childAt(3).text()).toContain('18');
    expect(modifyPanel().find('.modifyMagazines').childAt(3).text()).toContain('0.65');
    expect(modifyPanel().find('.modifyMagazines').childAt(3).text()).toContain('Mag');
  });
  it('should be possible to close the modify weapon modal', () => {
    wrapper.find('#closeGunStatView').simulate('click');
    expect(wrapper.text()).not.toContain('Modify Weapon');
  });
  it('should be possible to remove/hide a particular magazine', () => {
    const remove30RoundMagazineButton = wrapper.find('.modifyMagazines').childAt(2).childAt(1);
    remove30RoundMagazineButton.simulate('click');
    expect(wrapper.find('#characterWeaponList').text()).not.toContain('30 round Mag');
  });
  it('should change name of button to "replace" after removing magazine', () => {
    expect(modifyPanel().text()).not.toContain('replace');
    const remove30RoundMagazineButton = wrapper.find('.modifyMagazines').childAt(2).childAt(1);
    remove30RoundMagazineButton.simulate('click');
    expect(modifyPanel().text()).toContain('replace');
  });
  it('should not render a remove button for the primary magazine', () => {
    const remove20RoundMagazineButton = wrapper.find('.modifyMagazines').childAt(1).childAt(1);
    expect(remove20RoundMagazineButton.exists()).toBe(false);
  });
  it('should be possible to replace the magazine', () => {
    const handle30RoundMagazineButton = wrapper.find('.modifyMagazines').childAt(2).childAt(1);
    handle30RoundMagazineButton.simulate('click');
    expect(modifyPanel().text()).toContain('replace');
    handle30RoundMagazineButton.simulate('click');
    expect(modifyPanel().text()).not.toContain('replace');
  });
});
