import React from 'react';
import { mount } from 'enzyme';
import WeaponsCardWeaponStats, { standardRangeBrackets, shotgunRangeBrackets } from './index';
import { testM1911A1, testM203, testFAMAS, testRemington } from '../../helpers/testHelpers';

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
    it('should render the table header correctly', () => {
      const expectedHeader = `DataAim Time${standardRangeBrackets.join('')}`;
      expect(wrapper.find('.WeaponStatHeader').text()).toEqual(expectedHeader);
    });
    it('should render the first line correctly', () => {
      const expectedLineOne = 'L91-18FMJPEN1.61.51.21.00.80.30.20.1';
      expect(lineOne(wrapper).text()).toEqual(expectedLineOne);
    });
    it('should render the second line correctly', () => {
      const expectedLineTwo = 'W32-11DC33211111';
      expect(lineTwo(wrapper).text()).toEqual(expectedLineTwo);
    });
    it('should render the third line correctly', () => {
      const expectedLineThree = '3-10';
      expect(lineThree(wrapper).text()).toEqual(expectedLineThree);
    });
    it('should render the fourth line correctly', () => {
      const expectedLineFour = 'RT44-9JHPPEN1.51.41.20.90.70.30.10.1';
      expect(lineFour(wrapper).text()).toEqual(expectedLineFour);
    });
    it('should render the fifth line correctly', () => {
      const expectedLineFive = 'ROF*5-8DC44321111';
      expect(lineFive(wrapper).text()).toEqual(expectedLineFive);
    });
    it('should render the sixth line correctly', () => {
      const expectedLineSix = '6-7';
      expect(lineSix(wrapper).text()).toEqual(expectedLineSix);
    });
    it('should render the seventh line correctly', () => {
      const expectedLineSeven = 'Cap7APPEN2.22.11.81.41.10.50.20.1';
      expect(lineSeven(wrapper).text()).toEqual(expectedLineSeven);
    });
    it('should render the eighth line correctly', () => {
      const expectedLineEight = 'AW0.7DC33211111';
      expect(lineEight(wrapper).text()).toEqual(expectedLineEight);
    });
    it('should render the ninth line correctly', () => {
      const expectedLineNine = 'Mag';
      expect(lineNine(wrapper).text()).toEqual(expectedLineNine);
    });
    it('should render the tenth line correctly', () => {
      const expectedLineTen = 'KD5BA453627201550-4';
      expect(lineTen(wrapper).text()).toEqual(expectedLineTen);
    });
    it('should render the eleventh line correctly', () => {
      const expectedLineEleven = 'SAB5TOF12358193145';
      expect(lineEleven(wrapper).text()).toEqual(expectedLineEleven);
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
      const wrapper = mount(<WeaponsCardWeaponStats gunObj={testM203()} />);
      it('should not render JHP data ', () => {
        expect(lineFour(wrapper).text()).toEqual('RT84-8');
        expect(lineFive(wrapper).text()).toEqual('ROF*75-6');
      });
      it('should not render AP tags', () => {
        expect(lineSeven(wrapper).text()).toEqual('Cap307-4');
        expect(lineEight(wrapper).text()).toEqual('AW18-3');
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
        expect(lineSeven(wrapper).text()).toEqual('Cap77-312BPHCsolid*11*10*9*7*5*2*162358');
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
