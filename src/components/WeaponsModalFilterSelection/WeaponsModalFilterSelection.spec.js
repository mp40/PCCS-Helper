import React from 'react';
import { shallow } from 'enzyme';
import WeaponsModalFilterSelection from './index';

describe('filter weapons by type modal', () => {
  const spyOnMethod = jest.spyOn(WeaponsModalFilterSelection.prototype, 'handleUpdateFilter');
  // eslint-disable-next-line react/jsx-filename-extension
  const wrapper = shallow(<WeaponsModalFilterSelection />);
  it('should have a default of all', () => {
    expect(wrapper.state().filterByType).toBe('All');
  });
  it('should select rifles when appropraite button clicked', () => {
    wrapper.find('.selectRifleFilter').simulate('change', { target: { value: 'Rifles' } });
    expect(spyOnMethod).toHaveBeenCalled();
    expect(wrapper.state().filterByType).toBe('Rifles');
  });
  it('should select pistols when appropraite button clicked', () => {
    wrapper.find('.selectPistolFilter').simulate('change', { target: { value: 'Pistols' } });
    expect(spyOnMethod).toHaveBeenCalled();
    expect(wrapper.state().filterByType).toBe('Pistols');
  });
  it('should select sub-machineguns when appropraite button clicked', () => {
    wrapper.find('.selectSMGFilter').simulate('change', { target: { value: 'SMGs' } });
    expect(spyOnMethod).toHaveBeenCalled();
    expect(wrapper.state().filterByType).toBe('SMGs');
  });
  it('should select machineguns when appropraite button clicked', () => {
    wrapper.find('.selectMGFilter').simulate('change', { target: { value: 'MGs' } });
    expect(spyOnMethod).toHaveBeenCalled();
    expect(wrapper.state().filterByType).toBe('MGs');
  });
  it('should select sub-machineguns when appropraite button clicked', () => {
    wrapper.find('.selectShotgunFilter').simulate('change', { target: { value: 'Shotguns' } });
    expect(spyOnMethod).toHaveBeenCalled();
    expect(wrapper.state().filterByType).toBe('Shotguns');
  });
  it('should select machineguns when appropraite button clicked', () => {
    wrapper.find('.selectSniperRifleFilter').simulate('change', { target: { value: 'Sniper Rifles' } });
    expect(spyOnMethod).toHaveBeenCalled();
    expect(wrapper.state().filterByType).toBe('Sniper Rifles');
  });
  it('should select all when appropraite button clicked', () => {
    wrapper.find('.selectAllFilter').simulate('change', { target: { value: 'All' } });
    expect(spyOnMethod).toHaveBeenCalled();
    expect(wrapper.state().filterByType).toBe('All');
  });
});
