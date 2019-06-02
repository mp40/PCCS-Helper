const emptyLine = lineLength => new Array(lineLength).fill('');

const checkIfShotgun = list => list === 'shotguns';

const createLineOne = gunObj => ({
  dataType: {
    name: 'Length',
    short: 'L',
    data: gunObj.length,
  },
  aim: [gunObj.aim.ac[0], gunObj.aim.mod[0]],
  tag: [gunObj.projectiles[0].type, 'PEN'],
  array: gunObj.projectiles[0].pen,
});

const createLineTwo = gunObj => ({
  dataType: {
    name: 'Weight',
    short: 'W',
    data: gunObj.weight,
  },
  aim: [gunObj.aim.ac[1], gunObj.aim.mod[1]],
  tag: ['', 'DC'],
  array: gunObj.projectiles[0].dc,
});

const createLineThree = (gunObj, has3RB) => ({
  dataType: {
    name: '',
    short: '',
    data: '',
  },
  aim: [gunObj.aim.ac[2], gunObj.aim.mod[2]],
  tag: has3RB ? [gunObj.projectiles[1].type, 'PEN'] : ['', ''],
  array: has3RB ? gunObj.projectiles[1].pen : emptyLine(gunObj.tof.length),
});

const createLineFour = (gunObj, has3RB, isShotgun) => {
  let tag = ['', ''];
  let array = emptyLine(gunObj.tof.length);

  if (gunObj.projectiles.length > 1 && !has3RB) {
    const projectile = isShotgun ? gunObj.projectiles[1].type[0] : gunObj.projectiles[1].type;
    tag = [projectile, 'PEN'];
    array = gunObj.projectiles[1].pen;
  }
  if (gunObj.projectiles.length > 1 && has3RB) {
    tag = ['', 'DC'];
    array = gunObj.projectiles[1].dc;
  }
  return {
    dataType: {
      name: 'Reload',
      short: 'RT',
      data: gunObj.rt,
    },
    aim: [gunObj.aim.ac[3], gunObj.aim.mod[3]],
    tag,
    array,
  };
};

const createLineFive = (gunObj, has3RB, isShotgun) => {
  let tag = ['', ''];
  let array = emptyLine(gunObj.tof.length);
  if (gunObj.projectiles.length > 1 && !has3RB) {
    const firstTag = isShotgun ? gunObj.projectiles[1].type[1] : '';
    tag = [firstTag, 'DC'];
    array = gunObj.projectiles[1].dc;
  }
  if (gunObj.projectiles.length > 2 && has3RB) {
    tag = [gunObj.projectiles[2].type, 'PEN'];
    array = gunObj.projectiles[2].pen;
  }
  return {
    dataType: {
      name: 'ROF',
      short: 'ROF',
      data: gunObj.rof,
    },
    aim: [gunObj.aim.ac[4], gunObj.aim.mod[4]],
    tag,
    array,
  };
};

const createLineSix = (gunObj, has3RB, isShotgun) => {
  let tag = ['', ''];
  let array = emptyLine(gunObj.tof.length);
  if (gunObj.projectiles.length > 2 && has3RB) {
    tag = ['', 'DC'];
    array = gunObj.projectiles[2].dc;
  }
  if (isShotgun) {
    tag = ['', 'SALM'];
    array = gunObj.projectiles[1].salm;
  }
  return {
    dataType: {
      name: '',
      short: '',
      data: '',
    },
    aim: [gunObj.aim.ac[5], gunObj.aim.mod[5]],
    tag,
    array,
  };
};

const createLineSeven = (gunObj, has3RB, isShotgun) => {
  let tag = ['', ''];
  let array = emptyLine(gunObj.tof.length);

  if (gunObj.projectiles.length > 2 && !has3RB) {
    tag = [gunObj.projectiles[2].type, 'PEN'];
    array = gunObj.projectiles[2].pen;
  }
  if (isShotgun) {
    tag = [gunObj.projectiles[1].type[2], 'BPHC'];
    array = gunObj.projectiles[1].bphc;
  }

  return {
    dataType: {
      name: 'Capacity',
      short: 'Cap',
      data: gunObj.mag[0].cap,
    },
    aim: [gunObj.aim.ac[6], gunObj.aim.mod[6]],
    tag,
    array,
  };
};

const createLineEight = (gunObj, has3RB, isShotgun) => {
  let tag = ['', ''];
  let array = emptyLine(gunObj.tof.length);
  if (gunObj.projectiles.length > 2 && !has3RB) {
    tag = ['', 'DC'];
    array = gunObj.projectiles[2].dc;
  }
  if (has3RB) {
    tag = ['', '3RB'];
    array = gunObj.trb;
  }
  if (isShotgun) {
    tag = ['', 'PR'];
    array = gunObj.projectiles[1].pr;
  }
  return {
    dataType: {
      name: 'AW',
      short: 'AW',
      data: gunObj.mag[0].weight,
    },
    aim: [gunObj.aim.ac[7], gunObj.aim.mod[7]],
    tag,
    array,
  };
};

const createLineNine = gunObj => ({
  dataType: {
    name: '',
    short: '',
    data: gunObj.mag[0].type,
  },
  aim: [gunObj.aim.ac[8], gunObj.aim.mod[8]],
  tag: gunObj.ma ? ['', 'MA'] : ['', ''],
  array: gunObj.ma ? gunObj.ma : emptyLine(gunObj.tof.length),
});

const createLineTen = gunObj => ({
  dataType: {
    name: 'KnockDown',
    short: 'KD',
    data: gunObj.kd,
  },
  aim: [gunObj.aim.ac[9], gunObj.aim.mod[9]],
  tag: ['', 'BA'],
  array: gunObj.ba,
});

const createLineEleven = gunObj => ({
  dataType: {
    name: 'SAB',
    short: 'SAB',
    data: gunObj.sab,
  },
  aim: [gunObj.aim.ac[10], gunObj.aim.mod[10]],
  tag: ['', 'TOF'],
  array: gunObj.tof,
});

export const buildArrayForGunTable = (gunObj) => {
  const has3RB = Boolean(gunObj.trb);
  const isShotgun = checkIfShotgun(gunObj.list);

  return [
    createLineOne(gunObj),
    createLineTwo(gunObj),
    createLineThree(gunObj, has3RB),
    createLineFour(gunObj, has3RB, isShotgun),
    createLineFive(gunObj, has3RB, isShotgun),
    createLineSix(gunObj, has3RB, isShotgun),
    createLineSeven(gunObj, has3RB, isShotgun),
    createLineEight(gunObj, has3RB, isShotgun),
    createLineNine(gunObj),
    createLineTen(gunObj),
    createLineEleven(gunObj),
  ];
};
