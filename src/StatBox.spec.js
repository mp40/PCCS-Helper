import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount} from 'enzyme'
import StatBox from './StatBox';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Attribute entry',()=>{
    const statBox = shallow(<StatBox/>)
    it('should update state when number entered in text box',()=>{
        expect(statBox.find()).
    })
})




it('should have a test to pass',()=>{
    expect(true).toBe(true)
})