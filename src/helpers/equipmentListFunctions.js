import { equipment } from '../data/equipmentList';

export const filterEquipment = (findType) => {
  const equipmentList = equipment();

  if (findType.length === 0) {
    return equipmentList;
  }

  const findTag = (element) => findType.includes(element);

  return equipmentList.filter((equipmentObject) => equipmentObject.tags.some(findTag));
};
