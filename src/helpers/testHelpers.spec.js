import {
  mountAppWithStore,
  storeWithEquipment,
  storeWithCreateCharacterView,
  findFirearmByName,
  testM1911A1,
  testM1911A1WithMods,
  testRemington,
  testM16,
  testM16WithoutJhpAp,
  testFAMAS,
} from './testHelpers';
import { initialStore } from './initialStore';
import { pistols } from '../data/firearms';

describe('mounting App with mountAppWithStore', () => {
  it('should mount App wrapped in Provider with store', () => {
    const wrapper = mountAppWithStore();
    expect(typeof wrapper.state()).toBe('object');
  });
  it('should use the initial store if no argument passed in', () => {
    const wrapper = mountAppWithStore();
    expect(wrapper.state().storeState).toMatchObject(initialStore);
  });
  it('should use arguments as the store to be used', () => {
    const storeDouble = {
      currentView: 'Testing',
      sttength: 666,
    };
    const wrapper = mountAppWithStore(storeDouble);
    expect(wrapper.state().storeState).toMatchObject(storeDouble);
  });
  describe('storeWithCreateCharacterView', () => {
    it('should mount App with currentView value set to createChar', () => {
      const wrapper = mountAppWithStore(storeWithCreateCharacterView());
      expect(wrapper.state().storeState.currentView).toBe('createChar');
    });
    it('should be able to take an argument which adds a gun into the firearms array', () => {
      const gun = testM1911A1();
      const wrapper = mountAppWithStore(storeWithCreateCharacterView(gun));
      expect(wrapper.state().storeState.gear.firearms).toEqual([gun]);
    });
  });
  describe('storeWithEquipment', () => {
    it('should mount App with predefined test equipment', () => {
      const wrapper = mountAppWithStore(storeWithEquipment());
      expect(wrapper.state().storeState.gear.equipment).toEqual([{ name: 'newEquipment', weight: 1337, qty: 1, tags: ['test'] }]);
    });
  });
});

describe('test firearms', () => {
  it('should be taken directly from firearm list', () => {
    expect(findFirearmByName(pistols(), 'M1911A1')).toMatchObject({ name: 'M1911A1' });
  });
  it('should find nad return the M1911A1', () => {
    expect(testM1911A1()).toMatchObject({ name: 'M1911A1', weight: 3 });
  });
  it('should have a parameter to increase M1911A1 qty', () => {
    expect(testM1911A1(2)).toMatchObject({ name: 'M1911A1', qty: 2 });
  });
  it('should find, modify and return the M1911A1', () => {
    expect(testM1911A1WithMods()).toMatchObject({ name: 'M1911A1', modNotes: [{ note: 'test', weightMod: 1 }] });
  });
  it('should find and return the Remington shotgun', () => {
    expect(testRemington()).toMatchObject({ name: 'Remington M870', weight: 8.8 });
  });
  it('should find and return the M16', () => {
    expect(testM16()).toMatchObject({ name: 'M16', weight: 8.7 });
  });
  it('should find and return the M16 with only FMJ projectiles', () => {
    expect(testM16WithoutJhpAp().projectiles.length).toBe(1);
    expect(testM16WithoutJhpAp().projectiles[0].type).toBe('FMJ');
  });
  it('should find and return the FAMAS', () => {
    expect(testFAMAS()).toMatchObject({ name: 'FAMAS', weight: 9 });
  });
});
