import React from 'react';
import { shallow } from 'enzyme';
import GrenadeData, { prepareDataForRender } from './index';

const getGrenadeData = () => ({
  name: 'L2 A2',
  qty: 1,
  l: 3.3,
  w: 0.9,
  at: 3,
  fl: 2,
  r: 16,
  data: {
    pen: [3.5, 2.4, 2.2, 1.8, 1.5, '1.0', 0.4],
    dc: [10, 2, 2, 2, 2, 1, 1],
    bshc: ['*2h', '*3', 77, 19, 8, 2, -1],
    bc: ['15k', 747, 184, 55, 28, 12, 4],
  },
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
    bwphc: ['*3H', '*4', '*4', 24, 10, 5, 3, 2, 1],
    pdBody: [48, 43, 40, 35, 32, 29, 27, 25, 22],
    pdLimb: [9, 8, 7, 7, 6, 6, 6, 5, 5],
    pd0: ['10K', 450, 20, 1],
    pd4: ['76K', '34H', 150, 8],
    pd7: ['57T', '25K', '11H', 56],
  },
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
  data: null,
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
  data: null,
});

const getFlashBang = () => ({
  name: 'Flash Bang',
  qty: 1,
  l: 5,
  w: 0.6,
  at: 3,
  fl: 1,
  r: 20,
  data: null,
});


describe('grenade data table', () => {
  const wrapper = shallow(<GrenadeData grenade={getGrenadeData()} />);
  describe('physical data', () => {
    it('should render length value', () => {
      expect(wrapper.find('.grenadeDataRowOne').text()).toContain('L3.3');
    });
    it('should render weight value', () => {
      expect(wrapper.find('.grenadeDataRowTwo').text()).toContain('W0.9');
    });
    it('should render arm time value', () => {
      expect(wrapper.find('.grenadeDataRowThree').text()).toContain('AT3');
    });
    it('should render fuse length value', () => {
      expect(wrapper.find('.grenadeDataRowFour').text()).toContain('FL2');
    });
    it('should render range value', () => {
      expect(wrapper.find('.grenadeDataRowFive').text()).toContain('R16');
    });
  });
  describe('explosive data', () => {
    it('should render PEN data', () => {
      expect(wrapper.find('.grenadeDataRowOne').text()).toContain('PEN3.52.42.21.81.51.00.4');
    });
    it('should render DC data', () => {
      expect(wrapper.find('.grenadeDataRowTwo').text()).toContain('DC10222211');
    });
    it('should render BSHC data', () => {
      expect(wrapper.find('.grenadeDataRowThree').text()).toContain('BSHC*2h*3771982-1');
    });
    it('should render BC data', () => {
      expect(wrapper.find('.grenadeDataRowFour').text()).toContain('BC15k7471845528124');
    });
  });
  describe('helpers', () => {
    it('should return a 2D array for rendering grenade data', () => {
      const result = prepareDataForRender(getGrenadeData());
      expect(result[0]).toEqual(['L', 3.3, 'PEN', [3.5, 2.4, 2.2, 1.8, 1.5, '1.0', 0.4]]);
      expect(result[1]).toEqual(['W', 0.9, 'DC', [10, 2, 2, 2, 2, 1, 1]]);
      expect(result[2]).toEqual(['AT', 3, 'BSHC', ['*2h', '*3', 77, 19, 8, 2, -1]]);
      expect(result[3]).toEqual(['FL', 2, 'BC', ['15k', 747, 184, 55, 28, 12, 4]]);
      expect(result[4]).toEqual(['R', 16, undefined, ['', '', '', '', '', '', '']]);
    });
  });
  describe('non-standard grenades', () => {
    // const wrap = shallow(<GrenadeData grenade={getWilliePeteData()} />);
    it('should render M15 WP grenades', () => {
      const result = prepareDataForRender(getWilliePeteData());
      expect(result[0]).toEqual(['L', 6, 'BWPHC', ['*3H', '*4', '*4', 24, 10, 5, 3, 2, 1]]);
      expect(result[1]).toEqual(['W', 1.9, 'PD Body', [48, 43, 40, 35, 32, 29, 27, 25, 22]]);
      expect(result[2]).toEqual(['AT', 4, 'PD Limb', [9, 8, 7, 7, 6, 6, 6, 5, 5]]);
      expect(result[3]).toEqual(['FL', 2, 'PDs TS 0', ['10K', 450, 20, 1]]);
      expect(result[4]).toEqual(['R', 11, 'PDs TS 4', ['76K', '34H', 150, 8]]);
      expect(result[5]).toEqual(['Smk', 4, 'PDs TS 7', ['57T', '25K', '11H', 56]]);
      expect(result[6]).toEqual(['Dur', 3, undefined, ['', '', '', '']]);
    });
    it('should render correct range brackets for WP grenades', () => {
      const wrapWP = shallow(<GrenadeData grenade={getWilliePeteData()} />);
      expect(wrapWP.find('thead').text()).toBe('C01234568');
    });
    it('should render smoke grenades', () => {
      const result = prepareDataForRender(getSmokeData());
      expect(result[0]).toEqual(['L', 5.7, undefined, ['', '', '', '', '', '', '']]);
      expect(result[1]).toEqual(['W', 1.5, undefined, ['', '', '', '', '', '', '']]);
      expect(result[2]).toEqual(['AT', 4, undefined, ['', '', '', '', '', '', '']]);
      expect(result[3]).toEqual(['FL', 1, undefined, ['', '', '', '', '', '', '']]);
      expect(result[4]).toEqual(['R', 12, undefined, ['', '', '', '', '', '', '']]);
      expect(result[5]).toEqual(['Smk', 3, undefined, ['', '', '', '', '', '', '']]);
      expect(result[6]).toEqual(['Dur', 60, undefined, ['', '', '', '', '', '', '']]);
    });
    it('should render see rules message instead of range brackets for smoke', () => {
      const wrapSmoke = shallow(<GrenadeData grenade={getSmokeData()} />);
      expect(wrapSmoke.find('thead').text()).toContain('See Rules');
    });
    it('should render tear gas grenades', () => {
      const result = prepareDataForRender(getTearGasData());
      expect(result[0]).toEqual(['L', 5.7, undefined, ['', '', '', '', '', '', '']]);
      expect(result[1]).toEqual(['W', 1.2, undefined, ['', '', '', '', '', '', '']]);
      expect(result[2]).toEqual(['AT', 4, undefined, ['', '', '', '', '', '', '']]);
      expect(result[3]).toEqual(['FL', 1, undefined, ['', '', '', '', '', '', '']]);
      expect(result[4]).toEqual(['R', 14, undefined, ['', '', '', '', '', '', '']]);
      expect(result[5]).toEqual(['SP', 3, undefined, ['', '', '', '', '', '', '']]);
      expect(result[6]).toEqual(['Smk', 3, undefined, ['', '', '', '', '', '', '']]);
      expect(result[7]).toEqual(['Dur', 12, undefined, ['', '', '', '', '', '', '']]);
    });
    it('should render see rules message instead of range brackets for tear gas', () => {
      const wrapGas = shallow(<GrenadeData grenade={getTearGasData()} />);
      expect(wrapGas.find('thead').text()).toContain('See Rules');
    });
    it('should render flash bang grenades', () => {
      const result = prepareDataForRender(getFlashBang());
      expect(result[0]).toEqual(['L', 5, undefined, ['', '', '', '', '', '', '']]);
      expect(result[1]).toEqual(['W', 0.6, undefined, ['', '', '', '', '', '', '']]);
      expect(result[2]).toEqual(['AT', 3, undefined, ['', '', '', '', '', '', '']]);
      expect(result[3]).toEqual(['FL', 1, undefined, ['', '', '', '', '', '', '']]);
      expect(result[4]).toEqual(['R', 20, undefined, ['', '', '', '', '', '', '']]);
    });
    it('should render correct hedings for flash bangs', () => {
      const wrapFlash = shallow(<GrenadeData grenade={getFlashBang()} />);
      expect(wrapFlash.find('thead').text()).toContain('See Rules');
    });
  });
});
