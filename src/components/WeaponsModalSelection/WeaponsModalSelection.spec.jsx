import React from 'react';
import { shallow } from 'enzyme';

import WeaponsModalSelection from './component';

import * as data from './data';

describe('Firearms selection', () => {
  let wrapper;

  const addFirearm = jest.fn();
  const toggleOffWeaponCardViews = jest.fn();

  const firearms = [{ name: 'RPD' }];

  beforeEach(() => {
    data.firearmLists = jest.fn().mockImplementation(() => (['M16', 'FN Mk 1', 'RPD']));

    wrapper = shallow(
      <WeaponsModalSelection
        firearms={firearms}
        addFirearm={addFirearm}
        toggleOffWeaponCardViews={toggleOffWeaponCardViews}
      />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render firearms list', () => {
    expect(wrapper.find('.firearmEntry').length).toBe(data.firearmLists().length);
  });

  it('should render firearm name and weight', () => {
    const m16Entry = wrapper.find('.firearmEntry').at(0);

    expect(m16Entry.text()).toBe('M168.7 lbs');
  });

  it('should be possible to select weapon', () => {
    wrapper.find('span[children="M16"]').parent().simulate('click');

    expect(addFirearm).toHaveBeenCalledWith('M16');
  });

  it('should be close modal when weapon selected', () => {
    wrapper.find('span[children="M16"]').parent().simulate('click');

    expect(toggleOffWeaponCardViews).toHaveBeenCalledWith('showFirearms');
  });

  it('should not be possible to select weapon if has been previously selected', () => {
    wrapper.find('span[children="RPD"]').parent().simulate('click');

    expect(addFirearm).not.toHaveBeenCalled();
  });

  it('should be possible to view firearm stats', () => {
    expect(wrapper.find('FirearmInspection').exists()).toBe(false);

    wrapper.find('.contents').find('button').at(0).simulate('click');

    expect(wrapper.find('FirearmInspection').exists()).toBe(true);
  });

  it('should be possible to close modal', () => {
    wrapper.find('.close').simulate('click');

    expect(toggleOffWeaponCardViews).toHaveBeenCalledWith('showFirearms');
  });
});

describe('Toggling Filter Modal', () => {
  let wrapper;

  const addFirearm = jest.fn();
  const toggleOffWeaponCardViews = jest.fn();

  const firearms = [{ name: 'RPD' }];

  beforeEach(() => {
    data.firearmLists = jest.fn().mockImplementation(() => (['M16', 'FN Mk 1', 'RPD']));

    wrapper = shallow(
      <WeaponsModalSelection
        firearms={firearms}
        addFirearm={addFirearm}
        toggleOffWeaponCardViews={toggleOffWeaponCardViews}
      />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should open the filter modal when Filters button clicked', () => {
    wrapper.find('button[children="Filters"]').simulate('click');

    expect(wrapper.find('FirearmFilter').exists()).toBe(true);
  });

  it('should filter the firearms list', () => {
    data.filterCalibersFromType = jest.fn().mockImplementation(() => (['M16']));

    wrapper.find('button[children="Filters"]').simulate('click');
    wrapper.find('FirearmFilter').props().handleSetFilterByType('Rifles', 'All');

    expect(wrapper.find('.firearmEntry').length).toBe(1);
    expect(wrapper.find('.firearmEntry').text()).toBe('M168.7 lbs');
  });

  it('should close the filter modal when Filters button clicked again', () => {
    wrapper.find('button[children="Filters"]').simulate('click');

    wrapper.find('button[children="Filters"]').simulate('click');
    expect(wrapper.find('FirearmFilter').exists()).toBe(false);
  });
});
