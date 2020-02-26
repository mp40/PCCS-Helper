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

export const createModificationObject = (formType) => {
  if (formType === 'Firearm') {
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
  return (modification, weight, type) => {
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
};

/*
 handleSubmit = () => {
    const { handleModification } = this.props;
    const { weight, capacity, type } = this.state;
    if (!Number(weight)) {
      this.setState({ warning: true });
      return;
    }
    if (!Number(capacity) || capacity % 1 !== 0) {
      this.setState({ warning: true });
      return;
    }
    if (type.length < 2) {
      this.setState({ warning: true });
      return;
    }

    const newCustomMag = {
      type,
      weight: Number(weight),
      cap: Number(capacity),
      qty: 0,
      custom: true,
    };
    handleModification(newCustomMag);
  }
*/