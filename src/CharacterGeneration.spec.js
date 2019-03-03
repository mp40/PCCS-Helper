import React from 'react';
import App from './App';
import {mount} from 'enzyme'

describe('Character Generation',()=>{
    const wrapper = mount(<App/>)
    wrapper.find('#activateCreateChar').simulate('click')

    function inputAttribute (attributeId, newValue) {
        wrapper.find(attributeId).simulate('click')
        wrapper.find(`${attributeId} input`).simulate('keyUp', {
        target:{value: newValue},
        keyCode: 13})
    }

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
            inputAttribute('#updateStr', '11')
            expect(wrapper.text()).toContain('11')
        })
        it('should update intelligence',()=>{
            inputAttribute('#updateInt', '12')
            expect(wrapper.text()).toContain('12')
        })
        it('should update health',()=>{
            inputAttribute('#updateHlt', '14')
            expect(wrapper.text()).toContain('14')
        })
        it('should update willpower',()=>{
            inputAttribute('#updateWil', '17')
            expect(wrapper.text()).toContain('17')
        })
        it('should update agility',()=>{
            inputAttribute('#updateAgi', '18')
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
            inputAttribute('#updateGun', '4')
            expect(wrapper.text()).toContain('4')
        })
        it('should update hand to hand combat level',()=>{
            inputAttribute('#updateHand','2')
            expect(wrapper.text()).toContain('2')
        })
    })
    describe('Comabt Data',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#activateCreateChar').simulate('click')

        describe('Combat Actions',()=>{
            it('should render gun combat actions',()=>{
                const rows = wrapper.find('.combatActions tbody tr')
                expect(rows.at(0).text()).toEqual('Gun1111')
            })
            it('should render gun combat actions',()=>{
                const rows = wrapper.find('.combatActions tbody tr')
                expect(rows.at(1).text()).toEqual('Hand1111')
            })
        })
        describe('movement and damage bonus',()=>{
            const data = wrapper.find('.additionalCombatData')
            it('should render base speed',()=>{
                expect(data.text()).toContain('3')
            })
            it('should render max speed',()=>{
                expect(data.text()).toContain('6')
            })
            it('should render damage bonus',()=>{
                expect(data.text()).toContain('1')
            })
        })
    })
    describe('the equipment list',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#activateCreateChar').simulate('click')
        it('should render',()=>{
            expect(wrapper.text()).toContain('Equipment')
        })
        it('should render equipment list',()=>{
            wrapper.find('#addEquipment').simulate('click')
            expect(wrapper.text()).toContain('Baseball Bat')
        })
        it('should have a button to close the equipment modal',()=>{
            const wrapper = mount(<App/>)
            wrapper.find('#activateCreateChar').simulate('click')
            wrapper.find('#addEquipment').simulate('click')
            wrapper.find('#closeEquipmentModal').simulate('click')
            expect(wrapper.text()).not.toContain('Baseball Bat')
        })
        // describe('filtering the equipment list',()=>{
        //     it('should display filter tags',()=>{
        //         const wrapper = mount(<App/>)
        //         wrapper.find('#activateCreateChar').simulate('click')
        //         wrapper.find('#filterEquipmentList').simulate('click')
        //         expect(wrapper.text()).toContain('ALICE')
                
        //     })
            // it('should filter the list based on slected criteria',()=>{
            //     const wrapper = mount(<App/>)
            //     wrapper.find('#activateCreateChar').simulate('click')
            //     wrapper.find('#filterEquipmentList').simulate('click')
            //     //TODO fix this test
            //     wrapper.find('???').simulate('click')
            //     expect(wrapper.text()).toContain("Boil In The Bag")
            //     expect(wrapper.text()).not.toContain("Baseball Bat")
            // })
        // })
    })
})