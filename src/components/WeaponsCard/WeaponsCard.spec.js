import { act } from 'react-dom/test-utils';
import { mountAppWithStore, storeWithCreateCharacterView } from '../../helpers/testHelpers';
import { getSelectedWeapons } from './component';

const waitOneSec = (simulate) => new Promise(((resolve) => {
  setTimeout(() => {
    resolve(simulate);
  }, 1001);
}));

describe('The Weapons Card', () => {
  const gunList = (wrapper) => wrapper.find('.firearmSelectModal');
  const selectedWeapons = (wrapper) => wrapper.find('#characterWeaponList');
  const header = (wrapper) => wrapper.find('.weaponsHeader');
  const navBarWeight = (wrapper) => wrapper.find('.navEquipWeight');

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
      wrapper.find('#qtyUpFirearm').simulate('click');
      expect(selectedWeapons(wrapper).text()).toContain('2');
    });
    it('should be possible to decrease qty of a gun', () => {
      wrapper.find('#qtyDownFirearm').simulate('click');
      expect(selectedWeapons(wrapper).text()).toContain('1');
    });
    it('should be possible to delete a gun', () => {
      wrapper.find('.removeM16').simulate('click');
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
      wrapper.find('.removeM1911A1').simulate('click');
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
    beforeEach(() => {
      wrapper = mountAppWithStore(storeWithCreateCharacterView());
      wrapper.find('#addFirearm').simulate('click');
    });
    it('should increment only the intended mag when weapons have multiple mag types', () => {
      gunList(wrapper).find('#M16').simulate('click');
      expect(selectedWeapons(wrapper).text()).toContain('M16');
      const spareMagRow = wrapper.find('.spareMagRow');
      const firstMag = spareMagRow.at(0);
      const secondMag = spareMagRow.at(1);
      firstMag.find('#qtyUpMagType1').simulate('click');
      expect(firstMag.find('.spareMagRow').text()).toContain('1');
      expect(secondMag.find('.spareMagRow').text()).not.toContain('1');
    });
    it('should not allow gun qty to be less than one', () => {
      gunList(wrapper).find('#M60').simulate('click');
      wrapper.find('#qtyDownFirearm').simulate('click');
      expect(wrapper.find('.M60Row').childAt(2).text()).toContain('1');
      expect(wrapper.find('.M60Row').childAt(2).text()).not.toContain('0');
    });
    it('should not allow mag qty to be less than 0', () => {
      gunList(wrapper).find('#M16').simulate('click');
      const spareMagRow = wrapper.find('.spareMagRow');
      const firstMag = spareMagRow.at(0);
      const secondMag = spareMagRow.at(1);
      firstMag.find('#qtyDownMagType1').simulate('click');
      expect(firstMag.find('.spareMagRow').text()).toContain('0');
      secondMag.find('#qtyDownMagType2').simulate('click');
      expect(firstMag.find('.spareMagRow').text()).toContain('0');
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
    it('should be possible to close firearms stats', async () => {
      await act(async () => {
        await waitOneSec(wrapper.find('#closeGunStatView').simulate('click'));
      });
      wrapper.update();
      expect(wrapper.find('#closeGunStatView').exists()).toEqual(false);
    });
  });
  describe('grenades', () => {
    const wrapper = mountAppWithStore(storeWithCreateCharacterView());
    it('should be possible to open a list of selectable grenades', () => {
      wrapper.find('#addGrenade').simulate('click');
      expect(wrapper.text()).toContain('L2 A2');
    });
    it('should be possible to select a grenade', () => {
      wrapper.find('.selectM2').simulate('click');
      expect(selectedWeapons(wrapper).text()).toContain('M21.311.3');
    });
    it('should be possible to increment grenade qty up', () => {
      wrapper.find('.M2Row').find('#qtyUpGrenade').simulate('click');
      expect(wrapper.find('.M2Row').text()).toContain('M21.32');
    });
    it('should be possible to increment grenade qty down', () => {
      wrapper.find('.M2Row').find('#qtyDownGrenade').simulate('click');
      expect(wrapper.find('.M2Row').text()).toContain('M21.31');
    });
    it('should be not possible for grenade qty to be less than one', () => {
      wrapper.find('.M2Row').find('#qtyDownGrenade').simulate('click');
      expect(wrapper.find('.M2Row').text()).toContain('M21.31');
      expect(wrapper.find('.M2Row').text()).not.toContain('M21.30');
    });
    it('should be possible ro remove grenade', () => {
      wrapper.find('.removeM2').simulate('click');
      expect(selectedWeapons(wrapper).text()).not.toContain('M21.311.3');
    });
  });
});

describe('getSelectedWeapons function', () => {
  it('should return the firearms list', () => {
    const firearms = [{ name: 'M16' }, { name: 'M1911A1' }];
    expect(getSelectedWeapons(firearms)).toStrictEqual(firearms);
  });
  it('should return an empty array if firearms is undefined', () => {
    expect(getSelectedWeapons(undefined)).toStrictEqual([]);
  });
});
