import { MockState } from '../mockState';

export const testEquipment = () => ({
  name: 'testEquipment',
  weight: 1.53,
  tags: ['test'],
  qty: 1,
});


export class AddedEquipment extends MockState {
  constructor() {
    super();
    this.totalWeight = 6.53;
    this.gear.equipment = [testEquipment()];
  }
}
