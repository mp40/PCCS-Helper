class GunTableLine {
  constructor(data, aim, tag, array) {
    this.dataType = data;
    this.aim = aim;
    this.tag = tag;
    this.array = array;
  }
}

const dataType = (name = '', short = '', data = '') => ({
  name,
  short,
  data,
});

const returnGunTableLine = (data, gunObj, aimIndex, tagAndArray) => data.map((element, index) => new GunTableLine(
  dataType(...element),
  [gunObj.aim.ac[aimIndex + index], gunObj.aim.mod[aimIndex + index]],
  ...tagAndArray[index],
));

const emptyLine = lineLength => new Array(lineLength).fill('');

const checkIfShotgun = list => list === 'shotguns';

const createLineFour = (gunObj, has3RB) => {
  let tag = ['', ''];
  let array = emptyLine(gunObj.tof.length);

  if (gunObj.projectiles.length > 1 && !has3RB) {
    const projectile = gunObj.projectiles[1].type;
    tag = [projectile, 'PEN'];
    array = gunObj.projectiles[1].pen;
  }
  if (gunObj.projectiles.length > 1 && has3RB) {
    tag = ['', 'DC'];
    array = gunObj.projectiles[1].dc;
  }

  return new GunTableLine(
    dataType('Reload', 'RT', gunObj.rt),
    [gunObj.aim.ac[3], gunObj.aim.mod[3]],
    tag,
    array,
  );
};

const createLineFive = (gunObj, has3RB) => {
  let tag = ['', ''];
  let array = emptyLine(gunObj.tof.length);

  if (gunObj.projectiles.length > 1 && !has3RB) {
    tag[1] = 'DC';
    array = gunObj.projectiles[1].dc;
  }
  if (gunObj.projectiles.length > 2 && has3RB) {
    tag = [gunObj.projectiles[2].type, 'PEN'];
    array = gunObj.projectiles[2].pen;
  }

  return new GunTableLine(
    dataType('ROF', 'ROF', gunObj.rof),
    [gunObj.aim.ac[4], gunObj.aim.mod[4]],
    tag,
    array,
  );
};

const createLineSix = (gunObj, has3RB) => {
  let tag = ['', ''];
  let array = emptyLine(gunObj.tof.length);

  if (gunObj.projectiles.length > 2 && has3RB) {
    tag = ['', 'DC'];
    array = gunObj.projectiles[2].dc;
  }

  return new GunTableLine(
    dataType(),
    [gunObj.aim.ac[5], gunObj.aim.mod[5]],
    tag,
    array,
  );
};

const createLineSeven = (gunObj, has3RB) => {
  let tag = ['', ''];
  let array = emptyLine(gunObj.tof.length);

  if (gunObj.projectiles.length > 2 && !has3RB) {
    tag = [gunObj.projectiles[2].type, 'PEN'];
    array = gunObj.projectiles[2].pen;
  }
  return new GunTableLine(
    dataType('Capacity', 'Cap', gunObj.mag[0].cap),
    [gunObj.aim.ac[6], gunObj.aim.mod[6]],
    tag,
    array,
  );
};

const createLineEight = (gunObj, has3RB) => {
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

  return new GunTableLine(
    dataType('AW', 'AW', gunObj.mag[0].weight),
    [gunObj.aim.ac[7], gunObj.aim.mod[7]],
    tag,
    array,
  );
};

const returnLineOneToThree = (gunObj, has3RB) => {
  const lastTag = () => (has3RB ? [gunObj.projectiles[1].type, 'PEN'] : ['', '']);
  const lastArray = () => (has3RB ? gunObj.projectiles[1].pen : emptyLine(gunObj.tof.length));

  const data = [
    ['Length', 'L', gunObj.length],
    ['Weight', 'W', gunObj.weight],
    [undefined],
  ];
  const tagAndArray = [
    [[gunObj.projectiles[0].type, 'PEN'], gunObj.projectiles[0].pen],
    [['', 'DC'], gunObj.projectiles[0].dc],
    [lastTag(), lastArray()],
  ];
  return returnGunTableLine(data, gunObj, 0, tagAndArray);
};

const returnLineNineTenEleven = (gunObj) => {
  const hasMa = (ma, arrayMa, array) => (ma ? arrayMa : array);
  const data = [
    ['', '', gunObj.mag[0].type],
    ['KnockDown', 'KD', gunObj.kd],
    ['SAB', 'SAB', gunObj.sab],
  ];
  const tagAndArray = [
    [hasMa(gunObj.ma, ['', 'MA'], ['', '']), hasMa(gunObj.ma, gunObj.ma, emptyLine(gunObj.tof.length))],
    [['', 'BA'], gunObj.ba],
    [['', 'TOF'], gunObj.tof],
  ];
  return returnGunTableLine(data, gunObj, 8, tagAndArray);
};

const returnLinesFourToEight = (gunObj, has3RB) => [
  createLineFour(gunObj, has3RB),
  createLineFive(gunObj, has3RB),
  createLineSix(gunObj, has3RB),
  createLineSeven(gunObj, has3RB),
  createLineEight(gunObj, has3RB),
];

const returnShotgunLinesFourToEight = (gunObj) => {
  const data = [
    ['Reload', 'RT', gunObj.rt],
    ['ROF', 'ROF', gunObj.rof],
    [undefined],
    ['Capacity', 'Cap', gunObj.mag[0].cap],
    ['AW', 'AW', gunObj.mag[0].weight],
  ];
  const tagAndArray = [
    [[gunObj.projectiles[1].type[0], 'PEN'], gunObj.projectiles[1].pen],
    [[gunObj.projectiles[1].type[1], 'DC'], gunObj.projectiles[1].dc],
    [['', 'SALM'], gunObj.projectiles[1].salm],
    [[gunObj.projectiles[1].type[2], 'BPHC'], gunObj.projectiles[1].bphc],
    [['', 'PR'], gunObj.projectiles[1].pr],
  ];
  return returnGunTableLine(data, gunObj, 3, tagAndArray);
};

export const buildArrayForGunTable = (gunObj) => {
  const has3RB = Boolean(gunObj.trb);
  const isShotgun = checkIfShotgun(gunObj.list);

  const arrayForGunTable = returnLineOneToThree(gunObj, has3RB);

  if (isShotgun) {
    arrayForGunTable.push(...returnShotgunLinesFourToEight(gunObj));
  } else {
    arrayForGunTable.push(...returnLinesFourToEight(gunObj, has3RB));
  }

  arrayForGunTable.push(...returnLineNineTenEleven(gunObj));

  return arrayForGunTable;
};
