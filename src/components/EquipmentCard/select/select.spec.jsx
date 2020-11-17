import React from 'react';
import { shallow } from 'enzyme';

import SelectEquipment from './component';

const mockBasicPouch = {
  name: 'Basic Pouch',
  weight: 0.4,
  qty: 1,
  tags: ['Load Bearing', 'ALICE'],
};

describe('the equipment list', () => {
  const addEquipment = jest.fn();
  const handleRemoveAllTags = jest.fn();
  const handleSetShowFilters = jest.fn();
  const handleSetShowEquipment = jest.fn();

  const createWrapper = (equipment, filteredTags) => shallow(<SelectEquipment
    addEquipment={addEquipment}
    handleRemoveAllTags={handleRemoveAllTags}
    handleSetShowFilters={handleSetShowFilters}
    handleSetShowEquipment={handleSetShowEquipment}
    equipment={equipment}
    filteredTags={filteredTags}
  />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should add selected equipment to character equipmentTable', () => {
    const wrapper = createWrapper([], []);

    wrapper.find('div[children="Basic Pouch"]').parent().simulate('click');

    expect(addEquipment).toHaveBeenCalledWith(mockBasicPouch);
  });

  it('should not be possible to add the same item twice to list', () => {
    const wrapper = createWrapper([mockBasicPouch], []);

    wrapper.find('div[children="Basic Pouch"]').parent().simulate('click');

    expect(addEquipment).not.toHaveBeenCalled();
  });

  it('should display filter tags', () => {
    const wrapper = createWrapper([], []);

    wrapper.find('button[children="Filter List"]').simulate('click');

    expect(handleSetShowFilters).toHaveBeenCalled();
  });

  it('should filter the list to show selected criteria', () => {
    const wrapper = createWrapper([], ['ALICE']);

    expect(wrapper.find('div[children="Basic Pouch"]').exists()).toBe(true);
    expect(wrapper.find('div[children="Baseball Bat"]').exists()).toBe(false);
    expect(wrapper.find('div[children="MRE"]').exists()).toBe(false);
  });

  it('should not render the clear filters button if no filters', () => {
    const wrapper = createWrapper([], []);

    expect(wrapper.find('button[children="Clear Filters"]').exists()).toBe(false);
  });

  it('should be possible to clear all filters', () => {
    const wrapper = createWrapper([], ['ALICE']);

    wrapper.find('button[children="Clear Filters"]').simulate('click');

    expect(handleRemoveAllTags).toHaveBeenCalled();
  });

  it('should be possible to close the equipment modal', () => {
    const wrapper = createWrapper([], []);

    wrapper.find('.close').simulate('click');

    expect(handleSetShowEquipment).toHaveBeenCalled();
  });
});
