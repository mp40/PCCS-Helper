import React from 'react';
import App from '../App';
import {mount} from 'enzyme'

describe('the Clothing and Body Armour Card',()=>{
    it('should render',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#activateCreateChar').simulate('click')
        expect(wrapper.text()).toContain('Uniform')
    })
    it('should render normal uniform as default',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#activateCreateChar').simulate('click')
        expect(wrapper.text()).toContain('Normal')
        expect(wrapper.text()).toContain('5')
    })
    it('should be possible to change uniform types',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#activateCreateChar').simulate('click')
        //TODO finish this test
    })
})