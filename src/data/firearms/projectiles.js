// 7.62 NATO Rifles
// M14, L1A1
export const averageRifle762FMJ = {
  type: 'FMJ',
  pen: [19, 19, 17, 16, 14, 10, 7.3, 5.3],
  dc: [8, 8, 8, 7, 7, 7, 6, 5],
};

// 7.62 x 39 Rifles
// AK47, AKM
export const averageRifle762x39FMJ = {
  type: 'FMJ',
  pen: [11, 11, 9.8, 8.6, 7.5, 4.8, 3.1, 2.0],
  dc: [7, 7, 6, 6, 6, 5, 3, 2],
};

// 5.56 NATO Rifles
// M16, M16A1
export const averageRifle556FMJ = {
  type: 'FMJ',
  pen: [17, 16, 15, 13, 11, 7.1, 4.5, 2.9],
  dc: [6, 6, 6, 6, 5, 4, 3, 2],
};
// M16, M16A1
export const averageRifle556JHP = {
  type: 'JHP',
  pen: [16, 15, 14, 12, 11, 6.8, 4.4, 2.8],
  dc: [8, 8, 8, 7, 7, 6, 5, 3],
};

// M16, M16A1
export const averageRifle556AP = {
  type: 'AP',
  pen: [23, 22, 20, 18, 16, 10, 6.4, 4.1],
  dc: [6, 6, 6, 6, 5, 4, 3, 2],
};

// .30 Carbine Rifles
// M1 Carbine, M2 Carbine
export const averageRifle30CarbineFMJ = {
  type: 'FMJ',
  pen: [6.8, 6.4, 5.8, 4.9, 4.2, 2.4, 1.4, 0.8],
  dc: [6, 6, 5, 5, 4, 2, 1, 1],
};

// 9mm Para SMGs
// Mp5, Uzi
export const aboveAverageSMG9mmParabellumFMJ = {
  type: 'FMJ',
  pen: [2.5, 2.3, 2, 1.5, 1.2, 0.5, 0.2, 0.1],
  dc: [3, 3, 3, 2, 2, 1, 1, 1],
};

// Mp5, Uzi
export const aboveAverageSMG9mmParabellumJHP = {
  type: 'JHP',
  pen: [2.4, 2.2, 1.9, 1.5, 1.1, 0.5, 0.2, 0.1],
  dc: [5, 5, 4, 3, 2, 1, 1, 1],
};

// Sten Mk2, Owen Mk1
export const averageSMG9mmParabellumFMJ = {
  type: 'FMJ',
  pen: [2.3, 2.1, 1.8, 1.4, 1.1, 0.5, 0.2, 0.1],
  dc: [3, 3, 3, 2, 1, 1, 1, 1],
};

// F1
export const belowAverageSMG9mmParabellumFMJ = {
  type: 'FMJ',
  pen: [2.1, 1.9, 1.6, 1.3, 1.0, 0.4, 0.2, 0.1],
  dc: [3, 3, 2, 2, 1, 1, 1, 1],
};

// 45ACP SMGs
// M3A1, Thompson M1A1
export const averageSMG45AcpFMJ = {
  type: 'FMJ',
  pen: [1.7, 1.5, 1.3, 1.0, 0.8, 0.4, 0.2, 0.1],
  dc: [3, 3, 2, 1, 1, 1, 1, 1],
};

// 7.62mm Tokarev SMGs
// PPSh 41, PPS 43
export const averageSMG762TokarevFMJ = {
  type: 'FMJ',
  pen: [3.6, 3.3, 2.8, 2.3, 1.8, 0.8, 0.4, 0.2],
  dc: [4, 4, 3, 2, 2, 1, 1, 1],
};

// 9mm Para Pistols
// FN Mk 1, MAB PA15
export const averagePistol9mmParabellumFMJ = belowAverageSMG9mmParabellumFMJ;

// 7.62 NATO Sniper/MGs
// M40A1, M60
export const averageOther762FMJ = {
  type: 'FMJ',
  pen: [20, 19, 18, 16, 15, 11, 7.7, 5.5],
  dc: [8, 8, 8, 7, 7, 7, 6, 5],
};
