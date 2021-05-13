import { filterCalibersFromType } from './data';

import * as data from '../../data/firearms';

const mockM16 = () => ({
  name: 'M16',
  calibre: '5.56mm NATO',
});

const mockIthaca = () => ({
  name: 'Ithaca LAPD',
  calibre: '12 Gauge',
});

const mockM40 = () => ({
  name: 'M40A1',
  calibre: '7.62mm NATO',
});

const mockRPD = () => ({
  name: 'RPD',
  calibre: '7.62 x 39mm',
});

const mockAKS = () => ({
  name: 'AKS-74U',
  calibre: '5.45 x 39.5mm',
});

const mockFN = () => ({
  name: 'FN Mk 1',
  calibre: '9mm Parabellum',
});

const mockMP5SD = () => ({
  name: 'MP5 SD3',
  calibre: '9mm Parabellum',
});

data.rifles = jest.fn().mockImplementation(() => [mockM16()]);
data.pistols = jest.fn().mockImplementation(() => [mockFN()]);
data.smgs = jest.fn().mockImplementation(() => [mockAKS(), mockMP5SD()]);
data.mgs = jest.fn().mockImplementation(() => [mockRPD()]);
data.shotguns = jest.fn().mockImplementation(() => [mockIthaca()]);
data.sniperRifles = jest.fn().mockImplementation(() => [mockM40()]);

describe('Filtering calibers and weapon types', () => {
  describe('filter by firearm', () => {
    it('should return the rifle list', () => {
      expect(filterCalibersFromType('Rifles', 'All Calibres')).toEqual([mockM16()]);
    });

    it('should return the pistol list', () => {
      expect(filterCalibersFromType('Pistols', 'All Calibres')).toEqual([mockFN()]);
    });

    it('should return the smg list', () => {
      expect(filterCalibersFromType('SMGs', 'All Calibres')).toEqual([mockAKS(), mockMP5SD()]);
    });

    it('should return the mg list', () => {
      expect(filterCalibersFromType('MGs', 'All Calibres')).toEqual([mockRPD()]);
    });

    it('should return the sniper rifle list', () => {
      expect(filterCalibersFromType('Sniper Rifles', 'All Calibres')).toEqual([mockM40()]);
    });

    it('should return the shotgun list', () => {
      expect(filterCalibersFromType('Shotguns', 'All Calibres')).toEqual([mockIthaca()]);
    });
  });

  describe('filtering by calibre', () => {
    it('should return the 7.62 NATO weapons', () => {
      expect(filterCalibersFromType('All', '7.62mm NATO')).toEqual([mockM40()]);
    });

    it('should return the 5.56 NATO weapons', () => {
      expect(filterCalibersFromType('All', '5.56mm NATO')).toEqual([mockM16()]);
    });

    it('should return the 7.62 x 39 weapons', () => {
      expect(filterCalibersFromType('All', '7.62 x 39mm')).toEqual([mockRPD()]);
    });

    it('should return the 5.45 x 39.5 weapons', () => {
      expect(filterCalibersFromType('All', '5.45 x 39.5mm')).toEqual([mockAKS()]);
    });

    it('should return the 9mm Parabellum weapons', () => {
      expect(filterCalibersFromType('All', '9mm Parabellum')).toEqual([mockFN(), mockMP5SD()]);
    });

    it('should return other calibre weapons', () => {
      expect(filterCalibersFromType('All', 'Other')).toEqual([mockIthaca()]);
    });
  });

  describe('filtering by both type and calibre', () => {
    it('should filter by both type and calibre', () => {
      expect(filterCalibersFromType('SMGs', '9mm Parabellum')).toEqual([mockMP5SD()]);
    });
  });
});
