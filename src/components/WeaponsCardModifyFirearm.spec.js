import React from 'react';
import {mount} from 'enzyme';
import WeaponsCardModifyFirearm from './WeaponsCardModifyFirearm'
import {testM16} from '../helpers/testHelpers'

describe("the <WeaponsCardModifyFirearm/> component",()=>{
    const wrapperWith = gunObj => mount(<WeaponsCardModifyFirearm gunObj={gunObj}/>)

    describe('magazines',()=>{
        it('should be possible to set primary magazine if more than one available',()=>{
            const wrapper = wrapperWith(testM16())
            wrapper.find('#M16MagAtIndex1').simulate('click')
            expect(wrapper.find('#M16MagAtIndex0').text()).toContain('30')
        })
    })
})