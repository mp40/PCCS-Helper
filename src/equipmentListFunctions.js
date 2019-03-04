const equipment = require('./equipmentList')

const findGear = function(findName){
    for(let obj in equipment){
        if(obj === findName){
            return equipment[obj]
        }
    }
}

const filterEquipment = function(findType){
    if(findType.length === 0){
        return equipment
    }
    let results = {}
    
    for(let obj in equipment){
        for(let i = 0; i < findType.length; i++){
            if(equipment[obj].tags.includes(findType[i])){
                results[obj] = equipment[obj]
            }
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

function createFilterSet(equipmentList){
    const tagArray = []

    for(let obj in equipmentList){
        tagArray.push(equipmentList[obj].tags)
    }
    return Array.from(new Set(tagArray.flat()))
}

export {
    findGear, 
    filterEquipment,
    createArrayOfEquipment,
    createFilterSet,
    }