const equipment = require('./equipmentList')

const findGear = function(findName){
    for(let obj in equipment){
        if(obj === findName){
            return equipment[obj]
        }
    }
}

const filterEquipment = function(findTypes){
    if(findTypes.length === 0){
        return equipment
    }
    let results = {}
    for(let obj in equipment){
            if(equipment[obj].tags.includes(...findTypes)){
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

export {
    findGear, 
    filterEquipment,
    createArrayOfEquipment
    }