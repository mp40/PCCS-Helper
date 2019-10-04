import React from 'react';
import { shallow } from 'enzyme';
import WeaponsModalFilterSelection from './index';

const handleSetFilterByType = jest.fn();

describe('filter weapons by type', () => {
  const wrapper = shallow(<WeaponsModalFilterSelection handleSetFilterByType={handleSetFilterByType} />);
  it('should have a default of all', () => {
    expect(wrapper.find('.selectAllFilter').props().checked).toBe(true);
  });
  it('should select rifles when appropraite button clicked', () => {
    wrapper.find('.selectRiflesFilter').simulate('change', { target: { value: 'Rifles' } });
    expect(wrapper.find('.selectRiflesFilter').props().checked).toBe(true);
  });
  it('should select pistols when appropraite button clicked', () => {
    wrapper.find('.selectPistolsFilter').simulate('change', { target: { value: 'Pistols' } });
    expect(wrapper.find('.selectPistolsFilter').props().checked).toBe(true);
  });
  it('should select sub-machineguns when appropraite button clicked', () => {
    wrapper.find('.selectSMGsFilter').simulate('change', { target: { value: 'SMGs' } });
    expect(wrapper.find('.selectSMGsFilter').props().checked).toBe(true);
  });
  it('should select machineguns when appropraite button clicked', () => {
    wrapper.find('.selectMGsFilter').simulate('change', { target: { value: 'MGs' } });
    expect(wrapper.find('.selectMGsFilter').props().checked).toBe(true);
  });
  it('should select sub-machineguns when appropraite button clicked', () => {
    wrapper.find('.selectShotgunsFilter').simulate('change', { target: { value: 'Shotguns' } });
    expect(wrapper.find('.selectShotgunsFilter').props().checked).toBe(true);
  });
  it('should select sniper rifles when appropraite button clicked', () => {
    wrapper.find('.selectSniperRiflesFilter').simulate('change', { target: { value: 'Sniper Rifles' } });
    expect(wrapper.find('.selectSniperRiflesFilter').props().checked).toBe(true);
  });
  it('should select all when appropraite button clicked', () => {
    wrapper.find('.selectAllFilter').simulate('change', { target: { value: 'All' } });
    expect(wrapper.find('.selectAllFilter').props().checked).toBe(true);
  });
});

describe('filter weapons by caliber', () => {
  const wrapper = shallow(<WeaponsModalFilterSelection handleSetFilterByType={handleSetFilterByType} />);
  it('should have a default of all calibers', () => {
    expect(wrapper.find('.selectAllCalibersFilter').props().checked).toBe(true);
  });
  it('should select 7.62mm NATO when appropraite button clicked', () => {
    wrapper.find('.select762mmNATOFilter').simulate('change', { target: { value: '7.62mm NATO' } });
    expect(wrapper.find('.select762mmNATOFilter').props().checked).toBe(true);
  });
  it('should select 5.56mm NATO when appropraite button clicked', () => {
    wrapper.find('.select556mmNATOFilter').simulate('change', { target: { value: '5.56mm NATO' } });
    expect(wrapper.find('.select556mmNATOFilter').props().checked).toBe(true);
  });
  it('should select 7.62mm x 39 when appropraite button clicked', () => {
    wrapper.find('.select762x39mmFilter').simulate('change', { target: { value: '7.62 x 39mm' } });
    expect(wrapper.find('.select762x39mmFilter').props().checked).toBe(true);
  });
  it('should select 5.45mm x 39.5 when appropraite button clicked', () => {
    wrapper.find('.select545x395mmFilter').simulate('change', { target: { value: '5.45 x 39.5mm' } });
    expect(wrapper.find('.select545x395mmFilter').props().checked).toBe(true);
  });
  it('should select 9mm Parabellum when appropraite button clicked', () => {
    wrapper.find('.select9mmParabellumFilter').simulate('change', { target: { value: '9mm Parabellum' } });
    expect(wrapper.find('.select9mmParabellumFilter').props().checked).toBe(true);
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
