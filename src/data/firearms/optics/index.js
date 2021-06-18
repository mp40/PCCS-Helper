const lowPowerScope = Object.freeze({
  name: 'Low Power Scope',
  weight: 1.5,
  fov: 10,
  minimumRange: 1,
  bonus: [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
});

const mediumPowerScope = Object.freeze({
  name: 'Medium Power Scope',
  weight: 3.2,
  fov: 5,
  minimumRange: 8,
  bonus: [1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3],
});

const highPowerScope = Object.freeze({
  name: 'High Power Scope',
  weight: 3.2, // <- mptodo ???
  fov: 2,
  minimumRange: 10,
  bonus: [1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4],
});

const aas = Object.freeze({
  name: 'AAS',
  weight: 1.5,
  fov: 10,
  minimumRange: 1,
  bonus: [1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7],
});

const pso1 = Object.freeze({
  name: 'PSO - 1',
  weight: 1.32,
  fov: 6,
  minimumRange: 8,
  bonus: mediumPowerScope.bonus,
});

const m73 = Object.freeze({
  name: 'M73',
  weight: 1.3,
  fov: 5,
  minimumRange: 10,
  bonus: lowPowerScope.bonus,
});

const unertlTenPower = Object.freeze({
  name: 'Unertl x10',
  weight: 2.18,
  fov: 2, // <- mptodo ???
  minimumRange: 10,
  bonus: highPowerScope.bonus,
});

const suit = Object.freeze({
  name: 'SUIT',
  weight: 0.75,
  fov: 8,
  minimumRange: 8,
  bonus: mediumPowerScope,
});

const susat = Object.freeze({
  name: 'SUSAT',
  weight: 0.92,
  fov: 10,
  minimumRange: 8,
  bonus: mediumPowerScope,
});

const scopes = Object.freeze({
  'Low Power Scope': lowPowerScope,
  'Medium Power Scope': mediumPowerScope,
  'High Power Scope': highPowerScope,
  AAS: aas,
  'PSO - 1': pso1,
  M73: m73,
  'Unertl x10': unertlTenPower,
  SUIT: suit,
  SUSAT: susat,
});

export const getScopeByName = (name) => scopes[name];
