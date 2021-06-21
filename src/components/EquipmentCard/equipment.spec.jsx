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
      filterModal.find('button[children="Combat"]').simulate('click');

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
      wrapper.find('span[children="Baseball Bat"]').closest('button').simulate('click');

      expect(wrapper.find('.gear-table-header--container').text()).toContain('2.2');
      expect(wrapper.find('.gear-table-row--container').text()).toContain('Baseball Bat2.212.2');
    });

    it('should be possible increment qty up', () => {
      wrapper.find('.button--up').simulate('click');

      expect(wrapper.find('.gear-table-header--container').text()).toContain('4.4');
      expect(wrapper.find('.gear-table-row--container').text()).toContain('Baseball Bat2.224.4');
    });

    it('should be possible increment qty down', () => {
      wrapper.find('.button--down').simulate('click');

      expect(wrapper.find('.gear-table-header--container').text()).toContain('2.2');
      expect(wrapper.find('.gear-table-row--container').text()).toContain('Baseball Bat2.212.2');
    });

    it('should be possible to remove equipment from list', () => {
      wrapper.find('.button--close').simulate('click');

      expect(wrapper.find('.gear-table-header--container').text()).not.toContain('2.2');
      expect(wrapper.find('.gear-table-row--container').exists()).toBe(false);
    });

    it('should clear all equipment from list', () => {
      wrapper.find('span[children="Baseball Bat"]').closest('button').simulate('click');
      wrapper.find('span[children="Basic Pouch"]').closest('button').simulate('click');
      wrapper.find('span[children="Bayonet"]').closest('button').simulate('click');

      wrapper.find('button[children="Clear All"]').simulate('click');

      expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs0');
      expect(wrapper.find('.gear-table-row--container').exists()).toBe(false);
    });
  });
});
