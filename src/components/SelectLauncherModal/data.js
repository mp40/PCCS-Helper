export const emptyLauncher = {
  name: '',
  list: 'launchers',
  qty: 1,
  length: '',
  weight: 0,
  rt: 0,
  rof: '-',
  mag: [{ type: '', weight: '-', cap: '' }],
  mr: 0,
  sab: 0,
  aim: {
    ac: [0],
    mod: [0],
  },
  projectiles: [
    {
      type: 'HEAT',
      data: 'ballistic',
      pen: ['', '', '', ''],
      dc: ['', '', '', ''],
    },
  ],
  explosive: [
    {
      type: 'HEAT',
      data: 'explosive',
      pen: ['', '', '', '', '', ''],
      dc: ['', '', '', '', '', ''],
      bshc: ['', '', '', '', '', ''],
      bc: ['', '', '', '', '', ''],
    },
  ],
  aoi: ['', '', '', ''],
  ba: ['', '', '', ''],
  tof: ['', '', '', ''],
};
