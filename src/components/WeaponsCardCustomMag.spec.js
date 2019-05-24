import React from 'react';
import {shallow} from 'enzyme';
import WeaponsCardCustomMag from './WeaponsCardCustomMag';

describe('the <WeaponsCardCustomMag/> component',()=>{
    const wrapper = shallow(<WeaponsCardCustomMag/>)
    it('should take an input for ammo capacity',()=>{
        wrapper.find('#customMagCapacityInput').simulate('change', {
            target:{value: '18'}
        })
        expect(wrapper.state('capacity')).toEqual(18)
    })
    it('should take an input for weight',()=>{
        wrapper.find('#customMagWeightInput').simulate('change', {
            target:{value: '.7'}
        })
        expect(wrapper.state('weight')).toEqual(.7)
    })
})
