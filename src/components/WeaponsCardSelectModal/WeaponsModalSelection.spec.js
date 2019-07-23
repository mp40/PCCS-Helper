import { mountAppWithStore, storeWithCreateCharacterView } from '../../helpers/testHelpers';
// import { getSelectedWeapons } from './component';
import { rifles, pistols, smgs, mgs, sniperRifles, shotguns } from '../../data/firearms';

const fullFirearmsList = () => [...rifles(), ...pistols(), ...smgs(), ...mgs(), ...sniperRifles(), ...shotguns()];

describe('Firearms selection', () => {
  const gunList = wrapper => wrapper.find('.equipmentListBody');
  const selectedWeapons = wrapper => wrapper.find('#characterWeaponList');
  const header = wrapper => wrapper.find('#weaponsHeader');
  const navBarWeight = wrapper => wrapper.find('.navEquipWeight');

  describe('filtering firearms list', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mountAppWithStore(storeWithCreateCharacterView());
      wrapper.find('#addFirearm').simulate('click');
    });
    it('should render an unfiltered list by defult', () => {
      expect(wrapper.find('.equipmentListBody').children().length).toBe(fullFirearmsList().length);
    });
    it('should be possible to open firearm filter options', () => {
      wrapper.find('#showFirearmFilters').simulate('click');
      expect(wrapper.find('.filterByFirearmTypeForm').exists()).toBe(true);
    });
  });
});
