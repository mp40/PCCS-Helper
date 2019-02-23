import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme'

describe('Character Generation',()=>{
    const wrapper = mount(<App/>)
    wrapper.find('#activateCreateChar').simulate('click')
    it('should render Character Generation page',()=>{
        expect(wrapper.text()).toContain('Place Holder')
    })
    it('should render the attributes',()=>{
        expect(wrapper.text()).toContain('Strength')
        expect(wrapper.text()).toContain('Intelligence')
        expect(wrapper.text()).toContain('Health')
        expect(wrapper.text()).toContain('Willpower')
        expect(wrapper.text()).toContain('Agility')
    })
})