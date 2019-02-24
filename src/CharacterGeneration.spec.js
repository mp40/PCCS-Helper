import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme'

describe('Character Generation',()=>{
    const wrapper = mount(<App/>)
    wrapper.find('#activateCreateChar').simulate('click')
    it('should render Character Generation page',()=>{
        expect(wrapper.text()).toContain('Attribute')
    })
    it('should render the attributes',()=>{
        expect(wrapper.text()).toContain('Strength')
        expect(wrapper.text()).toContain('Intelligence')
        expect(wrapper.text()).toContain('Health')
        expect(wrapper.text()).toContain('Willpower')
        expect(wrapper.text()).toContain('Agility')
    })
    it('shoulder render attribute values',()=>{
        expect(wrapper.text()).toContain('10')
    })
    describe('changing attribute values',()=>{
        it('should update strength',()=>{
            wrapper.find('#updateStr').simulate('click')
            wrapper.find('#updateStr input').simulate('keyUp', {
                target:{value: '11'},
                keyCode: 13})
            expect(wrapper.text()).toContain('11')
        })
        it('should update intelligence',()=>{
            wrapper.instance().updateAttribute('int',12)
            expect(wrapper.text()).toContain('12')
        })
        it('should update health',()=>{
            wrapper.instance().updateAttribute('hlt',14)
            expect(wrapper.text()).toContain('14')
        })
        it('should update willpower',()=>{
            wrapper.instance().updateAttribute('wil',17)
            expect(wrapper.text()).toContain('17')
        })
        it('should update agility',()=>{
            wrapper.instance().updateAttribute('agi',18)
            expect(wrapper.text()).toContain('18')
        })
        
    })
    describe('Combat Levels',()=>{
        it('should render Gun Comabat',()=>{
            expect(wrapper.text()).toContain('Gun')
        })
        it('should render Hand to Hand Combat',()=>{
            expect(wrapper.text()).toContain('Hand')
        })
        it('should update gun combat level',()=>{
            wrapper.instance().updateAttribute('gunLevel',4)
            expect(wrapper.text()).toContain('4')
        })
        it('should update agility',()=>{
            wrapper.instance().updateAttribute('handLevel',4)
            expect(wrapper.text()).toContain('4')
        })
    })
    describe('Comabt Data',()=>{
        describe('Combat Actions',()=>{
            it('should render gun combat actions',()=>{
                expect(wrapper.text()).toContain('')
            })
        })
    })
})