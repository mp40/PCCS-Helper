import React from 'react';
import { mount } from 'enzyme';
import WeaponsCardWeaponStats, { standardRangeBrackets, shotgunRangeBrackets } from './index';
import { testM1911A1, testM16WithoutJhpAp, testFAMAS, testRemington } from '../../helpers/testHelpers';

describe('<WeaponsCardWeaponStats/> component', () => {
  const lineOne = wrapper => wrapper.find('#GunTableLine0');
  const lineTwo = wrapper => wrapper.find('#GunTableLine1');
  const lineThree = wrapper => wrapper.find('#GunTableLine2');
  const lineFour = wrapper => wrapper.find('#GunTableLine3');
  const lineFive = wrapper => wrapper.find('#GunTableLine4');
  const lineSix = wrapper => wrapper.find('#GunTableLine5');
  const lineSeven = wrapper => wrapper.find('#GunTableLine6');
  const lineEight = wrapper => wrapper.find('#GunTableLine7');
  const lineNine = wrapper => wrapper.find('#GunTableLine8');
  const lineTen = wrapper => wrapper.find('#GunTableLine9');
  const lineEleven = wrapper => wrapper.find('#GunTableLine10');
  describe('rendering standard data', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = mount(<WeaponsCardWeaponStats gunObj={testM1911A1()} />);
    const lineToTest = [
      wrapper.find('.WeaponStatHeader').text(),
      lineOne(wrapper).text(),
      lineTwo(wrapper).text(),
      lineThree(wrapper).text(),
      lineFour(wrapper).text(),
      lineFive(wrapper).text(),
      lineSix(wrapper).text(),
      lineSeven(wrapper).text(),
      lineEight(wrapper).text(),
      lineNine(wrapper).text(),
      lineTen(wrapper).text(),
      lineEleven(wrapper).text(),
    ];
    const expectedResult = [
      `DataAim Time${standardRangeBrackets.join('')}`,
      'L91-18FMJPEN1.61.51.21.00.80.30.20.1',
      'W32-11DC33211111',
      '3-10',
      'RT44-9JHPPEN1.51.41.20.90.70.30.10.1',
      'ROF*5-8DC44321111',
      '6-7',
      'Cap7APPEN2.22.11.81.41.10.50.20.1',
      'AW0.7DC33211111',
      'Mag',
      'KD5BA453627201550-4',
      'SAB5TOF12358193145',
    ];
    it('should render each line of the table to render correctly', () => {
      for (let i = 0; i < lineToTest.length; i += 1) {
        expect(lineToTest[i]).toEqual(expectedResult[i]);
      }
    });
  });
  describe('automatic weapons', () => {
    const wrapper = mount(<WeaponsCardWeaponStats gunObj={testFAMAS()} />);
    it('should render the minimum arc values', () => {
      expect(lineNine(wrapper).text()).toEqual('Mag9-1MA0.40.823481216');
    });
    it('should render the three round burst values', () => {
      expect(lineEight(wrapper).text()).toEqual('AW18-23RB-6-14810151820');
    });
  });
  describe('edge cases', () => {
    describe('no data for JHP/AP', () => {
      const wrapper = mount(<WeaponsCardWeaponStats gunObj={testM16WithoutJhpAp()} />);
      it('should not render JHP data ', () => {
        expect(lineFour(wrapper).text()).toEqual('RT84-7');
        expect(lineFive(wrapper).text()).toEqual('ROF*75-6');
      });
      it('should not render AP tags', () => {
        expect(lineSeven(wrapper).text()).toEqual('Cap207-4');
        expect(lineEight(wrapper).text()).toEqual('AW0.78-3');
      });
    });
    describe('shotguns', () => {
      const wrapper = mount(<WeaponsCardWeaponStats gunObj={testRemington()} />);
      it('should render the correct range brackets for shotguns in the header', () => {
        const expectedShotgunHeader = `DataAim Time${shotgunRangeBrackets.join('')}`;
        expect(wrapper.find('.WeaponStatHeader').text()).toEqual(expectedShotgunHeader);
      });
      it('should render SALM data', () => {
        expect(lineSix(wrapper).text()).toEqual('6-4SALM-14-9-4-11257101217');
      });
      it('should render the Base Pellet Hit Chance data', () => {
        expect(lineSeven(wrapper).text()).toEqual('Cap77-312BPHC*11*10*9*7*5*2*162358');
      });
      it('should render the Pellet Radius data', () => {
        expect(lineEight(wrapper).text()).toEqual('AW0.138-2PR.0.0.00.10.10.10.10.20.30.40.7');
      });
      it('should not render "(00)" or "12" after "Shot"', () => {
        expect(lineFour(wrapper).childAt(2).text()).not.toContain('(00)');
        expect(lineFour(wrapper).childAt(2).text()).not.toContain('12');
      });
      it('should render "(00)" before the DC', () => {
        expect(lineFive(wrapper).childAt(2).text()).toContain('(00)');
      });
      it('should render "12" before "BPHC"', () => {
        expect(lineSeven(wrapper).childAt(2).text()).toContain('12');
      });
    });
  });
});
