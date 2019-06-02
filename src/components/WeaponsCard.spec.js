import { mountAppWithStore } from '../helpers/testHelpers';
import { storeWithCreateCharacterView } from '../helpers/testHelpers';
import { testM1911A1WithMods } from '../helpers/testHelpers';

describe('The Weapons Card', () => {
  const gunList = wrapper => wrapper.find('.equipmentListBody');
  const selectedWeapons = wrapper => wrapper.find('#characterWeaponList');
  const header = wrapper => wrapper.find('#weaponsHeader');
  const navBarWeight = wrapper => wrapper.find('.navEquipWeight');

  describe('Firearms', () => {
    const wrapper = mountAppWithStore(storeWithCreateCharacterView());

    it('should be possible to open a list of selectable weapons', () => {
      wrapper.find('#addFirearm').simulate('click');
      expect(wrapper.text()).toContain('M16');
    });
    it('should be able to select a weapon', () => {
      gunList(wrapper).find('#M16').simulate('click');
      expect(selectedWeapons(wrapper).text()).toContain('M16');
    });
    it('should be possible to close the weapon select list', () => {
      wrapper.find('#closeFirearmModal').simulate('click');
      expect(wrapper.text()).not.toContain('M60');
    });
    it('should update the displayed weapons weight', () => {
      expect(header(wrapper).text()).toContain('8.7');
    });
    it('should update total weight', () => {
      expect(navBarWeight(wrapper).text()).toContain('13.7');
    });
    it('should be possible to increase qty of a gun', () => {
      wrapper.find('#qtyUpGun').simulate('click');
      expect(selectedWeapons(wrapper).text()).toContain('2');
    });
    it('should be possible to decrease qty of a gun', () => {
      wrapper.find('#qtyDownGun').simulate('click');
      expect(selectedWeapons(wrapper).text()).toContain('1');
    });
    it('should be possible to delete a gun', () => {
      wrapper.find('#removeGun').simulate('click');
      expect(wrapper.text()).not.toContain('M16');
    });
    it('should be possible to increase spare ammo', () => {
      wrapper.find('#addFirearm').simulate('click');
      gunList(wrapper).find('#M1911A1').simulate('click');
      wrapper.find('#qtyUpMagType1').simulate('click');
      expect(header(wrapper).text()).toContain('3.7');
      expect(navBarWeight(wrapper).text()).toContain('8.7');
    });
    it('should be possible to decrease spare ammo', () => {
      wrapper.find('#qtyDownMagType1').simulate('click');
      expect(header(wrapper).text()).toContain('3');
      expect(header(wrapper).text()).not.toContain('3.7');
      expect(navBarWeight(wrapper).text()).toContain('8');
      expect(navBarWeight(wrapper).text()).not.toContain('8.7');
    });
    it('should remove spare ammo weight from total when weapon removed', () => {
      wrapper.find('#qtyUpMagType1').simulate('click');
      wrapper.find('#removeGun').simulate('click');
      expect(header(wrapper).text()).toContain('0');
      expect(navBarWeight(wrapper).text()).toContain('5');
      expect(navBarWeight(wrapper).text()).not.toContain('5.7');
    });
    it('should remove all guns and ammo when remove all clicked', () => {
      gunList(wrapper).find('#M1911A1').simulate('click');
      wrapper.find('#qtyUpMagType1').simulate('click');
      gunList(wrapper).find('#M60').simulate('click');
      wrapper.find('#clearAllFirearms').simulate('click');
      expect(selectedWeapons(wrapper).text()).not.toContain('M1911A1');
      expect(selectedWeapons(wrapper).text()).not.toContain('M60');
      expect(navBarWeight(wrapper).text()).toContain('5');
    });
  });
  describe('firearms edge cases', () => {
    let wrapper;
    const gunList = () => wrapper.find('.equipmentListBody');
    const selectedWeapons = () => wrapper.find('#characterWeaponList');
    beforeEach(() => {
      wrapper = mountAppWithStore(storeWithCreateCharacterView());
      wrapper.find('#addFirearm').simulate('click');
    });
    it('should increment only the intended mag when weapons have multiple mag types', () => {
      gunList(wrapper).find('#M16').simulate('click');
      expect(selectedWeapons(wrapper).text()).toContain('M16');
      const spareMags = wrapper.find('.spareMags');
      const firstMag = spareMags.at(0);
      const secondMag = spareMags.at(1);
      firstMag.find('#qtyUpMagType1').simulate('click');
      expect(firstMag.find('.magQtySpan').text()).toContain('1');
      expect(secondMag.find('.magQtySpan').text()).not.toContain('1');
    });
    it('should not allow gun qty to be less than one', () => {
      gunList(wrapper).find('#M60').simulate('click');
      wrapper.find('#qtyDownGun').simulate('click');
      expect(selectedWeapons(wrapper).find('#M60_qty').text()).toContain('1');
      expect(selectedWeapons(wrapper).find('#M60_qty').text()).not.toContain('0');
    });
    it('should not allow mag qty to be less than 0', () => {
      gunList(wrapper).find('#M16').simulate('click');
      const spareMags = wrapper.find('.spareMags');
      const firstMag = spareMags.at(0);
      const secondMag = spareMags.at(1);
      firstMag.find('#qtyDownMagType1').simulate('click');
      expect(firstMag.find('.magQtySpan').text()).toContain('0');
      secondMag.find('#qtyDownMagType2').simulate('click');
      expect(firstMag.find('.magQtySpan').text()).toContain('0');
    });
    it('should not be possible to select the same weapon twice', () => {
      gunList(wrapper).find('#M16').simulate('click');
      gunList(wrapper).find('#M16').simulate('click');
      expect(navBarWeight(wrapper).text()).toContain('13.7');
    });
  });
  describe('firearms features', () => {
    const wrapper = mountAppWithStore(storeWithCreateCharacterView());
    wrapper.find('#addFirearm').simulate('click');
    gunList(wrapper).find('#M1911A1').simulate('click');
    it('should be possible to view firearms stats', () => {
      wrapper.find('#viewM1911A1').simulate('click');
      expect(wrapper.text()).toContain('ROF');
    });
    it('should be possible to close firearms stats', () => {
      wrapper.find('#closeGunStatView').simulate('click');
      expect(wrapper.text()).not.toContain('ROF');
    });
  });
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
    describe('custom magazine gaurd clases', () => {
      let wrapper;
      const gunList = () => wrapper.find('.equipmentListBody');
      const selectedWeapons = () => wrapper.find('#characterWeaponList');
      const modifyPanel = () => wrapper.find('.modifyWeaponPanel');

      const enterMagCapacity = (wrapper) => {
        wrapper.find('#customMagCapacityInput').simulate('change', {
          target: { value: '18' },
        });
      };
      const enterMagType = (wrapper) => {
        wrapper.find('#customMagTypeInput').simulate('change', {
          target: { value: 'Mag' },
        });
      };
      const enterMagWeight = (wrapper) => {
        wrapper.find('#customMagWeightInput').simulate('change', {
          target: { value: '.65' },
        });
      };
      const enterMagWeightAndType = (wrapper) => {
        enterMagWeight(wrapper);
        enterMagType(wrapper);
      };

      beforeEach(() => {
        wrapper = mountAppWithStore(storeWithCreateCharacterView());
        wrapper.find('#addFirearm').simulate('click');
        gunList(wrapper).find('#M16').simulate('click');
        selectedWeapons(wrapper).find('#modifyM16').simulate('click');
        modifyPanel().find('#addCustomMagazine').simulate('click');
      });
      it('should only accept numbers for capacity', () => {
        wrapper.find('#customMagCapacityInput').simulate('change', {
          target: { value: 'six' },
        });
        enterMagWeightAndType(wrapper);
        wrapper.find('#submitCustomMag').simulate('click');
        expect(wrapper.text()).toContain('Please Enter Valid Data');
      });
      it('should only accept whole numbers for capacity', () => {
        wrapper.find('#customMagCapacityInput').simulate('change', {
          target: { value: '18.5' },
        });
        enterMagWeightAndType(wrapper);
        wrapper.find('#submitCustomMag').simulate('click');
        expect(wrapper.text()).toContain('Please Enter Valid Data');
      });
      it('should only accept numbers for weight', () => {
        enterMagCapacity(wrapper);
        wrapper.find('#customMagWeightInput').simulate('change', {
          target: { value: 'point six five' },
        });
        enterMagType(wrapper);
        wrapper.find('#submitCustomMag').simulate('click');
        expect(wrapper.text()).toContain('Please Enter Valid Data');
      });
      it('should have a value at least two characters long for type', () => {
        enterMagCapacity(wrapper);
        enterMagWeight(wrapper);
        wrapper.find('#customMagTypeInput').simulate('change', {
          target: { value: '!' },
        });
        wrapper.find('#submitCustomMag').simulate('click');
        expect(wrapper.text()).toContain('Please Enter Valid Data');
      });
    });
    it('should be possible to modify firearm weight', () => {
      modifyPanel().find('#modifyWeaponWeight').simulate('click');
      wrapper.find('#modifyWeightNoteInput').simulate('change', {
        target: { value: 'added torch' },
      });
      wrapper.find('#modifyWeightValueInput').simulate('change', {
        target: { value: '.5' },
      });
      wrapper.find('#submitModifiedWeight').simulate('click');
      expect(wrapper.find('#WeaponStatWeight').text()).toContain('9.2');
    });
    it('should render the weight modifications', () => {
      modifyPanel().find('#modifyWeaponWeight').simulate('click');
      wrapper.find('#modifyWeightNoteInput').simulate('change', {
        target: { value: 'added torch' },
      });
      wrapper.find('#modifyWeightValueInput').simulate('change', {
        target: { value: '.5' },
      });
      wrapper.find('#submitModifiedWeight').simulate('click');
      expect(modifyPanel().text()).toContain('added torch');
      expect(modifyPanel().text()).toContain('0.5');
    });
    it('should be possible to remove weapon weight modifications', () => {
      modifyPanel().find('#modifyWeaponWeight').simulate('click');
      wrapper.find('#modifyWeightNoteInput').simulate('change', {
        target: { value: 'added torch' },
      });
      wrapper.find('#modifyWeightValueInput').simulate('change', {
        target: { value: '.5' },
      });
      wrapper.find('#submitModifiedWeight').simulate('click');
      wrapper.find('.removeModification').simulate('click');
      expect(wrapper.find('#WeaponStatWeight').text()).toContain('8.7');
      expect(wrapper.text()).not.toContain('added torch');
    });
    describe('modify weapon weight gaurd clauses', () => {
      let wrapper;
      const gunList = () => wrapper.find('.equipmentListBody');
      const selectedWeapons = () => wrapper.find('#characterWeaponList');
      const modifyPanel = () => wrapper.find('.modifyWeaponPanel');

      beforeEach(() => {
        wrapper = mountAppWithStore(storeWithCreateCharacterView());
        wrapper.find('#addFirearm').simulate('click');
        gunList(wrapper).find('#M16').simulate('click');
        selectedWeapons(wrapper).find('#modifyM16').simulate('click');
        modifyPanel().find('#modifyWeaponWeight').simulate('click');
      });
      it('should only accept numbers for weight value', () => {
        wrapper.find('#modifyWeightNoteInput').simulate('change', {
          target: { value: 'added torch' },
        });
        wrapper.find('#modifyWeightValueInput').simulate('change', {
          target: { value: 'one pound' },
        });
        wrapper.find('#submitModifiedWeight').simulate('click');
        expect(wrapper.text()).toContain('Please Enter Valid Data');
      });
      it('should have a value entered in type nore feild', () => {
        wrapper.find('#modifyWeightValueInput').simulate('change', {
          target: { value: '1' },
        });
        wrapper.find('#submitModifiedWeight').simulate('click');
        expect(wrapper.text()).toContain('Please Enter Valid Data');
      });
    });
    it('should be possible to remove all mods', () => {
      const wrapper = mountAppWithStore(storeWithCreateCharacterView(testM1911A1WithMods()));
      const modifyPanel = () => wrapper.find('.modifyWeaponPanel');
      const selectedWeapons = () => wrapper.find('#characterWeaponList');
      selectedWeapons(wrapper).find('#modifyM1911A1').simulate('click');
      modifyPanel().find('.removeAllMods').simulate('click');
      expect(modifyPanel().text()).not.toContain('TestMag');
      expect(wrapper.find('#WeaponStatWeight').text()).toContain('3');
    });
  });
});
