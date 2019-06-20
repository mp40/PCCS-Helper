import { mountAppWithStore, storeWithEquipment, storeWithCreateCharacterView, testM1911A1 } from './testHelpers';
import { initialStore } from './initialStore';

// const wrapper = mountAppWithStore(storeWithCreateCharacterView());
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
      const wrapper = mountAppWithStore(storeWithCreateCharacterView(testM1911A1()));
      expect(wrapper.state().storeState.gear.firearms).toEqual([testM1911A1()]);
    });
  });
  describe('storeWithEquipment', () => {
    it('should mount App with predefined test equipment', () => {
      const wrapper = mountAppWithStore(storeWithEquipment());
      expect(wrapper.state().storeState.gear.equipment).toEqual([{ name: 'newEquipment', weight: 1337, qty: 1, tags: ['test'] }]);
    });
  });
});
