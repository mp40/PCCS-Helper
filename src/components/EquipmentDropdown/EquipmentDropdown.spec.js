import { mountAppWithStore, storeWithCreateCharacterView } from '../../helpers/testHelpers';

describe('the equipment list', () => {
  let wrapper;
  const addEquipment = () => {
    wrapper.find('#addEquipment').simulate('click');
    const requiredEquipment = wrapper.find('.equipmentListBody').at(0).childAt(0).childAt(0);
    requiredEquipment.simulate('click');
  };
  beforeEach(() => {
    wrapper = mountAppWithStore(storeWithCreateCharacterView());
    addEquipment();
  });
  it('should add selected equipment to character equipmentTable', () => {
    const name = 'Baseball Bat';
    const weight = '2.2';
    const qty = '1';
    expect(wrapper.find('.BatRow').text()).toContain(`${name + weight + qty}`);
  });
  it('should not be possible to add the same item twice to list', () => {
    wrapper.find('.equipmentListBody').at(0).childAt(0).childAt(0)
      .simulate('click');
    wrapper.find('#closeEquipmentModal').simulate('click');
    expect(wrapper.find('.BatRow')).toHaveLength(1);
  });
  describe('filtering the equipment list', () => {
    it('should display filter tags', () => {
      wrapper = mountAppWithStore();
      wrapper.find('#activateCreateChar').simulate('click');
      wrapper.find('#addEquipment').simulate('click');
      wrapper.find('#filterEquipmentList').simulate('click');
      expect(wrapper.text()).toContain('ALICE');
    });
    it('should filter the list based on slected criteria', () => {
      wrapper = mountAppWithStore();
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
      wrapper = mountAppWithStore();
      wrapper.find('#activateCreateChar').simulate('click');
      wrapper.find('#addEquipment').simulate('click');
      const button = wrapper.find('#filterEquipmentList');
      expect(button.text()).toEqual('Filter List');
      button.simulate('click');
      expect(button.text()).toEqual('Apply Filter');
    });
  });
});
