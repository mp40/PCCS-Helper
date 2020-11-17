const firearmFormDetails = {
  title: 'Modify Weapon Weight',
  formClassName: 'modifyWeightForm',
  fields: [
    {
      heading: 'Note',
      idRef: 'modifyWeightNoteInput',
    },
    {
      heading: 'Weight',
      idRef: 'modifyWeightValueInput',
    },
  ],
};

const magazineFormDetails = {
  title: 'Custom Magazine Details',
  formClassName: 'customMagazineForm',
  fields: [
    {
      heading: 'Capacity',
      idRef: 'customMagCapacityInput',
    },
    {
      heading: 'Weight',
      idRef: 'customMagWeightInput',
    },
    {
      heading: 'Type',
      idRef: 'customMagTypeInput',
    },
  ],
};

export const getFormDetails = (formType) => (formType === 'Firearm' ? firearmFormDetails : magazineFormDetails);

const createFirearmModificationObject = () => (modification, weight) => {
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

const createMagazineModificationObject = () => (modification, weight, type) => {
  if (!Number(weight)) {
    return false;
  }
  if (!Number(modification) || modification % 1 !== 0) {
    return false;
  }
  if (type.length < 2) {
    return false;
  }
  return {
    type,
    weight: Number(weight),
    cap: Number(modification),
    qty: 0,
    custom: true,
  };
};

export const createModificationObject = (formType) => (formType === 'Firearm' ? createFirearmModificationObject() : createMagazineModificationObject());
