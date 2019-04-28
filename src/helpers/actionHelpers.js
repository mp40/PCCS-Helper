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