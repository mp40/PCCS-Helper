import { changeVestReducer } from './index';
import { MockState } from '../mockState';

const testVest = () => ({ name: 'vest one', pf: 4, weight: 5 });
const vestOther = () => ({ name: 'Other Vest', pf: 8, weight: 10 });

const characterWithVest = new MockState();
characterWithVest.gear.vest = testVest();
characterWithVest.totalWeight += 5;

describe('changeHelmetReducer function', () => {
  it('should add helmet to character', () => {
    const action = { payload: testVest() };
    const character = new MockState();
    const newState = changeVestReducer(character, action);
    expect(newState).toMatchObject(characterWithVest);
  });
  it('should change helmet if helmet already present', () => {
    const action = { payload: vestOther() };
    const newState = changeVestReducer(characterWithVest, action);
    expect(newState.totalWeight).toBe(characterWithVest.totalWeight - testVest().weight + vestOther().weight);
    expect(newState.gear.vest.name).toBe('Other Vest');
  });
});
