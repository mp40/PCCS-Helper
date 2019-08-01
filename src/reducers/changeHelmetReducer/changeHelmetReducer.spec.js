import { changeHelmetReducer } from './index';
import { MockState } from '../mockState';

const helmetM1 = () => ({ name: 'M1', pf: 4, weight: 2.5 });
const helmetOther = () => ({ name: 'Other Helmet', pf: 4, weight: 5 });

const characterWithM1Helmet = new MockState();
characterWithM1Helmet.gear.helmet = helmetM1();
characterWithM1Helmet.totalWeight += 2.5;

describe('changeHelmetReducer function', () => {
  it('should add helmet to character', () => {
    const action = { payload: helmetM1() };
    const character = new MockState();
    const newState = changeHelmetReducer(character, action);
    expect(newState).toMatchObject(characterWithM1Helmet);
  });
  it('should change helmet if helmet already present', () => {
    const action = { payload: helmetOther() };
    const newState = changeHelmetReducer(characterWithM1Helmet, action);
    expect(newState.totalWeight).toBe(characterWithM1Helmet.totalWeight - helmetM1().weight + helmetOther().weight);
    expect(newState.gear.helmet.name).toBe('Other Helmet');
  });
});
