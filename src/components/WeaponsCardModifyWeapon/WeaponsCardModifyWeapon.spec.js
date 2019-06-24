import { mountAppWithStore, storeWithCreateCharacterView } from '../../helpers/testHelpers';

describe('modifying weapons', () => {
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
    wrapper.find('#customMagCapacityInput').simulate('change', {
      target: { value: '18' },
    });
    wrapper.find('#customMagWeightInput').simulate('change', {
      target: { value: '.65' },
    });
    wrapper.find('#customMagTypeInput').simulate('change', {
      target: { value: 'Mag' },
    });
    wrapper.find('#submitCustomMag').simulate('click');
    expect(modifyPanel().find('.modifyMagazines').childAt(3).text()).toContain('18');
    expect(modifyPanel().find('.modifyMagazines').childAt(3).text()).toContain('0.65');
    expect(modifyPanel().find('.modifyMagazines').childAt(3).text()).toContain('Mag');
  });
});
