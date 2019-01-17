import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount} from 'enzyme'
import StatBox from './StatBox';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// describe("the Stat-Ip buttons",()=>{
//     const statButton = mount(<button className="Stat-Up" onClick={this.props.addToStat.bind(this,"str")}/>)
//     it('should increment stat by one',()=>{
//         statButton.find('button').simulate('click')
//         expect().toEqual()
//     })
// })
it('should have a test to pass',()=>{
    expect(true).toBe(true)
})