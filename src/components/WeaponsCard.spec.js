import {mountAppWithStore} from '../helpers/testHelpers'
import {storeWithCreateCharacterView} from '../helpers/testHelpers'

describe('The Weapons Card',()=>{
    describe('Firearms',()=>{
        const wrapper = mountAppWithStore(storeWithCreateCharacterView)
        it('should be possible to open a list of selectable weapons',()=>{
            // console.log(wrapper.debug())
            //TODO
            //wrapper.find select weapons button
            // simulate click
            // expect the firearms list to render
        })
    })
})