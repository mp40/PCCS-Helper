import React from 'react';
import { shallow } from 'enzyme';

import SelectEquipment from './component';

import * as equipmentModule from '../../../data/equipmentList';

const mockBasicPouch = {
  name: 'Basic Pouch',
  tags: ['Load Bearing', 'ALICE'],
};

const mockAKChestRig = {
  name: 'Type 56 AK Chest Rig',
  tags: ['Load Bearing', 'Chest Rig', 'Vietnam'],
};

const mockBat = {
  name: 'Baseball Bat',
  tags: ['Melee'],
};

const mockMRE = {
  name: 'MRE',
  tags: ['Rations'],
};

const mockSKSChestRig = {
  name: 'Type 56 SKS Chest Rig',
  tags: ['Load Bearing', 'Chest Rig', 'Vietnam'],
};

const mockModernChestRig = {
  name: 'Mock Modern Rig',
  tags: ['Load Bearing', 'Chest Rig', 'Modern'],
};

describe('the equipment list', () => {
  let wrapper;

  const addEquipment = jest.fn();
  const handleRemoveAllTags = jest.fn();
  const handleSetShowFilters = jest.fn();
  const handleSetShowEquipment = jest.fn();

  beforeEach(() => {
    equipmentModule.equipment = jest.fn()
      .mockImplementation(() => [
        mockBasicPouch,
        mockBat,
        mockAKChestRig,
        mockMRE,
        mockSKSChestRig,
        mockModernChestRig,
      ]);

    wrapper = shallow(<SelectEquipment
      addEquipment={addEquipment}
      handleRemoveAllTags={handleRemoveAllTags}
      handleSetShowFilters={handleSetShowFilters}
      handleSetShowEquipment={handleSetShowEquipment}
      equipment={[]}
      filteredTags={[]}
    />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should add selected equipment to character equipmentTable', () => {
    wrapper.find('span[children="Basic Pouch"]').parent().simulate('click');

    expect(addEquipment).toHaveBeenCalledWith(mockBasicPouch);
  });

  it('should not be possible to add the same item twice to list', () => {
    wrapper.setProps({ equipment: [mockBasicPouch] });

    wrapper.find('span[children="Basic Pouch"]').parent().simulate('click');

    expect(addEquipment).not.toHaveBeenCalled();
  });

  it('should display filter tags', () => {
    wrapper.find('button[children="Filter List"]').simulate('click');

    expect(handleSetShowFilters).toHaveBeenCalled();
  });

  it('should filter the list to show selected criteria', () => {
    wrapper.setProps({ filteredTags: ['ALICE'] });

    expect(wrapper.find('span[children="Basic Pouch"]').exists()).toBe(true);
    expect(wrapper.find('span[children="Baseball Bat"]').exists()).toBe(false);
    expect(wrapper.find('span[children="MRE"]').exists()).toBe(false);
  });

  it('should filter by excluding equipment that do not match all filters', () => {
    wrapper.setProps({ filteredTags: ['Load Bearing', 'Chest Rig', 'Vietnam'] });

    expect(wrapper.find('span[children="Basic Pouch"]').exists()).toBe(false);
    expect(wrapper.find('span[children="MRE"]').exists()).toBe(false);
    expect(wrapper.find('span[children="Type 65 Canteen"]').exists()).toBe(false);
    expect(wrapper.find('span[children="Mock Modern Rig"]').exists()).toBe(false);
    expect(wrapper.find('span[children="Type 56 AK Chest Rig"]').exists()).toBe(true);
    expect(wrapper.find('span[children="Type 56 SKS Chest Rig"]').exists()).toBe(true);
  });

  it('should not render the clear filters button if no filters', () => {
    expect(wrapper.find('button[children="Clear Filters"]').exists()).toBe(false);
  });

  it('should be possible to clear all filters', () => {
    wrapper.setProps({ filteredTags: ['ALICE'] });

    wrapper.find('button[children="Clear Filters"]').simulate('click');

    expect(handleRemoveAllTags).toHaveBeenCalled();
  });

  it('should be possible to close the equipment modal', () => {
    wrapper.find('.close').simulate('click');

    expect(handleSetShowEquipment).toHaveBeenCalled();
  });
});
