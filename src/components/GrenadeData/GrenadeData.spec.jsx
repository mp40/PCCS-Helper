import React from 'react';
import { shallow } from 'enzyme';
import GrenadeData from './index';

const getGrenadeData = () => ({
  name: 'L2 A2',
  qty: 1,
  length: 3.3,
  weight: 0.9,
  at: 3,
  fl: 2,
  r: 16,
  data: {
    pen: ['PEN', 3.5, 2.4, 2.2, 1.8, 1.5, '1.0', 0.4],
    dc: ['DC', 10, 2, 2, 2, 2, 1, 1],
    bshc: ['BSHC', '*2h', '*3', 77, 19, 8, 2, -1],
    bc: ['BC', '15k', 747, 184, 55, 28, 12, 4],
  },
  heading: 'standard',
});

const getWilliePeteData = () => ({
  name: 'M15 WP',
  qty: 1,
  l: 6,
  w: 1.9,
  at: 4,
  fl: 2,
  r: 11,
  smk: 4,
  dur: 3,
  data: {
    bwphc: ['BWPHC', '*3H', '*4', '*4', 24, 10, 5, 3, 2, 1],
    pdBody: ['PD Body', 48, 43, 40, 35, 32, 29, 27, 25, 22],
    pdLimb: ['PD Limb', 9, 8, 7, 7, 6, 6, 6, 5, 5],
    pd0: ['PDs TS 0', '10K', 450, 20, 1, '', '', '', '', ''],
    pd4: ['PDs TS 4', '76K', '34H', 150, 8, '', '', '', '', ''],
    pd7: ['PDs TS 7', '57T', '25K', '11H', 56, '', '', '', '', ''],
  },
  heading: 'williePete',
});

const getSmokeData = () => ({
  name: 'Smoke',
  qty: 1,
  l: 5.7,
  w: 1.5,
  at: 4,
  fl: 1,
  r: 12,
  smk: 3,
  dur: 60,
  data: {},
  heading: 'seeRuleBook',
});

const getTearGasData = () => ({
  name: 'Tear Gas',
  qty: 1,
  l: 5.7,
  w: 1.2,
  at: 4,
  fl: 1,
  r: 14,
  sp: 3,
  smk: 3,
  dur: 12,
  data: {},
  heading: 'seeRuleBook',
});

const getFlashBang = () => ({
  name: 'Flash Bang',
  qty: 1,
  l: 5,
  w: 0.6,
  at: 3,
  fl: 1,
  r: 20,
  data: {},
  heading: 'seeRuleBook',
});


describe('grenade data table', () => {
  const wrapper = shallow(<GrenadeData grenade={getGrenadeData()} />);
  describe('physical data', () => {
    it('should render length value', () => {
      expect(wrapper.find('.grenadeTableBody').childAt(0).text()).toContain('L3.3');
    });
    it('should render weight value', () => {
      expect(wrapper.find('.grenadeTableBody').childAt(1).text()).toContain('W0.9');
    });
    it('should render arm time value', () => {
      expect(wrapper.find('.grenadeTableBody').childAt(2).text()).toContain('AT3');
    });
    it('should render fuse length value', () => {
      expect(wrapper.find('.grenadeTableBody').childAt(3).text()).toContain('FL2');
    });
    it('should render range value', () => {
      expect(wrapper.find('.grenadeTableBody').childAt(4).text()).toContain('R16');
    });
  });
  describe('explosive data', () => {
    it('should render PEN data', () => {
      expect(wrapper.find('.grenadeTableBody').childAt(0).text()).toContain('PEN3.52.42.21.81.51.00.4');
    });
    it('should render DC data', () => {
      expect(wrapper.find('.grenadeTableBody').childAt(1).text()).toContain('DC10222211');
    });
    it('should render BSHC data', () => {
      expect(wrapper.find('.grenadeTableBody').childAt(2).text()).toContain('BSHC*2h*3771982-1');
    });
    it('should render BC data', () => {
      expect(wrapper.find('.grenadeTableBody').childAt(3).text()).toContain('BC15k7471845528124');
    });
  });
  describe('non-standard headings', () => {
    it('should render correct range brackets for WP grenades', () => {
      const wrapWP = shallow(<GrenadeData grenade={getWilliePeteData()} />);
      expect(wrapWP.find('thead').text()).toBe('C01234568');
    });
    it('should render see rules message instead of range brackets for smoke', () => {
      const wrapSmoke = shallow(<GrenadeData grenade={getSmokeData()} />);
      expect(wrapSmoke.find('thead').text()).toContain('See Rules');
    });
    it('should render see rules message instead of range brackets for tear gas', () => {
      const wrapGas = shallow(<GrenadeData grenade={getTearGasData()} />);
      expect(wrapGas.find('thead').text()).toContain('See Rules');
    });
    it('should render correct hedings for flash bangs', () => {
      const wrapFlash = shallow(<GrenadeData grenade={getFlashBang()} />);
      expect(wrapFlash.find('thead').text()).toContain('See Rules');
    });
  });
});
