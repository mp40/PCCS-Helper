import { equipment } from '../../../data/equipmentList';

export const filterEquipment = (filterList) => {
  if (filterList.length < 1) {
    return equipment();
  }

  return equipment().filter((obj) => {
    let match = true;

    if (obj.tags.length < filterList.length) {
      return false;
    }

    for (let i = 0; i < filterList.length; i += 1) {
      if (!obj.tags.includes(filterList[i])) {
        match = false;
        break;
      }
    }

    return match;
  });
};
