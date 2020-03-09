import { mountAppWithStore, storeWithCreateCharacterView } from '../../helpers/testHelpers';
import { rifles, pistols, smgs, mgs, sniperRifles, shotguns } from '../../data/firearms';

const fullFirearmsList = () => [...rifles(), ...pistols(), ...smgs(), ...mgs(), ...sniperRifles(), ...shotguns()];

describe('Firearms selection', () => {
  describe('filtering firearms list', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mountAppWithStore(storeWithCreateCharacterView());
      wrapper.find('#addFirearm').simulate('click');
    });
    it('should render an unfiltered list by defult', () => {
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(fullFirearmsList().length);
    });
    it('should be possible to open firearm filter options', () => {
      wrapper.find('#showFirearmFilters').simulate('click');
      expect(wrapper.find('.filterByFirearmTypeForm').exists()).toBe(true);
    });
    it('should be possible filter to only rifles', () => {
      // wrapper.find('.selectRiflesFilter').simulate('change', { target: { value: 'Rifles' } });
      wrapper.find('.selectRiflesFilter').simulate('click');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(rifles().length);
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M1911A1');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('M16');
    });
    it('should be possible filter to only pistols', () => {
      wrapper.find('.selectPistolsFilter').simulate('click');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(pistols().length);
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('M1911A1');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M16');
    });
    it('should be possible filter to only sub-machine guns', () => {
      wrapper.find('.selectSMGsFilter').simulate('click');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(smgs().length);
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('MAT 49');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M1911A1');
    });
    it('should be possible filter to only machine guns', () => {
      wrapper.find('.selectMGsFilter').simulate('click');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(mgs().length);
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('M60');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M1911A1');
    });
    it('should be possible filter to only sniper rifles', () => {
      wrapper.find('.selectSniperRiflesFilter').simulate('click');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(sniperRifles().length);
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('Dragunov SVD');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M60');
    });
    it('should be possible filter to only shotguns', () => {
      wrapper.find('.selectShotgunsFilter').simulate('click');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(shotguns().length);
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('Remington M870');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M60');
    });
    it('should be possible reset filter to all', () => {
      wrapper.find('.selectAllFilter').simulate('click');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(fullFirearmsList().length);
    });
  });
});
