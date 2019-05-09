import {mountAppWithStore} from '../helpers/testHelpers'
import {storeWithCreateCharacterView} from '../helpers/testHelpers'

describe('The Weapons Card',()=>{
    const wrapper = mountAppWithStore(storeWithCreateCharacterView())
    const gunList = () => wrapper.find('.equipmentListBody')
    const selectedWeapons = () => wrapper.find('#characterWeaponList')
    const header = () => wrapper.find('#weaponsHeader')
    const navBarWeight = () => wrapper.find('.navEquipWeight')

    describe('Firearms',()=>{
        afterAll(()=>{
            wrapper.unmount()
        })
        it('should be possible to open a list of selectable weapons',()=>{
            wrapper.find('#addFirearm').simulate('click')
            expect(wrapper.text()).toContain('M16')
        })
        it('should be able to select a weapon',()=>{
            gunList().find('#M16').simulate('click')
            expect(selectedWeapons().text()).toContain('M16')
        })
        it('should be possible to close the weapon select list',()=>{
            wrapper.find('#closeFirearmModal').simulate('click')
            expect(wrapper.text()).not.toContain('M60')
        })
        it('should update the displayed weapons weight',()=>{
            expect(header().text()).toContain('8.7')
        })
        it('should update total weight',()=>{
            expect(navBarWeight().text()).toContain('13.7')
        })
        it('should be possible to increase qty of a gun',()=>{
            wrapper.find('#qtyUpGun').simulate('click')
            expect(selectedWeapons().text()).toContain('2')
        })
        it('should be possible to decrease qty of a gun',()=>{
            wrapper.find('#qtyDownGun').simulate('click')
            expect(selectedWeapons().text()).toContain('1')
        })
        it('should be possible to delete a gun',()=>{
            wrapper.find('#removeGun').simulate('click')
            expect(wrapper.text()).not.toContain('M16')
        })
        it('should be possible to increase spare ammo',()=>{
            wrapper.find('#addFirearm').simulate('click')
            gunList().find('#M1911A1').simulate('click')
            wrapper.find('#qtyUpMag').simulate('click')
            expect(header().text()).toContain('3.7')
            expect(navBarWeight().text()).toContain('8.7')
        })
        it('should be possible to decrease spare ammo',()=>{
            wrapper.find('#qtyDownMag').simulate('click')
            expect(header().text()).toContain('3')
            expect(header().text()).not.toContain('3.7')
            expect(navBarWeight().text()).toContain('8')
            expect(navBarWeight().text()).not.toContain('8.7')
        })
        it('should remove spare ammo weight from total when weapon removed',()=>{
            wrapper.find('#qtyUpMag').simulate('click')
            wrapper.find('#removeGun').simulate('click')
            expect(header().text()).toContain('0')
            expect(navBarWeight().text()).toContain('5')
            expect(navBarWeight().text()).not.toContain('5.7')
        })
    })
    describe('firearms edge cases', ()=> {
        it('should increment only the intended mag when weapons have multiple mag types', ()=>{
            wrapper.mount()
            wrapper.find('#addFirearm').simulate('click')
            gunList().find('#M16').simulate('click')
            expect(selectedWeapons().text()).toContain('M16')
            const spareMags = wrapper.find('.spareMags')
            const firstMag = spareMags.at(0)
            const secondMag = spareMags.at(1)
            firstMag.find('#qtyUpMag').simulate('click')
            expect(firstMag.find('.magQtySpan').text()).toContain('1')
            expect(secondMag.find('.magQtySpan').text()).not.toContain('1')
        })
    })
})