import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme'

describe('Character Generation',()=>{
    it('should render Character Generation page',()=>{
      const wrapper = mount(<App/>)
      wrapper.find('#activateCreateChar').simulate('click')
      expect(wrapper.text()).toContain('Place Holder')
    })
})