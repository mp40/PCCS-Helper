import React from 'react';
import { mount } from 'enzyme';
import WeaponsCardWeaponStats, { findSkillLevelFromSAL } from './index';
import { testM1911A1, testM16WithoutJhpAp, testFAMAS, testRemington } from '../../helpers/testHelpers';

describe('<WeaponsCardWeaponStats/> component', () => {
  const wrapper = mount(<WeaponsCardWeaponStats gunObj={testM1911A1()} />);
  const lineOne = wrapper.find('#GunTableLine0');
  const lineTwo = wrapper.find('#GunTableLine1');
  const lineThree = wrapper.find('#GunTableLine2');
  const lineFour = wrapper.find('#GunTableLine3');
  const lineFive = wrapper.find('#GunTableLine4');
  const lineSix = wrapper.find('#GunTableLine5');
  const lineSeven = wrapper.find('#GunTableLine6');
  const lineEight = wrapper.find('#GunTableLine7');
  const lineNine = wrapper.find('#GunTableLine8');
  const lineTen = wrapper.find('#GunTableLine9');
  const lineEleven = wrapper.find('#GunTableLine10');

  it('should render the table header', () => {
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
  describe('the physcial data', () => {
    it('should render the length', () => {
      expect(wrapper.find('#WeaponStatLength').text()).toContain('L');
      expect(wrapper.find('#WeaponStatLength').text()).toContain('9');
    });
    it('should render the weight', () => {
      expect(wrapper.find('#WeaponStatWeight').text()).toContain('W');
      expect(wrapper.find('#WeaponStatWeight').text()).toContain('3');
    });
    it('should render the reload time', () => {
      expect(wrapper.find('#WeaponStatReload').text()).toContain('RT');
      expect(wrapper.find('#WeaponStatReload').text()).toContain('4');
    });
    it('should render the rate of fire', () => {
      expect(wrapper.find('#WeaponStatROF').text()).toContain('ROF');
      expect(wrapper.find('#WeaponStatROF').text()).toContain('*');
    });
    it('should render the ammo capacity', () => {
      expect(wrapper.find('#WeaponStatCapacity').text()).toContain('Cap');
      expect(wrapper.find('#WeaponStatCapacity').text()).toContain('7');
    });
    it('should render the ammo weight', () => {
      expect(wrapper.find('#WeaponStatAW').text()).toContain('AW');
      expect(wrapper.find('#WeaponStatAW').text()).toContain('.7');
    });
    it('should render the reload method', () => {
      expect(lineNine.childAt(0).text()).toContain('Mag');
    });
    it('should render the knock down value', () => {
      expect(wrapper.find('#WeaponStatKnockDown').text()).toContain('KD');
      expect(wrapper.find('#WeaponStatKnockDown').text()).toContain('5');
    });
    it('should render the SAB value', () => {
      expect(wrapper.find('#WeaponStatSAB').text()).toContain('SAB');
      expect(wrapper.find('#WeaponStatSAB').text()).toContain('5');
    });
  });
  describe('the aim time data', () => {
    it('should render the aim time', () => {
      expect(lineOne.childAt(1).text()).toContain('1');
      expect(lineOne.childAt(1).text()).toContain('-18');
      expect(lineTwo.childAt(1).text()).toContain('2');
      expect(lineTwo.childAt(1).text()).toContain('-11');
      expect(lineThree.childAt(1).text()).toContain('3');
      expect(lineThree.childAt(1).text()).toContain('-10');
      expect(lineFour.childAt(1).text()).toContain('4');
      expect(lineFour.childAt(1).text()).toContain('-9');
      expect(lineFive.childAt(1).text()).toContain('5');
      expect(lineFive.childAt(1).text()).toContain('-8');
      expect(lineSix.childAt(1).text()).toContain('6');
      expect(lineSix.childAt(1).text()).toContain('-7');
    });
  });
  describe('the bullet data', () => {
    it('should render the FMJ/JHP/AP tags', () => {
      expect(lineOne.childAt(2).text()).toContain('FMJ');
      expect(lineOne.childAt(2).text()).toContain('PEN');
      expect(lineTwo.childAt(2).text()).toContain('DC');
      expect(lineFour.childAt(2).text()).toContain('JHP');
      expect(lineFour.childAt(2).text()).toContain('PEN');
      expect(lineFive.childAt(2).text()).toContain('DC');
      expect(lineSeven.childAt(2).text()).toContain('AP');
      expect(lineSeven.childAt(2).text()).toContain('PEN');
      expect(lineEight.childAt(2).text()).toContain('DC');
    });
    describe('the FMJ PEN/DC data', () => {
      it('should render the PEN stats for each range bracket', () => {
        expect(lineOne.childAt(3).text()).toContain('1.6');
        expect(lineOne.childAt(4).text()).toContain('1.5');
        expect(lineOne.childAt(5).text()).toContain('1.2');
        expect(lineOne.childAt(6).text()).toContain('1.0');
        expect(lineOne.childAt(7).text()).toContain('.8');
        expect(lineOne.childAt(8).text()).toContain('.3');
        expect(lineOne.childAt(9).text()).toContain('.2');
        expect(lineOne.childAt(10).text()).toContain('.1');
      });
      it('should render the DC stats for each range bracket', () => {
        expect(lineTwo.childAt(3).text()).toContain('3');
        expect(lineTwo.childAt(4).text()).toContain('3');
        expect(lineTwo.childAt(5).text()).toContain('2');
        expect(lineTwo.childAt(6).text()).toContain('1');
        expect(lineTwo.childAt(7).text()).toContain('1');
        expect(lineTwo.childAt(8).text()).toContain('1');
        expect(lineTwo.childAt(9).text()).toContain('1');
        expect(lineTwo.childAt(10).text()).toContain('1');
      });
    });
    describe('the JHP PEN/DC data', () => {
      it('should render the PEN stats for each range bracket', () => {
        expect(lineFour.childAt(3).text()).toContain('1.5');
        expect(lineFour.childAt(4).text()).toContain('1.4');
        expect(lineFour.childAt(5).text()).toContain('1.2');
        expect(lineFour.childAt(6).text()).toContain('.9');
        expect(lineFour.childAt(7).text()).toContain('.7');
        expect(lineFour.childAt(8).text()).toContain('.3');
        expect(lineFour.childAt(9).text()).toContain('.1');
        expect(lineFour.childAt(10).text()).toContain('.1');
      });
      it('should render the DC stats for each range bracket', () => {
        expect(lineFive.childAt(3).text()).toContain('4');
        expect(lineFive.childAt(4).text()).toContain('4');
        expect(lineFive.childAt(5).text()).toContain('3');
        expect(lineFive.childAt(6).text()).toContain('2');
        expect(lineFive.childAt(7).text()).toContain('1');
        expect(lineFive.childAt(8).text()).toContain('1');
        expect(lineFive.childAt(9).text()).toContain('1');
        expect(lineFive.childAt(10).text()).toContain('1');
      });
    });
    describe('the AP PEN/DC data', () => {
      it('should render the PEN stats for each range bracket', () => {
        expect(lineSeven.childAt(3).text()).toContain('2.2');
        expect(lineSeven.childAt(4).text()).toContain('2.1');
        expect(lineSeven.childAt(5).text()).toContain('1.8');
        expect(lineSeven.childAt(6).text()).toContain('1.4');
        expect(lineSeven.childAt(7).text()).toContain('1.1');
        expect(lineSeven.childAt(8).text()).toContain('.5');
        expect(lineSeven.childAt(9).text()).toContain('.2');
        expect(lineSeven.childAt(10).text()).toContain('.1');
      });
      it('should render the DC stats for each range bracket', () => {
        expect(lineEight.childAt(3).text()).toContain('3');
        expect(lineEight.childAt(4).text()).toContain('3');
        expect(lineEight.childAt(5).text()).toContain('2');
        expect(lineEight.childAt(6).text()).toContain('1');
        expect(lineEight.childAt(7).text()).toContain('1');
        expect(lineEight.childAt(8).text()).toContain('1');
        expect(lineEight.childAt(9).text()).toContain('1');
        expect(lineEight.childAt(10).text()).toContain('1');
      });
    });
    describe('the Balistic Accuracy and Time Of Flight Data', () => {
      it('should render the BA and TOF tags', () => {
        expect(lineTen.childAt(2).text()).toContain('BA');
        expect(lineEleven.childAt(2).text()).toContain('TOF');
      });
      it('should render the BA stats for each range bracket', () => {
        expect(lineTen.childAt(3).text()).toContain('45');
        expect(lineTen.childAt(4).text()).toContain('36');
        expect(lineTen.childAt(5).text()).toContain('27');
        expect(lineTen.childAt(6).text()).toContain('20');
        expect(lineTen.childAt(7).text()).toContain('15');
        expect(lineTen.childAt(8).text()).toContain('5');
        expect(lineTen.childAt(9).text()).toContain('0');
        expect(lineTen.childAt(10).text()).toContain('-4');
      });
      it('should render the TOF stats for each range bracket', () => {
        expect(lineEleven.childAt(3).text()).toContain('1');
        expect(lineEleven.childAt(4).text()).toContain('2');
        expect(lineEleven.childAt(5).text()).toContain('3');
        expect(lineEleven.childAt(6).text()).toContain('5');
        expect(lineEleven.childAt(7).text()).toContain('8');
        expect(lineEleven.childAt(8).text()).toContain('19');
        expect(lineEleven.childAt(9).text()).toContain('31');
        expect(lineEleven.childAt(10).text()).toContain('45');
      });
    });
  });
  describe('automatic weapons', () => {
    const wrapper = mount(<WeaponsCardWeaponStats gunObj={testFAMAS()} />);
    const lineNine = wrapper.find('#GunTableLine8');
    const lineEight = wrapper.find('#GunTableLine7');
    it('should render the minimum arc values', () => {
      expect(lineNine.childAt(2).text()).toContain('MA');
      expect(lineNine.childAt(3).text()).toContain('.4');
      expect(lineNine.childAt(4).text()).toContain('.8');
      expect(lineNine.childAt(5).text()).toContain('2');
      expect(lineNine.childAt(6).text()).toContain('3');
      expect(lineNine.childAt(7).text()).toContain('4');
      expect(lineNine.childAt(8).text()).toContain('8');
      expect(lineNine.childAt(9).text()).toContain('12');
      expect(lineNine.childAt(10).text()).toContain('16');
    });
    it('should render the three round burst values', () => {
      expect(lineEight.childAt(2).text()).toContain('3RB');
      expect(lineEight.childAt(3).text()).toContain('-6');
      expect(lineEight.childAt(4).text()).toContain('-1');
      expect(lineEight.childAt(5).text()).toContain('4');
      expect(lineEight.childAt(6).text()).toContain('8');
      expect(lineEight.childAt(7).text()).toContain('10');
      expect(lineEight.childAt(8).text()).toContain('15');
      expect(lineEight.childAt(9).text()).toContain('18');
      expect(lineEight.childAt(10).text()).toContain('20');
    });
  });
  describe('edge cases', () => {
    describe('no data for JHP/AP', () => {
      const wrapper = mount(<WeaponsCardWeaponStats gunObj={testM16WithoutJhpAp()} />);
      const lineThree = wrapper.find('#GunTableLine2');
      const lineFour = wrapper.find('#GunTableLine3');
      const lineFive = wrapper.find('#GunTableLine4');
      const lineSeven = wrapper.find('#GunTableLine6');
      const lineEight = wrapper.find('#GunTableLine7');
      it('should not render JHP data ', () => {
        expect(lineFour.childAt(2).text()).not.toContain('JHP');
        expect(lineFour.childAt(2).text()).not.toContain('PEN');
        expect(lineFive.childAt(2).text()).not.toContain('DC');
        expect(lineFour.childAt(3).text().length).toBe(0);
        expect(lineFive.childAt(3).text().length).toBe(0);
      });
      it('should not render AP tags', () => {
        expect(lineSeven.childAt(2).text()).not.toContain('AP');
        expect(lineSeven.childAt(2).text()).not.toContain('PEN');
        expect(lineEight.childAt(2).text()).not.toContain('DC');
        expect(lineSeven.childAt(3).text().length).toBe(0);
        expect(lineEight.childAt(3).text().length).toBe(0);
      });
      it('should not render a third line', () => {
        expect(lineThree.text()).toEqual('3-9');
      });
    });
  });
  describe('shotguns', () => {
    const wrapper = mount(<WeaponsCardWeaponStats gunObj={testRemington()} />);
    const lineFour = wrapper.find('#GunTableLine3');
    const lineFive = wrapper.find('#GunTableLine4');
    const lineSix = wrapper.find('#GunTableLine5');
    const lineSeven = wrapper.find('#GunTableLine6');
    const lineEight = wrapper.find('#GunTableLine7');
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
      expect(lineSix.childAt(2).text()).toContain('SALM');
      expect(lineSix.childAt(3).text()).toContain('-14');
      expect(lineSix.childAt(4).text()).toContain('-9');
      expect(lineSix.childAt(5).text()).toContain('-4');
      expect(lineSix.childAt(6).text()).toContain('-1');
      expect(lineSix.childAt(7).text()).toContain('1');
      expect(lineSix.childAt(8).text()).toContain('2');
      expect(lineSix.childAt(9).text()).toContain('5');
      expect(lineSix.childAt(10).text()).toContain('7');
      expect(lineSix.childAt(11).text()).toContain('10');
      expect(lineSix.childAt(12).text()).toContain('12');
      expect(lineSix.childAt(13).text()).toContain('17');
    });
    it('should render the Base Pellet Hit Chance data', () => {
      expect(lineSeven.childAt(2).text()).toContain('BPHC');
      expect(lineSeven.childAt(3).text()).toContain('');
      expect(lineSeven.childAt(4).text()).toContain('*11');
      expect(lineSeven.childAt(5).text()).toContain('*10');
      expect(lineSeven.childAt(6).text()).toContain('*9');
      expect(lineSeven.childAt(7).text()).toContain('*7');
      expect(lineSeven.childAt(8).text()).toContain('*5');
      expect(lineSeven.childAt(9).text()).toContain('*2');
      expect(lineSeven.childAt(10).text()).toContain('*1');
      expect(lineSeven.childAt(11).text()).toContain('62');
      expect(lineSeven.childAt(12).text()).toContain('35');
      expect(lineSeven.childAt(13).text()).toContain('8');
    });
    it('should render the Pellet Radius data', () => {
      expect(lineEight.childAt(2).text()).toContain('PR');
      expect(lineEight.childAt(3).text()).toContain('.0');
      expect(lineEight.childAt(4).text()).toContain('.0');
      expect(lineEight.childAt(5).text()).toContain('.0');
      expect(lineEight.childAt(6).text()).toContain('.1');
      expect(lineEight.childAt(7).text()).toContain('.1');
      expect(lineEight.childAt(8).text()).toContain('.1');
      expect(lineEight.childAt(9).text()).toContain('.1');
      expect(lineEight.childAt(10).text()).toContain('.2');
      expect(lineEight.childAt(11).text()).toContain('.3');
      expect(lineEight.childAt(12).text()).toContain('.4');
      expect(lineEight.childAt(13).text()).toContain('.7');
    });
    it('should not render "(00)" or "12" after "Shot"', () => {
      expect(lineFour.childAt(2).text()).not.toContain('(00)');
      expect(lineFour.childAt(2).text()).not.toContain('12');
    });
    it('should render "(00)" before the DC', () => {
      expect(lineFive.childAt(2).text()).toContain('(00)');
    });
    it('should render "12" before "BPHC"', () => {
      expect(lineSeven.childAt(2).text()).toContain('12');
    });
  });
  describe('adding SAL bonus to aim time mod', () => {
    const sal = 7;
    const salWrapper = mount(<WeaponsCardWeaponStats gunObj={testFAMAS()} sal={sal} />);
    it('should render aim time 1 mod with SAL bonus', () => {
      const aim1 = salWrapper.find('#GunTableLine0').find('.AimMod');
      const expectedAim1 = testFAMAS().aim.mod[0] + sal;
      expect(aim1.text()).toBe(`${expectedAim1}`);
    });
    it('should render aim time 2 mod with SAL bonus', () => {
      const aim2 = salWrapper.find('#GunTableLine1').find('.AimMod');
      const expectedAim2 = testFAMAS().aim.mod[1] + sal;
      expect(aim2.text()).toBe(`${expectedAim2}`);
    });
    it('should render aim time 3 mod with SAL bonus', () => {
      const aim3 = salWrapper.find('#GunTableLine2').find('.AimMod');
      const expectedAim3 = testFAMAS().aim.mod[2] + sal;
      expect(aim3.text()).toBe(`${expectedAim3}`);
    });
    it('should render aim time 4 mod with SAL bonus', () => {
      const aim4 = salWrapper.find('#GunTableLine3').find('.AimMod');
      const expectedAim4 = testFAMAS().aim.mod[3] + sal;
      expect(aim4.text()).toBe(`${expectedAim4}`);
    });
    it('should render aim time 5 mod with SAL bonus', () => {
      const aim5 = salWrapper.find('#GunTableLine4').find('.AimMod');
      const expectedAim5 = testFAMAS().aim.mod[4] + sal;
      expect(aim5.text()).toBe(`${expectedAim5}`);
    });
    it('should render aim time 6 mod with SAL bonus', () => {
      const aim6 = salWrapper.find('#GunTableLine5').find('.AimMod');
      const expectedAim6 = testFAMAS().aim.mod[5] + sal;
      expect(aim6.text()).toBe(`${expectedAim6}`);
    });
    it('should render aim time 7 mod with SAL bonus', () => {
      const aim7 = salWrapper.find('#GunTableLine6').find('.AimMod');
      const expectedAim7 = testFAMAS().aim.mod[6] + sal;
      expect(aim7.text()).toBe(`${expectedAim7}`);
    });
    it('should render aim time 8 mod with SAL bonus', () => {
      const aim8 = salWrapper.find('#GunTableLine7').find('.AimMod');
      const expectedAim8 = testFAMAS().aim.mod[7] + sal;
      expect(aim8.text()).toBe(`${expectedAim8}`);
    });
    it('should render aim time 9 mod with SAL bonus', () => {
      const aim9 = salWrapper.find('#GunTableLine8').find('.AimMod');
      const expectedAim9 = testFAMAS().aim.mod[8] + sal;
      expect(aim9.text()).toBe(`${expectedAim9}`);
    });
  });
  describe('display recoil recovery', () => {
    const sal = 0;
    it('should display recoil recovey after weapon name', () => {
      let rrWrapper = mount(<WeaponsCardWeaponStats gunObj={testFAMAS()} sal={sal} />);
      expect(rrWrapper.childAt(0).text()).toBe('FAMAS - recoil recovery: 2');
      rrWrapper = mount(<WeaponsCardWeaponStats gunObj={testFAMAS()} sal={sal + 10} />);
      expect(rrWrapper.childAt(0).text()).toBe('FAMAS - recoil recovery: 0');
    });
    it('should display not recoil recovey when sal is undefined', () => {
      const rrWrapper = mount(<WeaponsCardWeaponStats gunObj={testFAMAS()} sal={undefined} />);
      expect(rrWrapper.childAt(0).text()).toBe('FAMAS');
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
