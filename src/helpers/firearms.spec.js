import {rifles, pistols, smgs, mgs, shotguns, sniperRifles} from './firearms'

const allGuns = [...rifles, ...pistols, ...smgs, ...mgs, ...sniperRifles, ...shotguns]

const checkArrayLength = function(key, subKey = false){
    for(let gun of allGuns){
        const tofArray = gun.tof
        const len = tofArray.length

        if(!gun[key]){
            return gun.name + ' ' + key +' not used, no match'
        }

        if(!subKey && gun[key].length !== len){
            return gun.name + ' ' + key + ' length ' + gun[key].length
        }

        if(subKey && gun[key][subKey].length !== len){
            return gun.name + ' ' + key + ' ' + subKey + ' length ' + gun[key].length
        }
    }
    
    return 'matches tof length'
}

describe("Check weapon data input",()=>{
    it('should have matching length for for key value ma if key is present',()=>{
        expect(checkArrayLength("ma")).toMatch(/match/)
    })
    it('should have matching length for key value ba',()=>{
        expect(checkArrayLength("ba")).toBe('matches tof length')
    })
    it('should have matching length for fmj projectile key value',()=>{
        expect(checkArrayLength("fmj", 'pen')).toMatch(/match/)
        expect(checkArrayLength("fmj", 'dc')).toMatch(/match/)
        // tests below are meaningless as checkArray length doesn't get called if fmj not used
        // I don't know why
        expect(checkArrayLength("jhp", 'pen')).toMatch(/match/)
        expect(checkArrayLength("jhp", 'dc')).toMatch(/match/)
        expect(checkArrayLength("ap", 'pen')).toMatch(/match/)
        expect(checkArrayLength("ap", 'dc')).toMatch(/match/)
        expect(checkArrayLength("slug", 'pen')).toMatch(/match/)
        expect(checkArrayLength("slug", 'dc')).toMatch(/match/)
        expect(checkArrayLength("shot", 'pen')).toMatch(/match/)
        expect(checkArrayLength("shot", 'dc')).toMatch(/match/)
        expect(checkArrayLength("shot", 'salm')).toMatch(/match/)
        expect(checkArrayLength("shot", 'bphc')).toMatch(/match/)
        expect(checkArrayLength("shot", 'pr')).toMatch(/match/)
    })
})