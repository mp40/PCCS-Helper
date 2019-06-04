const equipment = require('../data/equipmentList');

const findGear = (findName => equipment[findName]);

const filterEquipment = (findType) => {
  if (findType.length === 0) {
    return equipment;
  }
  const results = {};

  for (const obj in equipment) {
    for (let i = 0; i < findType.length; i += 1) {
      if (equipment[obj].tags.includes(findType[i])) {
        results[obj] = equipment[obj];
      }
    }
  }

  return results;
};

const createArrayOfEquipment = (equipmentList) => {
  const equipmentArray = [];
  for (const obj in equipmentList) {
    const newObj = {
      name: obj,
      weight: equipmentList[obj].weight,
    };
    equipmentArray.push(newObj);
  }
  return equipmentArray;
};

const createFilterSet = (equipmentList) => {
  const tagArray = [];

  for (const obj in equipmentList) {
    tagArray.push(equipmentList[obj].tags);
  }
  return Array.from(new Set(tagArray.flat()));
};

export {
  findGear,
  filterEquipment,
  createArrayOfEquipment,
  createFilterSet,
};
