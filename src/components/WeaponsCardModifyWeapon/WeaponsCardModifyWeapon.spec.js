import { mountAppWithStore, storeWithCreateCharacterView, testM1911A1WithMods } from '../../helpers/testHelpers';

describe('Customising Firearm', () => {
  let wrapper;

  const gunList = () => wrapper.find('.firearmSelectModal').find('.gearModalContents');
  const selectedWeapons = () => wrapper.find('#characterWeaponList');
  const modifyPanel = () => wrapper.find('.modifyWeaponPanel');

  describe('Custom Magazines', () => {
    const inputCapacityValue = (value = '18') => wrapper.find('#customMagCapacityInput').simulate('change', { target: { value } });
    const inputWeightValue = (value = '.65') => wrapper.find('#customMagWeightInput').simulate('change', { target: { value } });
    const inputTypeValue = (value = 'Mag') => wrapper.find('#customMagTypeInput').simulate('change', { target: { value } });
    let ammoWeight;
    let gunWeight;
    describe('creating custom magazine', () => {
      beforeEach(() => {
        wrapper = mountAppWithStore(storeWithCreateCharacterView());
        wrapper.find('#addFirearm').simulate('click');
        gunList(wrapper).find('#M16').simulate('click');
        selectedWeapons(wrapper).find('#modifyM16').simulate('click');
        ammoWeight = wrapper.find('.gunTableLine8').childAt(0);
        gunWeight = wrapper.find('.gunTableLine2').childAt(0);
      });

      it('should be possible to change default magazine type when magazine options are available', () => {
        modifyPanel().find('.M16MagAtIndex1').find('.selectPrimaryButton').simulate('click');
        expect(modifyPanel().find('.primaryMagazine').childAt(1).text()).toContain('30');
      });
      it('should update weight when primary mags changed', () => {
        modifyPanel().find('.M16MagAtIndex1').find('.selectPrimaryButton').simulate('click');
        expect(ammoWeight.text()).toContain('1');
        expect(gunWeight.text()).toContain('9');
      });
      it('should be possible to add custom magazine', () => {
        modifyPanel().find('#addCustomMagazine').simulate('click');
        inputCapacityValue();
        inputWeightValue();
        inputTypeValue();
        wrapper.find('.submitCustomMagazine').simulate('click');
        expect(modifyPanel().find('.M16MagAtIndex2').exists()).toBe(true);
        expect(modifyPanel().find('.M16MagAtIndex2').text()).toContain('18');
        expect(modifyPanel().find('.M16MagAtIndex2').text()).toContain('0.65');
        expect(modifyPanel().find('.M16MagAtIndex2').text()).toContain('Mag');
      });
      it('should be possible to close the modify weapon modal', () => {
        wrapper.find('#closeGunStatView').simulate('click');
        expect(wrapper.text()).not.toContain('Modify Weapon');
      });
      it('should be possible to remove/hide a particular magazine in the weapon list', () => {
        const remove30RoundMagazineButton = wrapper.find('.removeMagazineButton').last();
        remove30RoundMagazineButton.simulate('click');
        expect(wrapper.find('#characterWeaponList').text()).not.toContain('30 round Mag');
      });
      it('should not be possible to remove the primary magazine', () => {
        const remove20RoundMagazineButton = wrapper.find('.removeMagazineButton').first();
        remove20RoundMagazineButton.simulate('click');
        expect(wrapper.find('#characterWeaponList').text()).not.toContain('20 round Mag');
      });
      it('should be possible to replace the magazine', () => {
        const handle30RoundMagazineButton = wrapper.find('.removeMagazineButton').last();
        expect(modifyPanel().find('.M16MagAtIndex1').hasClass('removedMagazine')).toBe(false);
        handle30RoundMagazineButton.simulate('click');
        expect(modifyPanel().find('.M16MagAtIndex1').hasClass('removedMagazine')).toBe(true);
        expect(wrapper.find('#characterWeaponList').text()).not.toContain('30 round Mag');
        handle30RoundMagazineButton.simulate('click');
        expect(modifyPanel().find('.M16MagAtIndex1').hasClass('removedMagazine')).toBe(false);
        expect(wrapper.find('#characterWeaponList').text()).toContain('30 round Mag');
      });
      it('should not be possible to set a removed magazine as primary', () => {
        const remove30RoundMagazineButton = wrapper.find('.removeMagazineButton').last();
        const set30RoundMagazineAsPrimaryButton = wrapper.find('.selectPrimaryButton').last();
        remove30RoundMagazineButton.simulate('click');
        expect(gunWeight.text()).toBe('W8.7');
        set30RoundMagazineAsPrimaryButton.simulate('click');
        expect(gunWeight.text()).toBe('W8.7');
        expect(ammoWeight.text()).toBe('AW.7');
      });
      it('should be possible to exit custom magazine form', () => {
        modifyPanel().find('#addCustomMagazine').simulate('click');
        modifyPanel().find('button').last().simulate('click');
        expect(modifyPanel().text()).not.toContain('Custom Magazine Details');
      });
    });
    describe('custom magazine warnings', () => {
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
  });
  describe('Modifying Firearm', () => {
    const inputModificationName = (value = 'added torch') => wrapper.find('#modifyWeightNoteInput').simulate('change', { target: { value } });
    const inputModificationWeight = (value = '.5') => wrapper.find('#modifyWeightValueInput').simulate('change', { target: { value } });

    describe('adding modification', () => {
      let gunWeight;
      const addTorchAsMod = () => {
        modifyPanel().find('#modifyWeaponWeight').simulate('click');
        inputModificationName();
        inputModificationWeight();
        wrapper.find('.submitCustomFirearm').simulate('click');
      };

      beforeEach(() => {
        wrapper = mountAppWithStore(storeWithCreateCharacterView());
        wrapper.find('#addFirearm').simulate('click');
        gunList(wrapper).find('#M16').simulate('click');
        selectedWeapons(wrapper).find('#modifyM16').simulate('click');
        gunWeight = wrapper.find('.gunTableLine2').childAt(0);
      });

      it('should be possible to modify and render firearm weight', () => {
        addTorchAsMod();
        expect(gunWeight.text()).toContain('9.2');
        expect(modifyPanel().text()).toContain('added torch');
        expect(modifyPanel().text()).toContain('0.5');
      });
      it('should be possible to remove weapon weight modifications', () => {
        addTorchAsMod();
        wrapper.find('.removeModification').simulate('click');
        expect(gunWeight.text()).toContain('8.7');
        expect(wrapper.text()).not.toContain('added torch');
      });
      it('should be possible to exit the modifcatyion form', () => {
        modifyPanel().find('#modifyWeaponWeight').simulate('click');
        modifyPanel().find('.exitModificationForm').simulate('click');
        expect(modifyPanel().text()).not.toContain('Modify Weapon Weight');
      });
    });
    describe('modify weapon weight warnings', () => {
      beforeEach(() => {
        wrapper = mountAppWithStore(storeWithCreateCharacterView());
        wrapper.find('#addFirearm').simulate('click');
        gunList(wrapper).find('#M16').simulate('click');
        selectedWeapons(wrapper).find('#modifyM16').simulate('click');
        modifyPanel().find('#modifyWeaponWeight').simulate('click');
      });

      it('should only accept numbers for weight value', () => {
        inputModificationName();
        inputModificationWeight('one pound');
        wrapper.find('.submitCustomFirearm').simulate('click');
        expect(wrapper.text()).toContain('Please Enter Valid Data');
      });
      it('should have a value entered for the modification name', () => {
        inputModificationWeight();
        wrapper.find('.submitCustomFirearm').simulate('click');
        expect(wrapper.text()).toContain('Please Enter Valid Data');
      });
      it('should be possible to remove all mods', () => {
        wrapper = mountAppWithStore(storeWithCreateCharacterView(testM1911A1WithMods()));
        selectedWeapons(wrapper).find('#modifyM1911A1').simulate('click');
        modifyPanel().find('.removeAllMods').simulate('click');
        expect(modifyPanel().text()).not.toContain('TestMag');
        expect(wrapper.find('.gunTableLine2').childAt(0).text()).toContain('3');
      });
    });
  });
});
