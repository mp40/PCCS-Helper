import { equipment } from '../data/equipmentList';

const findGear = (findName => equipment[findName]);


const filterEquipment = (findType) => {
  const equipmentList = equipment();
  if (findType.length === 0) {
    return equipmentList;
  }

  const findTag = element => findType.includes(element);

  return equipmentList.filter(equipmentObject => equipmentObject.tags.some(findTag));
};

const createFilterSet = (equipmentList) => {
  const tagArray = equipmentList.reduce((accumulator, obj) => [...accumulator, ...obj.tags], []);
  return Array.from(new Set(tagArray));
};

export {
  findGear,
  filterEquipment,
  createFilterSet,
};
