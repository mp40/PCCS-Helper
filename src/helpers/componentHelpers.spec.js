import {buildArrayForGunTable} from './componentHelpers'
import {testM1911A1, testM203} from './testHelpers'

describe('building arrays for rendering gun data table',()=>{
    it('should build the data for first line',() => {
        const result = {
            dataType: {
                name: 'Length',
                short: 'L',
                data: 9
            },
            aim: [1, -18],
            tag:['FMJ', 'PEN'],
            array: [1.6, 1.5, 1.2, 1.0, 0.8, 0.3, 0.2, 0.1]
        }
        expect(buildArrayForGunTable(testM1911A1())[0]).toEqual(result)
    })
    describe('no data for JHP/AP',()=>{
        it('should return empty strings in the tag array ',()=>{
            expect(buildArrayForGunTable(testM1911A1())[3].tag).toEqual(['JHP','PEN'])
            expect(buildArrayForGunTable(testM203())[3].tag).toEqual(['',''])
            expect(buildArrayForGunTable(testM1911A1())[4].tag).toEqual(['','DC'])
            expect(buildArrayForGunTable(testM203())[4].tag).toEqual(['',''])
            
        })
        it('should return an empty array for the object array value',()=>{
            expect(buildArrayForGunTable(testM1911A1())[3].array).toEqual([1.5, 1.4, 1.2, .9, .7, .3, .1, .1])
            expect(buildArrayForGunTable(testM203())[3].array).toEqual([])
        })
    })
    
})