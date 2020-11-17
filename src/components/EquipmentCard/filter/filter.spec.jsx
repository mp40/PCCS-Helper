import React from 'react';
import { shallow } from 'enzyme';

import EquipmentFilter from './index';

describe('equipment filter modal', () => {
  const handleTags = jest.fn();
  const handleSetShowFilters = jest.fn();
  const filteredTags = ['ALICE'];

  const wrapper = shallow(<EquipmentFilter
    handleTags={handleTags}
    handleSetShowFilters={handleSetShowFilters}
    filteredTags={filteredTags}
  />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should make selected filters bold', () => {
    expect(wrapper.find('div[children="ALICE"]').hasClass('selected')).toBe(true);
  });

  it('should be possible to select filter', () => {
    wrapper.find('div[children="Tools"]').simulate('click');

    expect(handleTags).toHaveBeenCalledWith('Tools');
  });

  it('should be possible to close modal', () => {
    wrapper.find('button').simulate('click');

    expect(handleSetShowFilters).toHaveBeenCalled();
  });
});
