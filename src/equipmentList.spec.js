const {findGear, filterEquipment, createArrayOfEquipment} = require('./equipmentListFunctions')
const {equipmentList} = require ('./equipmentList')

describe("finding things in the equipment list",()=>{
    it('should return items based on name',()=>{
        expect(findGear('Belt').weight).toBe(0.7)
        expect(findGear("Canteen").weight).toBe(2.5)
        expect(findGear("Rock").weight).toBe(1.5)
        expect(findGear("Combat Stretcher, Folding").weight).toBe(15)
    })
})
    
describe('filtering the equipment list',()=>{
    it('should filter based on type key value',()=>{
        expect(Object.keys(filterEquipment("WW2")).length).toBe(14)
        expect(filterEquipment('WW2')["Bayonet, M1 w/M7 scabard"].weight).toBe(1.56)
        expect(Object.keys(filterEquipment('ALICE')).length).toBe(5)
        expect(Object.keys(filterEquipment('Load Bearing')).length).toBe(34)
    })
    it('should return filtered list with correct key names',()=>{
        expect(typeof filterEquipment("WW2")).toEqual("object")
        expect(filterEquipment('WW2')).toHaveProperty('Bayonet, M1 w/M7 scabard')
    })
})    

describe('creating an array of equipment',()=>{
    it('should take nested objects and convert to an array of objects',()=>{
        const result = createArrayOfEquipment(equipmentList)
        expect(Array.isArray(result)).toBe(true)
    })
})