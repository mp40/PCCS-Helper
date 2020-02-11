//9mm Para

// other than fmj
export const carlGJHP = {
  type: 'JHP',
  pen: [2.2, 2, 1.8, 1.7, 1.3, 0.4, 0.2, 0.1],
  dc: [5, 4, 4, 3, 2, 1, 1, 1],
};

export const carlGAP = {
  type: 'AP',
  pen: [3.2, 3, 2.5, 1.9, 1.5, 0.6, 0.3, 0.1],
  dc: [3, 3, 2, 2, 1, 1, 1, 1],
};

// Carl G, sten, owen
export const averageSMG9mmParabellumFMJ = {
  type: 'FMJ',
  pen: [2.3, 2.1, 1.8, 1.4, 1.1, 0.5, 0.2, 0.1],
  dc: [3, 3, 3, 2, 1, 1, 1, 1],
};

// mat 49
export const aboveAverageSMG9mmParabellumFMJ = {
  type: 'FMJ',
  pen: [2.4, 2.2, 1.9, 1.5, 1.1, 0.5, 0.2, 0.1],
  dc: [3, 3, 3, 2, 2, 1, 1, 1],
};

// f1
export const belowAverageSMG9mmParabellumFMJ = {
  type: 'FMJ',
  pen: [2.1, 1.9, 1.6, 1.3, 1.0, 0.4, 0.2, 0.1],
  dc: [3, 3, 2, 2, 1, 1, 1, 1],
};

// fn mk1, mab pa15
export const averagePistol9mmParabellumFMJ = belowAverageSMG9mmParabellumFMJ;

//45ACP

// m3a1, tommy
export const averageSMG45AcpFMJ = {
  type: 'FMJ',
  pen: [1.7, 1.5, 1.3, 1.0, 0.8, 0.4, 0.2, 0.1],
  dc: [3, 3, 2, 1, 1, 1, 1, 1],
};

// m1911
export const averagePistol45AcpFMJ = {
  type: 'FMJ',
  pen: [1.6, 1.5, 1.2, 1.0, 0.8, 0.3, 0.2, 0.1],
  dc: [3, 3, 2, 1, 1, 1, 1, 1],
};

// 7.62mm Tokarev

// ppsh, pps43
export const averageSMG762TokarevFMJ = {
  type: 'FMJ',
  pen: [3.6, 3.3, 2.8, 2.3, 1.8, 0.8, 0.4, 0.2],
  dc: [4, 4, 3, 2, 2, 1, 1, 1],
};

// tokarev tt33 pistol
export const averagePistol762TokarevFMJ = {
  type: 'FMJ',
  pen: [2.6, 2.4, 2, 1.6, 1.3, 0.6, 0.2, 0.1],
  dc: [3, 3, 2, 2, 1, 1, 1, 1],
};


//Aims

//SMGs

export const owen = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  mod: [-23, -13, -10, -8, -7, -5, -4, -4, -3, -2, -1],
};

export const tommy = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  mod: [-24, -14, -10, -8, -7, -6, -5, -4, -3, -2, -1],
};

export const f1 = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  mod: [-23, -12, -9, -8, -6, -5, -4, -3, -3, -2],
};

export const mat49 = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  mod: [-23, -12, -9, -8, -6, -5, -4, -3, -2],
};

export const ppsh = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  mod: [-23, -13, -9, -8, -6, -5, -4, -3, -2],
};

export const pps42 = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  mod: [-22, -12, -9, -7, -6, -5, -4, -3, -2],
};

export const carlG = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8],
  mod: [-22, -12, -9, -7, -6, -5, -4, -3],
};

export const sten = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8],
  mod: [-22, -12, -9, -7, -6, -5, -4, -3],
};

export const m3a1 = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8],
  mod: [-23, -12, -9, -8, -6, -5, -4, -3],
};


// pistols

// fn mk1, lebel m1892, tokarev tt33,
export const averagePistol6Aims = {
  ac: [1, 2, 3, 4, 5, 6],
  mod: [-17, -11, -10, -9, -8, -7],
};

// m1911, mab pa15
export const belowAveragePistol6Aims = {
  ac: [1, 2, 3, 4, 5, 6],
  mod: [-18, -11, -10, -9, -8, -7],
};

export const makarovPM = {
  ac: [1, 2, 3, 4, 5],
  mod: [-16, -11, -10, -9, -8],
};

// smg mags

export const carlGMag = { type: 'Mag', weight: 1.7, cap: 36, qty: 0 };

export const ppsMag = { type: 'Mag', weight: 1.2, cap: 35, qty: 0 };

export const f1Mag = { type: 'Mag', weight: 1.4, cap: 34, qty: 0 };
export const owenMag = { type: 'Mag', weight: 1.4, cap: 34, qty: 0 };

export const mat49Mag = { type: 'Mag', weight: 1.5, cap: 32, qty: 0 };

export const stenMag = { type: 'Mag', weight: 1.3, cap: 32, qty: 0 };

export const m3a1Mag = { type: 'Mag', weight: 2.0, cap: 30, qty: 0 };
export const tommyMag = { type: 'Mag', weight: 2.0, cap: 30, qty: 0 };

export const ppshDrum = { type: 'Drm', weight: 2.4, cap: 71, qty: 0 };

// rifle aims

// battle rifle aims
/*
ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
mod: [-24, -14, -9, -8, -6, -5, -4, -3, -2, -1, 0],
*/

// bolt actions
/*
ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
mod: [-23, -12, -9, -7, -6, -5, -4, -3, -2, -1, 0],
*/

// ak aims
/*
ac: [1, 2, 3, 4, 5, 6, 7, 8, 9],
mod: [-23, -12, -9, -7, -6, -4, -3, -2, -1],
*/

export const m1GarandAims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
  mod: [-23, -13, -9, -8, -6, -5, -4, -3, -2, -1, 0],
};

export const m14Aims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
  mod: [-24, -14, -10, -8, -6, -5, -4, -3, -2, -1, 0],
};

export const l1a1f1Aims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  mod: [-24, -14, -10, -8, -6, -5, -4, -3, -2, -1, 0],
};

export const fnfalAims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  mod: [-24, -13, -9, -8, -6, -5, -4, -3, -2, -1, 0],
};

// start
export const belowAverageverageRifle11Aims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  mod: [-24, -14, -9, -8, -6, -5, -4, -3, -2, -1, 0],
};
export const hkG3Aims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  mod: [-24, -14, -9, -8, -6, -5, -4, -3, -2, -1, 0],
};
export const l1a1Aims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  mod: [-24, -14, -9, -8, -6, -5, -4, -3, -2, -1, 0],
};
// end

// start
export const averageRifle11Aims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  mod: [-23, -12, -9, -7, -6, -5, -4, -3, -2, -1, 0],
};
export const m1949Aims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  mod: [-23, -12, -9, -7, -6, -5, -4, -3, -2, -1, 0],
};
export const svt40 = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  mod: [-23, -12, -9, -7, -6, -5, -4, -3, -2, -1, 0],
};
export const mas36Aims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  mod: [-23, -12, -9, -7, -6, -5, -4, -3, -2, -1, 0],
};
export const kar98Aims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  mod: [-23, -12, -9, -7, -6, -5, -4, -3, -2, -1, 0],
};
// end

// start
export const improvedRifle11Aims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  mod: [-21, -11, -9, -7, -6, -4, -3, -2, -2, -1, 0],
};
export const m1ANDm2CarbineAims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  mod: [-21, -11, -9, -7, -6, -4, -3, -2, -2, -1, 0],
};
// end

// start
export const aboveAverageRifle11Aims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  mod: [-22, -12, -9, -7, -6, -5, -4, -3, -2, -1, 0],
};
export const m16ANDm16a1Aims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  mod: [-22, -12, -9, -7, -6, -5, -4, -3, -2, -1, 0],
};
// end

export const sksAims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  mod: [-23, -12, -9, -7, -6, -5, -3, -3, -2, -1],
};


export const car16Aims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  mod: [-22, -11, -9, -7, -5, -4, -3, -2, -1],
};

export const karabinAims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  mod: [-22, -12, -9, -7, -6, -4, -3, -2, -1],
};

// start
export const averageRifle9Aims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  mod: [-23, -12, -9, -7, -6, -4, -3, -2, -1],
};
export const ak47ANDakmANDak74Aims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  mod: [-23, -12, -9, -7, -6, -4, -3, -2, -1],
};
export const famasAims = {
  ac: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  mod: [-23, -12, -9, -7, -6, -4, -3, -2, -1],
};
// end


// Rifles FMJs

export const car16FMJ = {
  type: 'FMJ',
  pen: [14, 13, 12, 11, 9.3, 5.9, 3.7, 2.3],
  dc: [6, 6, 6, 5, 5, 4, 3, 2],
};

export const l1a1f1FMJ = {
  type: 'FMJ',
  pen: [18, 18, 17, 15, 14, 9.8, 7.0, 5.0],
  dc: [8, 8, 8, 7, 7, 6, 6, 5],
};

export const m14FMJ = {
  type: 'FMJ',
  pen: [19, 19, 17, 16, 14, 10, 7.3, 5.3],
  dc: [8, 8, 8, 7, 7, 7, 6, 5],
};

export const l1a1FMJ = {
  type: 'FMJ',
  pen: [19, 19, 17, 16, 14, 10, 7.3, 5.3],
  dc: [8, 8, 8, 7, 7, 7, 6, 5],
};

export const fnfalFMJ = {
  type: 'FMJ',
  pen: [19, 19, 17, 16, 14, 10, 7.4, 5.3],
  dc: [8, 8, 8, 7, 7, 7, 6, 5],
};

export const hkg3FMJ = {
  type: 'FMJ',
  pen: [17, 16, 15, 14, 13, 8.9, 6.3, 4.5],
  dc: [8, 7, 7, 7, 7, 6, 6, 4],
};

export const karabinFMJ = {
  type: 'FMJ',
  pen: [23, 22, 21, 20, 18, 14, 11, 8.9],
  dc: [8, 8, 8, 8, 8, 7, 7, 6],
};

export const mas36FMJ = {
  type: 'FMJ',
  pen: [18, 18, 17, 15, 14, 9.8, 7, 5.1],
  dc: [8, 7, 7, 7, 7, 6, 6, 4],
};

export const kar98FMJ = {
  type: 'FMJ',
  pen: [18, 17, 16, 15, 14, 11, 8.1, 6.2],
  dc: [8, 8, 8, 7, 7, 7, 6, 6],
};

export const ak47ANDakmFMJ = {
  type: 'FMJ',
  pen: [11, 11, 9.8, 8.6, 7.5, 4.8, 3.1, 2.0],
  dc: [7, 7, 6, 6, 6, 5, 3, 2],
};

export const ak74FMJ = {
  type: 'FMJ',
  pen: [14, 13, 12, 10, 9.1, 5.8, 3.7, 2.4],
  dc: [6, 6, 5, 5, 4, 3, 3, 2],
};

export const famasFMJ = {
  type: 'FMJ',
  pen: [15, 15, 13, 12, 10, 6.4, 4.1, 2.6],
  dc: [6, 6, 6, 6, 5, 4, 3, 2],
};

export const m16ANDm16m16a1 = {
  type: 'FMJ',
  pen: [17, 16, 15, 13, 11, 7.1, 4.5, 2.9],
  dc: [6, 6, 6, 6, 5, 4, 3, 2],
};

export const garandFMJ = {
  type: 'FMJ',
  pen: [22, 21, 20, 18, 17, 13, 9.3, 6.9],
  dc: [8, 8, 8, 8, 7, 7, 6, 6],
};

export const m1ANDm2CarbineFMJ = {
  type: 'FMJ',
  pen: [6.8, 6.4, 5.8, 4.9, 4.2, 2.4, 1.4, 0.8],
  dc: [6, 6, 5, 5, 4, 2, 1, 1],
};

export const m1949FMJ = {
  type: 'FMJ',
  pen: [18, 18, 17, 15, 14, 9.7, 7, 5],
  dc: [7, 7, 7, 7, 7, 6, 6, 5],
};

export const sksFMJ = {
  type: 'FMJ',
  pen: [12, 12, 11, 9.4, 8.4, 5.6, 3.8, 2.6],
  dc: [7, 7, 7, 6, 6, 5, 3, 2],
};

export const svt40FMJ = {
  type: 'FMJ',
  pen: [24, 23, 22, 21, 19, 15, 12, 9.4],
  dc: [8, 8, 8, 8, 8, 7, 7, 6],
};

// sniper rifles

export const m40a1FMJ = {
  type: 'FMJ',
  pen: [20, 19, 18, 16, 15, 11, 7.7, 5.5],
  dc: [8, 8, 8, 7, 7, 7, 6, 5],
};

export const svdFMJ = {
  type: 'FMJ',
  pen: [23, 22, 21, 19, 18, 14, 10, 7.8],
  dc: [8, 8, 8, 8, 8, 7, 7, 6],
};

export const m1903a4FMJ = {
  type: 'FMJ',
  pen: [23, 23, 21, 20, 18, 14, 10, 7.7],
  dc: [8, 8, 8, 8, 8, 7, 7, 6],
};

// mgs

export const bara2FMJ = {
  type: 'FMJ',
  pen: [20, 19, 18, 16, 15, 11, 8.1, 6.0],
  dc: [8, 8, 8, 7, 7, 7, 6, 6],
};

export const m1919a6 = {
  type: 'FMJ',
  pen: [22, 21, 20, 18, 17, 13, 9.3, 6.9],
  dc: [8, 8, 8, 7, 7, 7, 6, 6],
};

export const m1924FMJ = {
  type: 'FMJ',
  pen: [18, 17, 17, 15, 14, 9.8, 7, 5.1],
  dc: [8, 7, 7, 7, 7, 6, 6, 4],
};

export const m60FMJ = {
  type: 'FMJ',
  pen: [20, 19, 18, 16, 15, 11, 7.7, 5.5],
  dc: [8, 8, 8, 7, 7, 7, 6, 5],
};

export const rpdFMJ = {
  type: 'FMJ',
  pen: [11, 10, 9.4, 8.2, 7.2, 4.6, 3.0, 1.9],
  dc: [7, 7, 6, 6, 6, 5, 3, 2],
};

export const dpFMJ = {
  type: 'FMJ',
  pen: [24, 24, 22, 21, 19, 15, 12, 9.4],
  dc: [8, 8, 8, 8, 8, 7, 7, 6],
};
