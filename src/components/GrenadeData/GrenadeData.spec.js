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

describe('grenade data table', () => {
  // eslint-disable-next-line react/jsx-filename-extension
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
      expect(result[4]).toEqual(['R', 16, undefined, []]);
    });
  });
});
