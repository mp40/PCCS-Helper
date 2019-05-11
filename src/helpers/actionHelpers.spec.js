import {
    calculateAmmoWeight, 
    calculateGunAndAmmoWeight, 
    calculateFirearmsArrayWeight, 
    calculateObjectWeightDifference,
} from './actionHelpers'

const testPistol = (qty = 1) => {
    return {
        weight: 2,
        qty,
        mag: [{weight: 0.5, qty: 2}]
    }
}

const testRifle = () => {
    return {
        weight: 10,
        qty: 1,
        mag: [{weight: 1, qty: 1}, {weight: 1.5, qty: 2}]
    }
}

describe('calculating firearms weight',()=>{
    it('should calculate total ammo weight of gun object',()=>{
        expect(calculateAmmoWeight(testPistol())).toBe(1)
        expect(calculateAmmoWeight(testRifle())).toBe(4)
    })
    it('should calculate the weight of the gun and spare ammo', ()=> {
        expect(calculateGunAndAmmoWeight(testPistol())).toBe(3)
        expect(calculateGunAndAmmoWeight(testRifle())).toBe(14)
    })
    it('should calulate multiple types of same gun',()=>{
        expect(calculateGunAndAmmoWeight(testPistol(2))).toBe(5)
    })
    it('should calculate weight of array of firearms',()=>{
        expect(calculateFirearmsArrayWeight([testPistol(),testRifle()])).toBe(17)
    })
    it('should claculate difference between old gun/mag object and new gun/mag object',()=>{
        expect(calculateObjectWeightDifference(testPistol(), 1)).toBe(2)
        expect(calculateObjectWeightDifference(testPistol(), -1)).toBe(-2)
        expect(calculateObjectWeightDifference(testPistol().mag[0], 1)).toBe(0.5)
        expect(calculateObjectWeightDifference(testPistol().mag[0], -1)).toBe(-0.5)
    })
})