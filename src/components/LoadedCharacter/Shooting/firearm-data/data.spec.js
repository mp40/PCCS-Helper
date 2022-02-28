import { getMasterPhaseImpluse } from './data';

describe('Converting TOF to Master Phasing Impulses', () => {
  it('should return correct value for tof 4', () => {
    const tof = 4;
    const masterPhaseImpluse = 0.5;

    expect(getMasterPhaseImpluse(tof)).toBe(masterPhaseImpluse);
  });
  it('should return correct value for tof 11', () => {
    const tof = 11;
    const masterPhaseImpluse = 2.2;

    expect(getMasterPhaseImpluse(tof)).toBe(masterPhaseImpluse);
  });
  it('should return correct value for tof 33', () => {
    const tof = 33;
    const masterPhaseImpluse = 6.4;

    expect(getMasterPhaseImpluse(tof)).toBe(masterPhaseImpluse);
  });
  it('should return correct value for tof 80', () => {
    const tof = 80;
    const masterPhaseImpluse = 16.1;

    expect(getMasterPhaseImpluse(tof)).toBe(masterPhaseImpluse);
  });
});
