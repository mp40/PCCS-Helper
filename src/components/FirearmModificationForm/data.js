// export const magazine = [
//   {
//     text: 'Capacity',
//     idRef: 'customMagCapacityInput',
//   },
//   {
//     text: 'Weight',
//     idRef: 'customMagWeightInput',
//   },
//   {
//     text: 'Type',
//     idRef: 'customMagTypeInput',
//   },
// ];

// export const firearm = [
//   {
//     text: 'Note',
//     idRef: 'modifyWeightNoteInput',
//   },
//   {
//     text: 'Weight',
//     idRef: 'modifyWeightValueInput',
//   },
// ];

export const createModificationObject = (type) => {
  if (type === 'firearm') {
    return (modification, weight) => {
      if (modification.length < 1) {
        return false;
      }
      if (!Number(weight)) {
        return false;
      }
      return {
        note: modification,
        weightMod: Number(weight),
      };
    };
  }
};
