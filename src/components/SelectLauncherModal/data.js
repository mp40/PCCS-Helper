export const emptyLauncher = {
  name: '',
  list: 'launchers',
  qty: 1,
  length: '',
  weight: '',
  rt: '',
  rof: '-',
  mag: [{ type: '', weight: '-', cap: '' }],
  mr: '',
  sab: '',
  aim: {
    ac: [],
    mod: [],
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
