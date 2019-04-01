import React from 'react';
import App from './App';
import {mount} from 'enzyme'

describe('The Nav Bar',()=>{
    describe('when in Create Character',()=>{
        it('should render a title',()=>{
            const wrapper = mount(<App/>)
            const menuWrapper= wrapper.find('.menuBar')
            expect(menuWrapper.text()).not.toContain('Create Character')
            wrapper.find('#activateCreateChar').simulate('click')
            expect(menuWrapper.text()).toContain('Create Character')
        })
        it('should add equipment weight to total weight',()=>{
            const wrapper = mount(<App/>)
            const menuWrapper= wrapper.find('.menuBar')
            wrapper.find('#activateCreateChar').simulate('click')
            wrapper.find('#addEquipment').simulate('click')
            const requiredEquipment = wrapper.find('.equipmentListBody').at(0).childAt(0).childAt(0)
            requiredEquipment.simulate('click')
            expect(menuWrapper.text()).toContain(7.2)
        })
    })
})