import { mountAppWithStore, storeWithEquipment } from '../../helpers/testHelpers';

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
