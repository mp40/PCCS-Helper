const equipment = require('./equipmentList')

const findGear = function(findName){
    for(let obj in equipment){
        if(obj === findName){
            return equipment[obj]
        }
    }
}


const filterEquipment = function(findType){
    let results = {}
    for(let obj in equipment){
        if(equipment[obj].tags.includes(findType)){
            results[obj] = equipment[obj]
        }
    }
    return results
}

function createArrayOfEquipment(equipmentList){
    const equipmentArray = []
    for(let obj in equipmentList){
        const newObj = {
            name: obj,
            weight: equipmentList[obj].weight
        }
        equipmentArray.push(newObj)
    }
    return equipmentArray
}

module.exports = {findGear, filterEquipment, createArrayOfEquipment}