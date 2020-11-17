import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { getStore } from '../../helpers/testHelpers';

import ConnectedEquipmentCard from '.';
import EquipmentCard from './component';

describe('the equipment list', () => {
  describe('equipment modals', () => {
    const removeEquipment = jest.fn();
    const removeAllEquipment = jest.fn();
    const increaseEquipmentQty = jest.fn();
    const decreaseEquipmentQty = jest.fn();

    const wrapper = shallow(<EquipmentCard
      removeEquipment={removeEquipment}
      removeAllEquipment={removeAllEquipment}
      increaseEquipmentQty={increaseEquipmentQty}
      decreaseEquipmentQty={decreaseEquipmentQty}
      equipment={[]}
    />);

    it('should open add equipment modal', () => {
      wrapper.find('button[children="Add Equipment"]').simulate('click');

      expect(wrapper.find('Connect(SelectEquipment)').exists()).toBe(true);
    });

    it('should open custom equipment modal', () => {
      wrapper.find('button[children="Add Custom"]').simulate('click');

      expect(wrapper.find('Connect(CustomEquipment)').exists()).toBe(true);
    });

    it('should open equipment filter modal', () => {
      wrapper.find('Connect(SelectEquipment)').props().handleSetShowFilters();

      expect(wrapper.find('EquipmentFilter').exists()).toBe(true);
    });

    it('should filter equipment', () => {
      const filterModal = wrapper.find('EquipmentFilter').dive();
      filterModal.find('div[children="Combat"]').simulate('click');

      expect(wrapper.find('Connect(SelectEquipment)').prop('filteredTags')).toEqual(['Combat']);
    });

    it('should clear filters', () => {
      wrapper.find('Connect(SelectEquipment)').props().handleRemoveAllTags();

      expect(wrapper.find('Connect(SelectEquipment)').prop('filteredTags')).toEqual([]);
    });
  });

  describe('equipment intergration tests', () => {
    const store = getStore();

    const wrapper = mount(
      <Provider store={store}>
        <ConnectedEquipmentCard />
      </Provider>,
    );

    it('should be possible to add equipment', () => {
      wrapper.find('button[children="Add Equipment"]').simulate('click');
      wrapper.find('div[children="Baseball Bat"]').simulate('click');

      expect(wrapper.find('thead').text()).toContain('2.2');
      expect(wrapper.find('tbody').find('tr').text()).toContain('Baseball Bat2.212.2');
    });

    it('should be possible increment qty up', () => {
      wrapper.find('#qtyUpEquipment').simulate('click');

      expect(wrapper.find('tbody').find('tr').text()).toContain('Baseball Bat2.224.4');
      expect(wrapper.find('thead').text()).toContain('4.4');
    });

    it('should be possible increment qty down', () => {
      wrapper.find('#qtyDownEquipment').simulate('click');

      expect(wrapper.find('tbody').find('tr').text()).toContain('Baseball Bat2.212.2');
      expect(wrapper.find('thead').text()).toContain('2.2');
    });

    it('should be possible to remove equipment from list', () => {
      wrapper.find('.removeBaseballBat').simulate('click');

      expect(wrapper.find('tbody').text()).not.toContain('Baseball Bat');
      expect(wrapper.find('thead').text()).toContain('lbs0');
    });

    it('should clear all equipment from list', () => {
      wrapper.find('div[children="Baseball Bat"]').simulate('click');
      wrapper.find('div[children="Basic Pouch"]').simulate('click');
      wrapper.find('div[children="Bayonet"]').simulate('click');

      wrapper.find('button[children="Clear All"]').simulate('click');

      expect(wrapper.find('tbody').text()).not.toContain('Bayonet');
      expect(wrapper.find('tbody').text()).not.toContain('Basic Pouch');
      expect(wrapper.find('tbody').text()).not.toContain('Baseball Bat');
      expect(wrapper.find('thead').text()).toContain('lbs0');
    });
  });
});
