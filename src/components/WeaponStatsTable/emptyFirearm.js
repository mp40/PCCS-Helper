const emptyFirearm = () => ({
  name: 'None',
  list: '',
  calibre: '',
  qty: 1,
  length: 0,
  weight: 0,
  rt: 0,
  rof: '',
  mag: [{ type: 'None', weight: 0, cap: 0, qty: 0 }],
  kd: 0,
  sab: 0,
  aim: {
    ac: [0],
    mod: [0],
  },
  projectiles: [
    {
      type: 'FMJ',
      pen: [0, '', '', '', '', '', '', ''],
      dc: [0, '', '', '', '', '', '', ''],
    },
  ],
  ma: [0, '', '', '', '', '', '', ''],
  ba: [0, '', '', '', '', '', '', ''],
  tof: [0, '', '', '', '', '', '', ''],
  offical: false,
});

export default emptyFirearm;
