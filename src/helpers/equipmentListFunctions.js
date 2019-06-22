import { equipment } from '../data/equipmentList';

export const filterEquipment = (findType) => {
  const equipmentList = equipment();
  if (findType.length === 0) {
    return equipmentList;
  }

  const findTag = element => findType.includes(element);

  return equipmentList.filter(equipmentObject => equipmentObject.tags.some(findTag));
};

export const createFilterSet = (equipmentList) => {
  const tagArray = equipmentList.reduce((accumulator, obj) => [...accumulator, ...obj.tags], []);
  return Array.from(new Set(tagArray));
};

export const toggleTagsInList = ((list, tag) => {
  if (list.includes(tag)) {
    return list.filter(element => element !== tag);
  }
  return [...list, tag];
});
