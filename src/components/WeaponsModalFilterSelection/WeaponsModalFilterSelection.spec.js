import React from 'react';
import { shallow } from 'enzyme';
import WeaponsModalFilterSelection from './index';

const handleSetFilterByType = jest.fn();

describe('filter weapons by type', () => {
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

describe('filter weapons by caliber', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const wrapper = shallow(<WeaponsModalFilterSelection handleSetFilterByType={handleSetFilterByType} />);
  it('should have a default of all calibers', () => {
    expect(wrapper.find('.selectAllCalibersFilter').props().checked).toBe(true);
  });
  it('should select 7.62mm NATO when appropraite button clicked', () => {
    wrapper.find('.select762NATOFilter').simulate('change', { target: { value: '7.62mm NATO' } });
    expect(wrapper.find('.select762NATOFilter').props().checked).toBe(true);
  });
  it('should select 5.56mm NATO when appropraite button clicked', () => {
    wrapper.find('.select556NATOFilter').simulate('change', { target: { value: '5.56mm NATO' } });
    expect(wrapper.find('.select556NATOFilter').props().checked).toBe(true);
  });
  it('should select 7.62mm x 39 when appropraite button clicked', () => {
    wrapper.find('.select762x39Filter').simulate('change', { target: { value: '7.62 x 39mm' } });
    expect(wrapper.find('.select762x39Filter').props().checked).toBe(true);
  });
  it('should select 5.45mm x 39.5 when appropraite button clicked', () => {
    wrapper.find('.select545x39Filter').simulate('change', { target: { value: '5.45 x 39.5mm' } });
    expect(wrapper.find('.select545x39Filter').props().checked).toBe(true);
  });
  it('should select 9mm Parabellum when appropraite button clicked', () => {
    wrapper.find('.selectParabellumFilter').simulate('change', { target: { value: '9mm Parabellum' } });
    expect(wrapper.find('.selectParabellumFilter').props().checked).toBe(true);
  });
  it('should select other non-specified calibers when appropraite button clicked', () => {
    wrapper.find('.selectOtherCaliberFilter').simulate('change', { target: { value: 'Other' } });
    expect(wrapper.find('.selectOtherCaliberFilter').props().checked).toBe(true);
  });
  it('should select all caliberswhen appropraite button clicked', () => {
    wrapper.find('.selectAllCalibersFilter').simulate('change', { target: { value: 'All' } });
    expect(wrapper.find('.selectAllCalibersFilter').props().checked).toBe(true);
  });
});
