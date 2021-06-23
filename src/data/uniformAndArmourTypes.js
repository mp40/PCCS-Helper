export const uniformWeights = Object.freeze({
  Normal: 5,
  Tropical: 4.5,
  Winter: 7,
});

export const helmets = Object.freeze({
  'No Helmet': {
    name: 'No Helmet',
    pf: '0',
    bpf: '0',
    ac: '-',
  },
  M1: {
    name: 'M1',
    pf: 4,
    bpf: 4,
    ac: 'I',
    weight: 2.5,
    tags: ['USA', 'WW2', 'Cold War'],
  },
  'Mk 1': {
    name: 'Mk 1',
    pf: 4,
    bpf: 4,
    ac: 'I',
    weight: 2.2,
    tags: ['British', 'WW1', 'WW2'],
  },
  'Mk 4': {
    name: 'Mk 4',
    pf: 4,
    bpf: 4,
    ac: 'I',
    weight: 2.4,
    tags: ['British', 'WW2', 'Paratroops'],
  },
  'Mk 4 GS': {
    name: 'Mk 4 GS',
    pf: 5,
    bpf: 4,
    ac: 'I',
    weight: 2.5,
    tags: ['British', 'Cold War'],
  },
  PASGT: {
    name: 'PASGT',
    pf: 6,
    bpf: 4,
    ac: 'I',
    weight: 3.3,
    tags: ['USA', 'Cold War', 'Modern'],
  },
  ACH: {
    name: 'ACH',
    pf: 7,
    bpf: 4,
    ac: 'I',
    weight: 3,
    tags: ['USA', 'Modern'],
  },
  MICH: {
    name: 'MICH',
    pf: 7,
    bpf: 4,
    ac: 'I',
    weight: 3.3,
    tags: ['USA', 'Modern'],
  },
  LWH: {
    name: 'LWH',
    pf: 8,
    bpf: 4,
    ac: 'I',
    weight: 3,
    tags: ['USA', 'Modern'],
  },
  'M15 Adrian': {
    name: 'M15 Adrian',
    pf: 3,
    bpf: 3,
    ac: 'I',
    weight: 1.7,
    tags: ['French', 'WW2', 'WW1'],
  },
  SPECTRA: {
    name: 'SPECTRA',
    pf: 6,
    bpf: 4,
    ac: 'I',
    weight: 1.4,
    tags: ['French', 'Modern'],
  },
  'Ssh-60': {
    name: 'Ssh-60',
    pf: 3,
    bpf: 4,
    ac: 'I',
    weight: 2.8,
    tags: ['Russian', 'WW2'],
  },
  'Helmet-68M': {
    name: 'Helmet-68M',
    pf: 3,
    bpf: 4,
    ac: 'I',
    weight: 3.7,
    tags: ['Russian', 'Cold War'],
  },
  '6B27': {
    name: '6B27',
    pf: 3,
    bpf: 4,
    ac: 'I',
    weight: 2.8,
    tags: ['Russian', 'Modern'],
  },
  '6B7-1M': {
    name: '6B7-1M',
    pf: 3,
    bpf: 4,
    ac: 'I',
    weight: 2.5,
    tags: ['Russian', 'Modern'],
  },
  M35: {
    name: 'M35',
    pf: 4,
    bpf: 4,
    ac: 'I',
    weight: 2.5,
    tags: ['Germany', 'WW2'],
  },
  M43: {
    name: 'M43',
    pf: 5,
    bpf: 4,
    ac: 'I',
    weight: 2.3,
    tags: ['Germany', 'WW2'],
  },
});

export const vests = Object.freeze({
  'No Vest': {
    name: 'No Vest',
    pf: '0',
    bpf: '0',
    ac: '-',
  },
  M1951: {
    name: 'M1951',
    pf: 4,
    bpf: 2,
    ac: 'I',
    weight: 7.8,
    tags: ['USA', 'Cold War'],
  },
  M1955: {
    name: 'M1955',
    pf: 5,
    bpf: 5,
    ac: 'I',
    weight: 10.3,
    tags: ['USA', 'Cold War'],
  },
  M69: {
    name: 'M69',
    pf: 5,
    bpf: 2,
    ac: 'I',
    weight: 8.5,
    tags: ['USA', 'Cold War'],
  },
  PASGT: {
    name: 'PASGT',
    pf: 6,
    bpf: 2,
    ac: 'I',
    weight: 9,
    tags: ['USA', 'Modern', 'Cold War'],
  },
  MTV: {
    name: 'MTV',
    pf: 21,
    bpf: 6,
    ac: 'I',
    weight: 30,
    tags: ['USA', 'Modern'],
  },
  'SOV-2000': {
    name: 'SOV-2000',
    pf: 21,
    bpf: 3,
    ac: 'I',
    weight: 12,
    tags: ['USA', 'Modern'],
  },
  'SOV-3000': {
    name: 'SOV-3000',
    pf: 35,
    bpf: 3,
    ac: 'I',
    weight: 18,
    tags: ['USA', 'Modern'],
  },
  'IOTV (SAPI)': {
    name: 'IOTV (SAPI)',
    pf: 21,
    bpf: 6,
    ac: 'I',
    weight: 16,
    tags: ['USA', 'Modern'],
  },
  'IOTV (E-SAPI)': {
    name: 'IOTV (E-SAPI)',
    pf: 35,
    bpf: 6,
    ac: 'I',
    weight: 19.3,
    tags: ['USA', 'Modern'],
  },
  'IOTV (E-SAPI Full)': {
    name: 'IOTV (E-SAPI Full)',
    pf: '35/20',
    bpf: 6,
    ac: 'I',
    weight: 29.5,
    tags: ['USA', 'Modern'],
  },
  '6B11': {
    name: '6B11',
    pf: 8,
    bpf: 2,
    ac: 'I',
    weight: 11,
    tags: ['Russian', 'Modern'],
  },
  '6B12': {
    name: '6B12',
    pf: '16/8', // main plate/base pf
    bpf: 3,
    ac: 'I',
    weight: 18,
    tags: ['Russian', 'Modern'],
  },
  '6B13': {
    name: '6B13',
    pf: 16,
    bpf: 4,
    ac: 'I',
    weight: 24,
    tags: ['Russian', 'Modern'],
  },
  '6B23 CS': {
    name: '6B23 CS',
    pf: '8/13',
    bpf: 3,
    ac: 'I',
    weight: 16,
    tags: ['Russian', 'Modern'],
  },
  '6B23 CC': {
    name: '6B23 CC',
    pf: '8/16',
    bpf: 4,
    ac: 'I',
    weight: 14,
    tags: ['Russian', 'Modern'],
  },
  '6B23 SC': {
    name: '6B23 SC',
    pf: '13/16',
    bpf: 5,
    ac: 'I',
    weight: 23,
    tags: ['Russian', 'Modern'],
  },
  'Omon (Class 5)': {
    name: 'Omon (Class 5)',
    pf: 30,
    bpf: 6,
    ac: 'I',
    weight: 26.4,
    tags: ['Russian', 'Modern'],
  },
  'KAZAK-4': {
    name: 'KAZAK-4',
    pf: '16/2',
    bpf: 6,
    ac: 'I',
    weight: 18.3,
    tags: ['Russian', 'Modern'],
  },
  'KAZAK-5': {
    name: 'KAZAK-5',
    pf: 3,
    bpf: 3,
    ac: 'I',
    weight: 2.75,
    tags: ['Russian', 'Modern'],
  },
  'KAZAK-6': {
    name: 'KAZAK-6',
    pf: '30/3',
    bpf: 6,
    ac: 'I',
    weight: 20.9,
    tags: ['Russian', 'Modern'],
  },
  'II Police Vest': {
    name: 'II Police Vest',
    pf: 3,
    bpf: 3,
    ac: 'I',
    weight: 4,
    tags: ['Police'],
  },
  'IIIA Police Vest': {
    name: 'IIIA Police Vest',
    pf: 6,
    bpf: 3,
    ac: 'I',
    weight: 6.1,
    tags: ['Police'],
  },
});

export const getHelmetWeightByName = (name) => helmets[name].weight;

export const getVestWeightByName = (name) => vests[name].weight;
