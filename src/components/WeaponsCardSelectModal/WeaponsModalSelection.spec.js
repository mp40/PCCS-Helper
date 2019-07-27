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
      expect(wrapper.find('.equipmentListBody').children().length).toBe(fullFirearmsList().length);
    });
    it('should be possible to open firearm filter options', () => {
      wrapper.find('#showFirearmFilters').simulate('click');
      expect(wrapper.find('.filterByFirearmTypeForm').exists()).toBe(true);
    });
    it('should be possible filter to only rifles', () => {
      wrapper.find('.selectRifleFilter').simulate('change', { target: { value: 'Rifles' } });
      expect(wrapper.find('.equipmentListBody').children().length).toBe(rifles().length);
      expect(wrapper.find('.equipmentListBody').text()).not.toContain('M1911A1');
      expect(wrapper.find('.equipmentListBody').text()).toContain('M16');
    });
    it('should be possible filter to only pistols', () => {
      wrapper.find('.selectRifleFilter').simulate('change', { target: { value: 'Pistols' } });
      expect(wrapper.find('.equipmentListBody').children().length).toBe(pistols().length);
      expect(wrapper.find('.equipmentListBody').text()).toContain('M1911A1');
      expect(wrapper.find('.equipmentListBody').text()).not.toContain('M16');
    });
    it('should be possible filter to only sub-machine guns', () => {
      wrapper.find('.selectRifleFilter').simulate('change', { target: { value: 'SMGs' } });
      expect(wrapper.find('.equipmentListBody').children().length).toBe(smgs().length);
      expect(wrapper.find('.equipmentListBody').text()).toContain('MAT 49');
      expect(wrapper.find('.equipmentListBody').text()).not.toContain('M1911A1');
    });
    it('should be possible filter to only machine guns', () => {
      wrapper.find('.selectRifleFilter').simulate('change', { target: { value: 'MGs' } });
      expect(wrapper.find('.equipmentListBody').children().length).toBe(mgs().length);
      expect(wrapper.find('.equipmentListBody').text()).toContain('M60');
      expect(wrapper.find('.equipmentListBody').text()).not.toContain('M1911A1');
    });
    it('should be possible filter to only sniper rifles', () => {
      wrapper.find('.selectRifleFilter').simulate('change', { target: { value: 'Sniper Rifles' } });
      expect(wrapper.find('.equipmentListBody').children().length).toBe(sniperRifles().length);
      expect(wrapper.find('.equipmentListBody').text()).toContain('Dragunov SVD');
      expect(wrapper.find('.equipmentListBody').text()).not.toContain('M60');
    });
    it('should be possible filter to only shotguns', () => {
      wrapper.find('.selectRifleFilter').simulate('change', { target: { value: 'Shotguns' } });
      expect(wrapper.find('.equipmentListBody').children().length).toBe(shotguns().length);
      expect(wrapper.find('.equipmentListBody').text()).toContain('Remington M870');
      expect(wrapper.find('.equipmentListBody').text()).not.toContain('M60');
    });
    it('should be possible reset filter to all', () => {
      wrapper.find('.selectAllFilter').simulate('change', { target: { value: 'All' } });
      expect(wrapper.find('.equipmentListBody').children().length).toBe(fullFirearmsList().length);
    });
  });
});
