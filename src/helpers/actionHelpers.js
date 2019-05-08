export const addEquipment = (oldWeight, oldArray, equipObj) => {
    equipObj.qty = 1
    const newWeight = (oldWeight + equipObj.weight)
    const newArray = [...oldArray, equipObj]
    return {
        totalWeight: Math.round(newWeight*1000)/1000,
        equipArray: newArray
     }
}

export const removeEquipment = (oldWeight, oldArray, equipObj) => {
    const newWeight = oldWeight - (equipObj.weight * equipObj.qty)
    const newArray = oldArray.filter(obj => obj.name !== equipObj.name)
    return {
        totalWeight: Math.round(newWeight*1000)/1000,
        equipArray: newArray
     }
}

export const removeAllEquipment = (oldWeight, oldArray) => {
    const equipmentWeight = oldArray.reduce((sum, obj)=>{
        return sum + (obj.weight * obj.qty)
    },0)
    return Math.round((oldWeight - equipmentWeight)*1000)/1000
}

export const incrementEquipmentQty = (oldWeight, oldArray, equipObj, modifier) => {
    const newArray = oldArray.map((obj)=>{
      if(obj.name === equipObj.name){
        obj.qty += modifier
      }
      return obj
    })
    const newWeight = oldWeight += (equipObj.weight * modifier)

    return {
        totalWeight: Math.round(newWeight*1000)/1000,
        equipArray: newArray
    }
}

export const incrementMagQty = (oldWeight, oldArray, gunObj, magObj, modifier) => {
    const newGunObj = gunObj.mag.map((obj)=>{
        if(obj.cap === magObj.cap){
            obj.qty += modifier
        }
        return obj
    })

    const newWeight = oldWeight += (magObj.weight * modifier)
    const newArray = oldArray.map((obj)=>{
        if(obj.name === newGunObj.name){
            obj = newGunObj
        }
        return obj
    })

    return {
        totalWeight: Math.round(newWeight*1000)/1000,
        equipArray: newArray
    }
}

export const calculateAmmoWeight = (gunObj) => {
    const ammoWeight =  gunObj.mag.reduce((accumulator, magObj)=>{
        return accumulator + (magObj.weight*magObj.qty)
    },0)
    return Math.round(ammoWeight * 1000)/1000
}

export const calculateGunAndAmmoWeight = (gunObj) => {
    const ammoWeight = calculateAmmoWeight(gunObj)
    const gunWeight = gunObj.weight * gunObj.qty
    return Math.round((ammoWeight + gunWeight)*1000)/1000
}

export const calculateFirearmsArrayWeight = (gunArray) => {
    const totalWeight = gunArray.reduce((accumulator, gunObj)=>{
        return accumulator + calculateGunAndAmmoWeight(gunObj)
    },0)
    return Math.round(totalWeight*1000)/1000
}

export const calculateObjectWeightDifference = (obj, modifier) => {
    const oldWeight = obj.qty * obj.weight
    const newWeight = (obj.qty + modifier) * obj.weight
    return Math.round((newWeight-oldWeight)*1000)/1000
}

export const modifyObjectQtyInArray = (array, obj, modifier = 0) => {
    return array.map((element)=>{
        if(element.name === obj.name){
            element.qty += modifier
        }
        return element
    })
}

export const removeObjectFromArray = (array, obj) => {
    return array.filter((element)=>{
        return element.name !== obj.name
    })
}