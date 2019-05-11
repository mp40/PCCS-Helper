import React from 'react';
import {shallow} from 'enzyme';
import WeaponsCardWeaponStats from './WeaponsCardWeaponStats';
import {testM1911A1} from '../helpers/testHelpers'

describe.only('<WeaponsCardWeaponStats/> component',()=>{
    const wrapper = shallow(<WeaponsCardWeaponStats gunObj={testM1911A1()}/>)
    it('should render the table header',()=>{
        expect(wrapper.find(".WeaponStatHeader").text()).toContain('M1911A1')
        expect(wrapper.find(".WeaponStatHeader").text()).toContain('Aim Time')
        expect(wrapper.find(".WeaponStatHeader").text()).toContain('10')
        expect(wrapper.find(".WeaponStatHeader").text()).toContain('20')
        expect(wrapper.find(".WeaponStatHeader").text()).toContain('40')
        expect(wrapper.find(".WeaponStatHeader").text()).toContain('70')
        expect(wrapper.find(".WeaponStatHeader").text()).toContain('100')
        expect(wrapper.find(".WeaponStatHeader").text()).toContain('200')
        expect(wrapper.find(".WeaponStatHeader").text()).toContain('300')
        expect(wrapper.find(".WeaponStatHeader").text()).toContain('400')
    })
    describe('the physcial data',()=>{
        it('should render the length',()=>{
            expect(wrapper.find('#WeaponStatLength').text()).toContain('L')
            expect(wrapper.find('#WeaponStatLength').text()).toContain('8')
        })
        it('should render the weight',()=>{
            expect(wrapper.find('#WeaponStatWeight').text()).toContain('W')
            expect(wrapper.find('#WeaponStatWeight').text()).toContain('3')
        })
    })
    describe('the aim time data',()=>{
        it('should render the aim time 1',()=>{
            expect(wrapper.find('#GunTableLineOne').childAt(1).text()).toContain('1')
            expect(wrapper.find('#GunTableLineOne').childAt(1).text()).toContain('-18')
        })
    })
    describe('the bullet data',()=>{
        const lineOne = wrapper.find('#GunTableLineOne')
            const lineTwo = wrapper.find('#GunTableLineTwo')
        it('should render the FMJ data',()=>{
            expect(lineOne.childAt(2).text()).toContain('FMJ')
            expect(lineOne.childAt(2).text()).toContain('PEN')
            expect(lineTwo.childAt(2).text()).toContain('DC')
        })
        describe('the FMJ PEN/DC data',()=>{
            it('should render the PEN stats for each range bracket',()=>{
                expect(lineOne.childAt(3).text()).toContain('1.6')
                expect(lineOne.childAt(4).text()).toContain('1.5')
                expect(lineOne.childAt(5).text()).toContain('1.2')
                expect(lineOne.childAt(6).text()).toContain('1.0')
                expect(lineOne.childAt(7).text()).toContain('.8')
                expect(lineOne.childAt(8).text()).toContain('.3')
                expect(lineOne.childAt(9).text()).toContain('.2')
                expect(lineOne.childAt(10).text()).toContain('.1')
            })
            it('should render the DC stats for each range bracket',()=>{
                expect(lineTwo.childAt(3).text()).toContain('3')
                expect(lineTwo.childAt(4).text()).toContain('3')
                expect(lineTwo.childAt(5).text()).toContain('2')
                expect(lineTwo.childAt(6).text()).toContain('1')
                expect(lineTwo.childAt(7).text()).toContain('1')
                expect(lineTwo.childAt(8).text()).toContain('1')
                expect(lineTwo.childAt(9).text()).toContain('1')
                expect(lineTwo.childAt(10).text()).toContain('1')
            })
        })
    })
})