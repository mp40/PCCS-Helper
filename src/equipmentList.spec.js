const equipment = require('./equipmentList')

const findGear = function(list, findName){
    for(let obj in list){
        if(list[obj].name === findName){
            return list[obj]
        }
    }
}

const findType = function(list, findType){
    let results = []
    for(let obj in list){
        if(list[obj].type.includes(findType)){
            results.push(list[obj])
        }
    }
    return results
}

describe("finding things in the equipment list",()=>{
    const list = equipment
    it('should return items based on name',()=>{
        expect(findGear(list, 'Belt').weight).toBe(0.7)
        expect(findGear(list, "Canteen").weight).toBe(2.5)
    })
    it('should filter based on type key value',()=>{
        expect(findType(list,"ww2").length).toBe(1)
        expect(findType(list, 'ww2')[0].weight).toBe(0.56)
        expect(findType(list, 'alice').length).toBe(5)
        expect(findType(list, 'loadBearing').length).toBe(6)
    })
})
