import {mountAppWithStore} from '../helpers/testHelpers'
import {storeWithCreateCharacterView} from '../helpers/testHelpers'

describe('The Weapons Card',()=>{
    describe('Firearms',()=>{
        const wrapper = mountAppWithStore(storeWithCreateCharacterView)
        it('should be possible to open a list of selectable weapons',()=>{
            wrapper.find('#addFirearm').simulate('click')
            expect(wrapper.text()).toContain('M16')
        })
        it('should be able to select a weapon',()=>{
            const gunList = wrapper.find('.equipmentListBody')
            // console.log(gunList.debug())
            gunList.find('#M16').simulate('click')
            const selectedWeapons = wrapper.find('#characterWeaponList')
            console.log(selectedWeapons.debug())
            expect(selectedWeapons.text()).toContain('M16')
        })
        it('should be possible to close the weapon select list',()=>{
            wrapper.find('#closeFirearmModal').simulate('click')
            expect(wrapper.text()).not.toContain('M60')
        })
        it('should update the displayed weapons weight',()=>{
            const header = wrapper.find('#weaponsHeader')
            expect(header.text()).toContain('8.7')
        })
        it('should update total weight',()=>{
            const navBarWeight = wrapper.find('.navEquipWeight')
            expect(navBarWeight.text()).toContain('13.7')
        })
        it('should be possible to increase qty of a gun',()=>{
            wrapper.find('#qtyUpGun').simulate('click')
            const selectedWeapons = wrapper.find('#characterWeaponList')
            expect(selectedWeapons.text()).toContain('2')
        })
        it('should be possible to decrease qty of a gun',()=>{
            wrapper.find('#qtyDownGun').simulate('click')
            const selectedWeapons = wrapper.find('#characterWeaponList')
            expect(selectedWeapons.text()).toContain('1')
        })
        it('should be possible to delete a gun',()=>{
            wrapper.find('#removeGun').simulate('click')
            expect(wrapper.text()).not.toContain('M16')
        })
        // it('should be possible to increase spare ammo',()=>{
        //     //TODO
        //     wrapper.find('#addFirearm').simulate('click')
        //     const gunList = wrapper.find('.equipmentListBody')
        //     gunList.find('#MAT 49').simulate('click')
        //     const spareMags = wrapper.find('.sparemags')
        //     console.log(spareMags.debug())
        // })
    })
})