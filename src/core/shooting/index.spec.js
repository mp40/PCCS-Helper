import { ProofOfConcept } from './index';

describe('default', () => {
  test.each([
    [0, 0 + 5 + 0 + 7],
    [5, 5 + 5 + 0 + 7],
    [7, 7 + 5 + 0 + 7],
    [10, 10 + 5 + 0 + 7],
  ])('getting alm from default with sal %p returns %p', (sal, result) => {
    const proof = new ProofOfConcept(sal);
    expect(proof.getAlm()).toBe(result);
  });
});

describe('shooter stance', () => {
  const proof = new ProofOfConcept(0);
  test.each([
    ['Standing', 0 + 5 + 0 + 7],
    ['Kneeling', 0 + 5 + 3 + 7],
    ['Prone', 0 + 5 + 6 + 7],
  ])('getting alm from shooter stance %p returns %p', (stance, result) => {
    proof.setStance(stance);
    expect(proof.getAlm()).toBe(result);
  });
});

describe('target stance', () => {
  const proof = new ProofOfConcept(0);
  test.each([
    ['Standing Exposed', 0 + 5 + 0 + 7],
    ['Kneeling Exposed', 0 + 5 + 0 + 6],
    ['Fire Over/Around', 0 + 5 + 0 + 0],
  ])('getting alm from target stance %p returns %p', (size, result) => {
    proof.setTarget(size);
    expect(proof.getAlm()).toBe(result);
  });
});

describe('range', () => {
  const proof = new ProofOfConcept(0);
  test.each([
    [1, 0 + 33 + 0 + 7],
    [6, 0 + 20 + 0 + 7],
    [22, 0 + 11 + 0 + 7],
    [35, 0 + 8 + 0 + 7],
    [50, 0 + 5 + 0 + 7],
    [75, 0 + 2 + 0 + 7],
    [100, 0 + 0 + 0 + 7],
    [115, 0 + -1 + 0 + 7],
    [400, 0 + -10 + 0 + 7],
  ])('getting alm at range %p returns %p', (range, result) => {
    proof.setRange(range);
    expect(proof.getAlm()).toBe(result);
  });
});

describe('lighting', () => {
  const proof = new ProofOfConcept(0);
  test.each([
    ['Good', 0 + 5 + 0 + 7 + 0],
    ['Dusk', 0 + 5 + 0 + 7 + -2],
    ['Full Moon', 0 + 5 + 0 + 7 + -4],
    ['Half Moon', 0 + 5 + 0 + 7 + -6],
    ['No Moon', 0 + 5 + 0 + 7 + -12],
  ])('getting alm in %p lighting returns %p', (lighting, result) => {
    proof.setLighting(lighting);
    expect(proof.getAlm()).toBe(result);
  });
});

describe('miscellaneous', () => {
  const proof = new ProofOfConcept(0);
  test.each([
    [-5, -5 + 5 + 0 + 7],
    [0, 0 + 5 + 0 + 7],
    [5, 5 + 5 + 0 + 7],
  ])('getting alm with miscellaneous modifier %p returns %p', (value, result) => {
    proof.setMiscellaneous(value);
    expect(proof.getAlm()).toBe(result);
  });
});
