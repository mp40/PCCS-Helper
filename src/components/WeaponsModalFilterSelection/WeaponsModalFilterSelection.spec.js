import React from 'react';
import { shallow } from 'enzyme';
import WeaponsModalFilterSelection from './index';

const handleSetFilterByType = jest.fn();

describe('filter weapons by type modal', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const wrapper = shallow(<WeaponsModalFilterSelection handleSetFilterByType={handleSetFilterByType} />);
  it('should have a default of all', () => {
    expect(wrapper.find('.selectAllFilter').props().checked).toBe(true);
  });
  it('should select rifles when appropraite button clicked', () => {
    wrapper.find('.selectRifleFilter').simulate('change', { target: { value: 'Rifles' } });
    expect(wrapper.find('.selectRifleFilter').props().checked).toBe(true);
  });
  it('should select pistols when appropraite button clicked', () => {
    wrapper.find('.selectPistolFilter').simulate('change', { target: { value: 'Pistols' } });
    expect(wrapper.find('.selectPistolFilter').props().checked).toBe(true);
  });
  it('should select sub-machineguns when appropraite button clicked', () => {
    wrapper.find('.selectSMGFilter').simulate('change', { target: { value: 'SMGs' } });
    expect(wrapper.find('.selectSMGFilter').props().checked).toBe(true);
  });
  it('should select machineguns when appropraite button clicked', () => {
    wrapper.find('.selectMGFilter').simulate('change', { target: { value: 'MGs' } });
    expect(wrapper.find('.selectMGFilter').props().checked).toBe(true);
  });
  it('should select sub-machineguns when appropraite button clicked', () => {
    wrapper.find('.selectShotgunFilter').simulate('change', { target: { value: 'Shotguns' } });
    expect(wrapper.find('.selectShotgunFilter').props().checked).toBe(true);
  });
  it('should select machineguns when appropraite button clicked', () => {
    wrapper.find('.selectSniperRifleFilter').simulate('change', { target: { value: 'Sniper Rifles' } });
    expect(wrapper.find('.selectSniperRifleFilter').props().checked).toBe(true);
  });
  it('should select all when appropraite button clicked', () => {
    wrapper.find('.selectAllFilter').simulate('change', { target: { value: 'All' } });
    expect(wrapper.find('.selectAllFilter').props().checked).toBe(true);
  });
});
