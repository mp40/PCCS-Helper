import { mountAppWithStore } from '../../helpers/testHelpers';

describe('Selecting Charcter Generation', () => {
  it('should generate default stats for character', () => {
    const wrapper = mountAppWithStore();
    wrapper.find('#activateCreateChar').simulate('click');
    expect(wrapper.find('.navEquipWeight').text()).toContain(5);
    expect(wrapper.find('#updateStr').text()).toBe('10');
    expect(wrapper.find('#updateInt').text()).toBe('10');
    expect(wrapper.find('#updateWil').text()).toBe('10');
    expect(wrapper.find('#updateHlt').text()).toBe('10');
    expect(wrapper.find('#updateAgi').text()).toBe('10');
    expect(wrapper.find('#updateGun').text()).toBe('0');
    expect(wrapper.find('#updateHand').text()).toBe('0');
  });
});

describe('Character Generation', () => {
  describe('filtering the equipment list', () => {
    it('should display filter tags', () => {
      const wrapper = mountAppWithStore();
      wrapper.find('#activateCreateChar').simulate('click');
      wrapper.find('#addEquipment').simulate('click');
      wrapper.find('#filterEquipmentList').simulate('click');
      expect(wrapper.text()).toContain('ALICE');
    });
    it('should filter the list based on slected criteria', () => {
      const wrapper = mountAppWithStore();
      wrapper.find('#activateCreateChar').simulate('click');
      wrapper.find('#addEquipment').simulate('click');
      wrapper.find('#filterEquipmentList').simulate('click');
      const tagContainer = wrapper.find('.tagContainer div');
      tagContainer.at(8).simulate('click');
      wrapper.find('#filterEquipmentList').simulate('click');
      expect(wrapper.text()).toContain('Boil In The Bag');
      expect(wrapper.text()).not.toContain('Baseball Bat');
    });
    it('should change the filterEquipmentList button text when filter modal open', () => {
      const wrapper = mountAppWithStore();
      wrapper.find('#activateCreateChar').simulate('click');
      wrapper.find('#addEquipment').simulate('click');
      const button = wrapper.find('#filterEquipmentList');
      expect(button.text()).toEqual('Filter List');
      button.simulate('click');
      expect(button.text()).toEqual('Apply Filter');
    });
    it('should be able to clear filters', () => {
      // TODO
    });
  });
});
// });
