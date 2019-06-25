class GunTableLine {
  constructor(name, short, data, aim, tag, array) {
    this.dataType = {
      name,
      short,
      data,
    };
    this.aim = aim;
    this.tag = tag;
    this.array = array;
  }
}

const emptyLine = lineLength => new Array(lineLength).fill('');

const checkIfShotgun = list => list === 'shotguns';

const createLineOne = (gunObj => new GunTableLine(
  'Length',
  'L',
  gunObj.length,
  [gunObj.aim.ac[0], gunObj.aim.mod[0]],
  [gunObj.projectiles[0].type, 'PEN'],
  gunObj.projectiles[0].pen)
);

const createLineTwo = (gunObj => new GunTableLine(
  'Weight',
  'W',
  gunObj.weight,
  [gunObj.aim.ac[1], gunObj.aim.mod[1]],
  ['', 'DC'],
  gunObj.projectiles[0].dc)
);

const createLineThree = ((gunObj, has3RB) => new GunTableLine(
  '',
  '',
  '',
  [gunObj.aim.ac[2], gunObj.aim.mod[2]],
  has3RB ? [gunObj.projectiles[1].type, 'PEN'] : ['', ''],
  has3RB ? gunObj.projectiles[1].pen : emptyLine(gunObj.tof.length),
));

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

  return new GunTableLine(
    'Reload',
    'RT',
    gunObj.rt,
    [gunObj.aim.ac[3], gunObj.aim.mod[3]],
    tag,
    array,
  );
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

  return new GunTableLine(
    'ROF',
    'ROF',
    gunObj.rof,
    [gunObj.aim.ac[4], gunObj.aim.mod[4]],
    tag,
    array,
  );
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

  return new GunTableLine(
    '',
    '',
    '',
    [gunObj.aim.ac[5], gunObj.aim.mod[5]],
    tag,
    array,
  );
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

  return new GunTableLine(
    'Capacity',
    'Cap',
    gunObj.mag[0].cap,
    [gunObj.aim.ac[6], gunObj.aim.mod[6]],
    tag,
    array,
  );
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

  return new GunTableLine(
    'AW',
    'AW',
    gunObj.mag[0].weight,
    [gunObj.aim.ac[7], gunObj.aim.mod[7]],
    tag,
    array,
  );
};

const createLineNine = gunObj => (
  new GunTableLine(
    '',
    '',
    gunObj.mag[0].type,
    [gunObj.aim.ac[8], gunObj.aim.mod[8]],
    gunObj.ma ? ['', 'MA'] : ['', ''],
    gunObj.ma ? gunObj.ma : emptyLine(gunObj.tof.length),
  )

);

const createLineTen = gunObj => (
  new GunTableLine(
    'KnockDown',
    'KD',
    gunObj.kd,
    [gunObj.aim.ac[9], gunObj.aim.mod[9]],
    ['', 'BA'],
    gunObj.ba,
  )
);

const createLineEleven = gunObj => (
  new GunTableLine(
    'SAB',
    'SAB',
    gunObj.sab,
    [gunObj.aim.ac[10], gunObj.aim.mod[10]],
    ['', 'TOF'],
    gunObj.tof,
  )
);

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
