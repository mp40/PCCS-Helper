import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount} from 'enzyme'
import StatBox from './StatBox';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("the Stat-Ip buttons",()=>{
    const statButton = mount(<button className="Stat-Up"/>)
    it('should have a test',()=>{
        expect(true).toBe(true)
    })
})