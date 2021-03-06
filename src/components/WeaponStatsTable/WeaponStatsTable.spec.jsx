import React from 'react';
import { mount, shallow } from 'enzyme';
import WeaponStatsTable, { findSkillLevelFromSAL } from './index';

import { firearms } from '../../data/firearms';

const testFAMAS = () => ({ ...firearms.FAMAS });
const testM16 = () => ({ ...firearms.M16 });
const testM1911A1 = () => ({ ...firearms.M1911A1, weight: 3 });
const testRemington = () => ({ ...firearms['Remington M870'] });

describe('<WeaponStatsTable/> component', () => {
  const lineOne = (wrapper) => wrapper.find('.gunTableLine').at(0);
  const lineTwo = (wrapper) => wrapper.find('.gunTableLine').at(1);
  const lineThree = (wrapper) => wrapper.find('.gunTableLine').at(2);
  const lineFour = (wrapper) => wrapper.find('.gunTableLine').at(3);
  const lineFive = (wrapper) => wrapper.find('.gunTableLine').at(4);
  const lineSix = (wrapper) => wrapper.find('.gunTableLine').at(5);
  const lineSeven = (wrapper) => wrapper.find('.gunTableLine').at(6);
  const lineEight = (wrapper) => wrapper.find('.gunTableLine').at(7);
  const lineNine = (wrapper) => wrapper.find('.gunTableLine').at(8);
  const lineTen = (wrapper) => wrapper.find('.gunTableLine').at(9);
  const lineEleven = (wrapper) => wrapper.find('.gunTableLine').at(10);

  describe('default props for firearm', () => {
    it('should provide an "empty" firearm object if no firearm selected', () => {
      const wrapper = mount(<WeaponStatsTable weapon={undefined} />);

      expect(wrapper.props().weapon).not.toBe(undefined);
    });
  });

  describe('the table', () => {
    it('should render the table header', () => {
      const wrapper = shallow(<WeaponStatsTable weapon={undefined} />).find('TableHead').dive();
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('Data');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('Aim Time');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('10');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('20');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('40');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('70');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('100');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('200');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('300');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('400');
    });
  });

  describe('rendering standard firearm data', () => {
    const wrapper = mount(<WeaponStatsTable weapon={testM1911A1()} />);

    describe('the physcial data', () => {
      it('should render the length', () => {
        expect(lineOne(wrapper).childAt(0).text()).toContain('L9');
      });

      it('should render the weight', () => {
        expect(lineTwo(wrapper).childAt(0).text()).toContain('W3');
      });

      it('should render the reload time', () => {
        expect(lineFour(wrapper).childAt(0).text()).toContain('RT4');
      });

      it('should render the rate of fire', () => {
        expect(lineFive(wrapper).childAt(0).text()).toContain('ROF*');
      });

      it('should render the ammo capacity', () => {
        expect(lineSeven(wrapper).childAt(0).text()).toContain('Cap7');
      });

      it('should render the ammo weight', () => {
        expect(lineEight(wrapper).childAt(0).text()).toContain('AW0.7');
      });

      it('should render the reload method', () => {
        expect(lineNine(wrapper).childAt(0).text()).toContain('Mag');
      });

      it('should render the knock down value', () => {
        expect(lineTen(wrapper).childAt(0).text()).toContain('KD5');
      });

      it('should render the SAB value', () => {
        expect(lineEleven(wrapper).childAt(0).text()).toContain('SAB5');
      });
    });

    describe('the aim time data', () => {
      it('should render the aim time', () => {
        expect(lineOne(wrapper).childAt(1).text()).toContain('1');
        expect(lineOne(wrapper).childAt(1).text()).toContain('-18');
        expect(lineTwo(wrapper).childAt(1).text()).toContain('2');
        expect(lineTwo(wrapper).childAt(1).text()).toContain('-11');
        expect(lineThree(wrapper).childAt(1).text()).toContain('3');
        expect(lineThree(wrapper).childAt(1).text()).toContain('-10');
        expect(lineFour(wrapper).childAt(1).text()).toContain('4');
        expect(lineFour(wrapper).childAt(1).text()).toContain('-9');
        expect(lineFive(wrapper).childAt(1).text()).toContain('5');
        expect(lineFive(wrapper).childAt(1).text()).toContain('-8');
        expect(lineSix(wrapper).childAt(1).text()).toContain('6');
        expect(lineSix(wrapper).childAt(1).text()).toContain('-7');
      });
    });

    describe('the bullet data', () => {
      it('should render the FMJ/JHP/AP tags', () => {
        expect(lineOne(wrapper).childAt(2).text()).toContain('FMJ');
        expect(lineOne(wrapper).childAt(3).text()).toContain('PEN');
        expect(lineTwo(wrapper).childAt(3).text()).toContain('DC');
        expect(lineFour(wrapper).childAt(2).text()).toContain('JHP');
        expect(lineFour(wrapper).childAt(3).text()).toContain('PEN');
        expect(lineFive(wrapper).childAt(3).text()).toContain('DC');
        expect(lineSeven(wrapper).childAt(2).text()).toContain('AP');
        expect(lineSeven(wrapper).childAt(3).text()).toContain('PEN');
        expect(lineEight(wrapper).childAt(3).text()).toContain('DC');
      });

      describe('the FMJ PEN/DC data', () => {
        it('should render the PEN stats for each range bracket', () => {
          expect(lineOne(wrapper).childAt(4).text()).toContain('1.6');
          expect(lineOne(wrapper).childAt(5).text()).toContain('1.5');
          expect(lineOne(wrapper).childAt(6).text()).toContain('1.2');
          expect(lineOne(wrapper).childAt(7).text()).toContain('1');
          expect(lineOne(wrapper).childAt(8).text()).toContain('.8');
          expect(lineOne(wrapper).childAt(9).text()).toContain('.3');
          expect(lineOne(wrapper).childAt(10).text()).toContain('.2');
          expect(lineOne(wrapper).childAt(11).text()).toContain('.1');
        });

        it('should render the DC stats for each range bracket', () => {
          expect(lineTwo(wrapper).childAt(4).text()).toContain('3');
          expect(lineTwo(wrapper).childAt(5).text()).toContain('3');
          expect(lineTwo(wrapper).childAt(6).text()).toContain('2');
          expect(lineTwo(wrapper).childAt(7).text()).toContain('1');
          expect(lineTwo(wrapper).childAt(8).text()).toContain('1');
          expect(lineTwo(wrapper).childAt(9).text()).toContain('1');
          expect(lineTwo(wrapper).childAt(10).text()).toContain('1');
          expect(lineTwo(wrapper).childAt(11).text()).toContain('1');
        });
      });
      describe('the JHP PEN/DC data', () => {
        it('should render the PEN stats for each range bracket', () => {
          expect(lineFour(wrapper).childAt(4).text()).toContain('1.5');
          expect(lineFour(wrapper).childAt(5).text()).toContain('1.4');
          expect(lineFour(wrapper).childAt(6).text()).toContain('1.2');
          expect(lineFour(wrapper).childAt(7).text()).toContain('.9');
          expect(lineFour(wrapper).childAt(8).text()).toContain('.7');
          expect(lineFour(wrapper).childAt(9).text()).toContain('.3');
          expect(lineFour(wrapper).childAt(10).text()).toContain('.1');
          expect(lineFour(wrapper).childAt(11).text()).toContain('.1');
        });

        it('should render the DC stats for each range bracket', () => {
          expect(lineFive(wrapper).childAt(4).text()).toContain('4');
          expect(lineFive(wrapper).childAt(5).text()).toContain('4');
          expect(lineFive(wrapper).childAt(6).text()).toContain('3');
          expect(lineFive(wrapper).childAt(7).text()).toContain('2');
          expect(lineFive(wrapper).childAt(8).text()).toContain('1');
          expect(lineFive(wrapper).childAt(9).text()).toContain('1');
          expect(lineFive(wrapper).childAt(10).text()).toContain('1');
          expect(lineFive(wrapper).childAt(11).text()).toContain('1');
        });
      });
      describe('the AP PEN/DC data', () => {
        it('should render the PEN stats for each range bracket', () => {
          expect(lineSeven(wrapper).childAt(4).text()).toContain('2.2');
          expect(lineSeven(wrapper).childAt(5).text()).toContain('2.1');
          expect(lineSeven(wrapper).childAt(6).text()).toContain('1.8');
          expect(lineSeven(wrapper).childAt(7).text()).toContain('1.4');
          expect(lineSeven(wrapper).childAt(8).text()).toContain('1.1');
          expect(lineSeven(wrapper).childAt(9).text()).toContain('.5');
          expect(lineSeven(wrapper).childAt(10).text()).toContain('.2');
          expect(lineSeven(wrapper).childAt(11).text()).toContain('.1');
        });

        it('should render the DC stats for each range bracket', () => {
          expect(lineEight(wrapper).childAt(4).text()).toContain('3');
          expect(lineEight(wrapper).childAt(5).text()).toContain('3');
          expect(lineEight(wrapper).childAt(6).text()).toContain('2');
          expect(lineEight(wrapper).childAt(7).text()).toContain('1');
          expect(lineEight(wrapper).childAt(8).text()).toContain('1');
          expect(lineEight(wrapper).childAt(9).text()).toContain('1');
          expect(lineEight(wrapper).childAt(10).text()).toContain('1');
          expect(lineEight(wrapper).childAt(11).text()).toContain('1');
        });
      });
      describe('the Balistic Accuracy and Time Of Flight Data', () => {
        it('should render the BA and TOF tags', () => {
          expect(lineTen(wrapper).childAt(3).text()).toContain('BA');
          expect(lineEleven(wrapper).childAt(3).text()).toContain('TOF');
        });

        it('should render the BA stats for each range bracket', () => {
          expect(lineTen(wrapper).childAt(4).text()).toContain('45');
          expect(lineTen(wrapper).childAt(5).text()).toContain('36');
          expect(lineTen(wrapper).childAt(6).text()).toContain('27');
          expect(lineTen(wrapper).childAt(7).text()).toContain('20');
          expect(lineTen(wrapper).childAt(8).text()).toContain('15');
          expect(lineTen(wrapper).childAt(9).text()).toContain('5');
          expect(lineTen(wrapper).childAt(10).text()).toContain('0');
          expect(lineTen(wrapper).childAt(11).text()).toContain('-4');
        });

        it('should render the TOF stats for each range bracket', () => {
          expect(lineEleven(wrapper).childAt(4).text()).toContain('1');
          expect(lineEleven(wrapper).childAt(5).text()).toContain('2');
          expect(lineEleven(wrapper).childAt(6).text()).toContain('3');
          expect(lineEleven(wrapper).childAt(7).text()).toContain('5');
          expect(lineEleven(wrapper).childAt(8).text()).toContain('8');
          expect(lineEleven(wrapper).childAt(9).text()).toContain('19');
          expect(lineEleven(wrapper).childAt(10).text()).toContain('31');
          expect(lineEleven(wrapper).childAt(11).text()).toContain('45');
        });
      });
    });
  });
  describe('edge cases', () => {
    describe('no data for JHP/AP', () => {
      const weapon = testM16();
      weapon.projectiles = [weapon.projectiles.shift()];

      const wrapper = mount(<WeaponStatsTable weapon={weapon} />);

      it('should not render JHP data ', () => {
        expect(lineFour(wrapper).childAt(2).text()).not.toContain('JHP');
        expect(lineFour(wrapper).childAt(3).text()).not.toContain('PEN');
        expect(lineFive(wrapper).childAt(3).text()).not.toContain('DC');
        expect(lineFour(wrapper).childAt(4).text().length).toBe(0);
        expect(lineFive(wrapper).childAt(4).text().length).toBe(0);
      });

      it('should not render AP tags', () => {
        expect(lineSeven(wrapper).childAt(2).text()).not.toContain('AP');
        expect(lineSeven(wrapper).childAt(3).text()).not.toContain('PEN');
        expect(lineEight(wrapper).childAt(3).text()).not.toContain('DC');
        expect(lineSeven(wrapper).childAt(4).text().length).toBe(0);
        expect(lineEight(wrapper).childAt(4).text().length).toBe(0);
      });

      it('should not render a third line', () => {
        expect(lineThree(wrapper).text()).toEqual('3-9');
      });
    });
  });

  describe('automatic weapons', () => {
    const wrapper = mount(<WeaponStatsTable weapon={testFAMAS()} />);

    it('should render the minimum arc values', () => {
      expect(lineNine(wrapper).childAt(3).text()).toContain('MA');
      expect(lineNine(wrapper).childAt(4).text()).toContain('.4');
      expect(lineNine(wrapper).childAt(5).text()).toContain('.8');
      expect(lineNine(wrapper).childAt(6).text()).toContain('2');
      expect(lineNine(wrapper).childAt(7).text()).toContain('3');
      expect(lineNine(wrapper).childAt(8).text()).toContain('4');
      expect(lineNine(wrapper).childAt(9).text()).toContain('8');
      expect(lineNine(wrapper).childAt(10).text()).toContain('12');
      expect(lineNine(wrapper).childAt(11).text()).toContain('16');
    });

    it('should render the three round burst values', () => {
      expect(lineEight(wrapper).childAt(3).text()).toContain('3RB');
      expect(lineEight(wrapper).childAt(4).text()).toContain('-6');
      expect(lineEight(wrapper).childAt(5).text()).toContain('-1');
      expect(lineEight(wrapper).childAt(6).text()).toContain('4');
      expect(lineEight(wrapper).childAt(7).text()).toContain('8');
      expect(lineEight(wrapper).childAt(8).text()).toContain('10');
      expect(lineEight(wrapper).childAt(9).text()).toContain('15');
      expect(lineEight(wrapper).childAt(10).text()).toContain('18');
      expect(lineEight(wrapper).childAt(11).text()).toContain('20');
    });
  });

  describe('shotguns', () => {
    const wrapper = mount(<WeaponStatsTable weapon={testRemington()} />);

    it('should render the correct range brackets', () => {
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('1');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('2');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('4');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('6');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('8');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('10');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('15');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('20');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('30');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('40');
      expect(wrapper.find('.WeaponStatHeader').text()).toContain('80');
    });

    it('should render SALM data', () => {
      expect(lineSix(wrapper).childAt(3).text()).toContain('SALM');
      expect(lineSix(wrapper).childAt(4).text()).toContain('-14');
      expect(lineSix(wrapper).childAt(5).text()).toContain('-9');
      expect(lineSix(wrapper).childAt(6).text()).toContain('-4');
      expect(lineSix(wrapper).childAt(7).text()).toContain('-1');
      expect(lineSix(wrapper).childAt(8).text()).toContain('1');
      expect(lineSix(wrapper).childAt(9).text()).toContain('2');
      expect(lineSix(wrapper).childAt(10).text()).toContain('5');
      expect(lineSix(wrapper).childAt(11).text()).toContain('7');
      expect(lineSix(wrapper).childAt(12).text()).toContain('10');
      expect(lineSix(wrapper).childAt(13).text()).toContain('12');
      expect(lineSix(wrapper).childAt(14).text()).toContain('17');
    });

    it('should render the Base Pellet Hit Chance data', () => {
      expect(lineSeven(wrapper).childAt(3).text()).toContain('BPHC');
      expect(lineSeven(wrapper).childAt(4).text()).toContain('');
      expect(lineSeven(wrapper).childAt(5).text()).toContain('*11');
      expect(lineSeven(wrapper).childAt(6).text()).toContain('*10');
      expect(lineSeven(wrapper).childAt(7).text()).toContain('*9');
      expect(lineSeven(wrapper).childAt(8).text()).toContain('*7');
      expect(lineSeven(wrapper).childAt(9).text()).toContain('*5');
      expect(lineSeven(wrapper).childAt(10).text()).toContain('*2');
      expect(lineSeven(wrapper).childAt(11).text()).toContain('*1');
      expect(lineSeven(wrapper).childAt(12).text()).toContain('62');
      expect(lineSeven(wrapper).childAt(13).text()).toContain('35');
      expect(lineSeven(wrapper).childAt(14).text()).toContain('8');
    });

    it('should render the Pellet Radius data', () => {
      expect(lineEight(wrapper).childAt(3).text()).toContain('PR');
      expect(lineEight(wrapper).childAt(4).text()).toContain('.0');
      expect(lineEight(wrapper).childAt(5).text()).toContain('.0');
      expect(lineEight(wrapper).childAt(6).text()).toContain('.0');
      expect(lineEight(wrapper).childAt(7).text()).toContain('.1');
      expect(lineEight(wrapper).childAt(8).text()).toContain('.1');
      expect(lineEight(wrapper).childAt(9).text()).toContain('.1');
      expect(lineEight(wrapper).childAt(10).text()).toContain('.1');
      expect(lineEight(wrapper).childAt(11).text()).toContain('.2');
      expect(lineEight(wrapper).childAt(12).text()).toContain('.3');
      expect(lineEight(wrapper).childAt(13).text()).toContain('.4');
      expect(lineEight(wrapper).childAt(14).text()).toContain('.7');
    });

    it('should not render "(00)" or "12" after "Shot"', () => {
      expect(lineFour(wrapper).childAt(3).text()).not.toContain('(00)');
      expect(lineFour(wrapper).childAt(3).text()).not.toContain('12');
    });

    it('should render "(00)" before the DC', () => {
      expect(lineFive(wrapper).childAt(2).text()).toContain('(00)');
    });

    it('should render "12" before "BPHC"', () => {
      expect(lineSeven(wrapper).childAt(2).text()).toContain('12');
    });
  });

  describe('adding SAL bonus to aim time mod', () => {
    const sal = 7;
    const salWrapper = mount(<WeaponStatsTable weapon={testFAMAS()} sal={sal} />);

    it('should render aim time 1 mod with SAL bonus', () => {
      const aim1 = salWrapper.find('.gunTableLine').at(0).find('AimTimes');
      const expectedAim1 = testFAMAS().aim.mod[0] + sal;

      expect(aim1.text()).toBe(`1${expectedAim1}`);
    });

    it('should render aim time 2 mod with SAL bonus', () => {
      const aim2 = salWrapper.find('.gunTableLine').at(1).find('AimTimes');
      const expectedAim2 = testFAMAS().aim.mod[1] + sal;

      expect(aim2.text()).toBe(`2${expectedAim2}`);
    });

    it('should render aim time 3 mod with SAL bonus', () => {
      const aim3 = salWrapper.find('.gunTableLine').at(2).find('AimTimes');
      const expectedAim3 = testFAMAS().aim.mod[2] + sal;

      expect(aim3.text()).toBe(`3${expectedAim3}`);
    });

    it('should render aim time 4 mod with SAL bonus', () => {
      const aim4 = salWrapper.find('.gunTableLine').at(3).find('AimTimes');
      const expectedAim4 = testFAMAS().aim.mod[3] + sal;

      expect(aim4.text()).toBe(`4${expectedAim4}`);
    });

    it('should render aim time 5 mod with SAL bonus', () => {
      const aim5 = salWrapper.find('.gunTableLine').at(4).find('AimTimes');
      const expectedAim5 = testFAMAS().aim.mod[4] + sal;

      expect(aim5.text()).toBe(`5${expectedAim5}`);
    });

    it('should render aim time 6 mod with SAL bonus', () => {
      const aim6 = salWrapper.find('.gunTableLine').at(5).find('AimTimes');
      const expectedAim6 = testFAMAS().aim.mod[5] + sal;

      expect(aim6.text()).toBe(`6${expectedAim6}`);
    });

    it('should render aim time 7 mod with SAL bonus', () => {
      const aim7 = salWrapper.find('.gunTableLine').at(6).find('AimTimes');
      const expectedAim7 = testFAMAS().aim.mod[6] + sal;

      expect(aim7.text()).toBe(`7${expectedAim7}`);
    });

    it('should render aim time 8 mod with SAL bonus', () => {
      const aim8 = salWrapper.find('.gunTableLine').at(7).find('AimTimes');
      const expectedAim8 = testFAMAS().aim.mod[7] + sal;

      expect(aim8.text()).toBe(`8${expectedAim8}`);
    });

    it('should render aim time 9 mod with SAL bonus', () => {
      const aim9 = salWrapper.find('.gunTableLine').at(8).find('AimTimes');
      const expectedAim9 = testFAMAS().aim.mod[8] + sal;

      expect(aim9.text()).toBe(`9${expectedAim9}`);
    });

    it('should not modify the gun object', () => {
      const expectedAim9 = testFAMAS().aim.mod[8] + sal;

      expect(testFAMAS().aim.mod[8]).toBe(expectedAim9 - sal);
    });
  });
});

describe('findinging gun combat level from SAL', () => {
  it('should return correct skill level from SAL 0', () => {
    expect(findSkillLevelFromSAL(0)).toBe(0);
  });

  it('should return correct skill level from SAL 5', () => {
    expect(findSkillLevelFromSAL(5)).toBe(1);
  });

  it('should return correct skill level from SAL 5', () => {
    expect(findSkillLevelFromSAL(10)).toBe(4);
  });

  it('should return correct skill level from SAL 5', () => {
    expect(findSkillLevelFromSAL(26)).toBe(20);
  });

  it('should return undefined if SAL not found', () => {
    expect(findSkillLevelFromSAL(undefined)).toBe(undefined);
  });
});
