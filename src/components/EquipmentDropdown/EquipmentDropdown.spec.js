import { mountAppWithStore, storeWithCreateCharacterView, storeWithEquipment } from '../../helpers/testHelpers';

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
    expect(wrapper.find('#characterEquipmentList').childAt(1).text()).toContain(`${name + weight + qty}`);
  });
  it('should not be possible to add the same item twice to list', () => {
    wrapper.find('.equipmentListBody').at(0).childAt(0).childAt(0)
      .simulate('click');
    wrapper.find('#closeEquipmentModal').simulate('click');
    expect(wrapper.find('#characterEquipmentList').children()).toHaveLength(2);
  });
});
