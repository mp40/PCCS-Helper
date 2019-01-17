const firearms = require("./firearms")

const checkArrayLength = function(key, len){
    for(let gun in firearms){
        if(firearms[gun][key].length !== len){
            return firearms[gun].name
        }
    }
    return true
}

describe("Check data input",()=>{
    it('should have an array length of 8 for key value fmj',()=>{
        expect(checkArrayLength("fmj", 8)).toBe(true)
    })
    it('should have an array length of 8 for key value ma',()=>{
        expect(checkArrayLength("ma", 8)).toBe(true)
    })
    it('should have an array length of 8 for key value ba',()=>{
        expect(checkArrayLength("ba", 8)).toBe(true)
    })
    it('should have an array length of 8 for key value ba',()=>{
        expect(checkArrayLength("tof", 8)).toBe(true)
    })
})