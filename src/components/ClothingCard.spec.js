
import {mountAppWithStore} from '../helpers/testHelpers'

describe('the Clothing and Body Armour Card',()=>{
    it('should render',()=>{
        const wrapper = mountAppWithStore()
        wrapper.find('#activateCreateChar').simulate('click')
        expect(wrapper.text()).toContain('Uniform')
    })
    it('should render normal uniform as default',()=>{
        const wrapper = mountAppWithStore()
        wrapper.find('#activateCreateChar').simulate('click')
        expect(wrapper.text()).toContain('Normal')
        expect(wrapper.find('#uniformWeight').text()).toContain('5')
    })
    xit('should be possible to change uniform types',()=>{
        const wrapper = mountAppWithStore()
        wrapper.find('#activateCreateChar').simulate('click')
        //TODO finish this test
        wrapper.find('.uniformStats').simulate('click')
        // console.log(wrapper.debug())
        expect(wrapper.find('.uniformStats').text()).toContain('Tropical')
    })
})