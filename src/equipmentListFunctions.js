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

function createFilterSet(equipmentList){
    // const tagSet = new Set()
    // for(let obj in equipmentList){
    //     tagSet.add(obj.tags)
    // }
    // return tagSet
    const tags = []
    for(let obj in equipmentList){
        console.log(equipmentList[obj])
        tags.push(equipmentList[obj].tags)
    }
    return tags
}

export {
    findGear, 
    filterEquipment,
    createArrayOfEquipment,
    createFilterSet
    }