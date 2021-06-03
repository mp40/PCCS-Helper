import { filterCalibersFromType } from './data';

import * as data from '../../data/firearms';

data.riflesList = jest.fn().mockImplementation(() => ['M16']);
data.pistolsList = jest.fn().mockImplementation(() => ['FN Mk 1']);
data.smgsList = jest.fn().mockImplementation(() => ['AKS-74U', 'MP5 SD3']);
data.mgsList = jest.fn().mockImplementation(() => ['RPD']);
data.shotgunsList = jest.fn().mockImplementation(() => ['Ithaca LAPD']);
data.sniperRiflesList = jest.fn().mockImplementation(() => ['M40A1']);

describe('Filtering calibers and weapon types', () => {
  describe('filter by firearm', () => {
    it('should return the rifle list', () => {
      expect(filterCalibersFromType('Rifles', 'All Calibres')).toEqual(['M16']);
    });

    it('should return the pistol list', () => {
      expect(filterCalibersFromType('Pistols', 'All Calibres')).toEqual(['FN Mk 1']);
    });

    it('should return the smg list', () => {
      expect(filterCalibersFromType('SMGs', 'All Calibres')).toEqual(['AKS-74U', 'MP5 SD3']);
    });

    it('should return the mg list', () => {
      expect(filterCalibersFromType('MGs', 'All Calibres')).toEqual(['RPD']);
    });

    it('should return the sniper rifle list', () => {
      expect(filterCalibersFromType('Sniper Rifles', 'All Calibres')).toEqual(['M40A1']);
    });

    it('should return the shotgun list', () => {
      expect(filterCalibersFromType('Shotguns', 'All Calibres')).toEqual(['Ithaca LAPD']);
    });
  });

  describe('filtering by calibre', () => {
    it('should return the 7.62 NATO weapons', () => {
      expect(filterCalibersFromType('All', '7.62mm NATO')).toEqual(['M40A1']);
    });

    it('should return the 5.56 NATO weapons', () => {
      expect(filterCalibersFromType('All', '5.56mm NATO')).toEqual(['M16']);
    });

    it('should return the 7.62 x 39 weapons', () => {
      expect(filterCalibersFromType('All', '7.62 x 39mm')).toEqual(['RPD']);
    });

    it('should return the 5.45 x 39.5 weapons', () => {
      expect(filterCalibersFromType('All', '5.45 x 39.5mm')).toEqual(['AKS-74U']);
    });

    it('should return the 9mm Parabellum weapons', () => {
      expect(filterCalibersFromType('All', '9mm Parabellum')).toEqual(['FN Mk 1', 'MP5 SD3']);
    });

    it('should return other calibre weapons', () => {
      expect(filterCalibersFromType('All', 'Other')).toEqual(['Ithaca LAPD']);
    });
  });

  describe('filtering by both type and calibre', () => {
    it('should filter by both type and calibre', () => {
      expect(filterCalibersFromType('SMGs', '9mm Parabellum')).toEqual(['MP5 SD3']);
    });
  });
});
