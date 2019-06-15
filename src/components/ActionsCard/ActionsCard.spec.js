import { mountAppWithStore, storeWithCreateCharacterView } from '../../helpers/testHelpers';

describe('the CombatCard comonent', () => {
  const wrapper = mountAppWithStore(storeWithCreateCharacterView());

  describe('rendering combat actions', () => {
    it('should render gun combat actions', () => {
      const rows = wrapper.find('.combatActions tbody tr');
      expect(rows.at(0).text()).toEqual('Gun1111');
    });
    it('should render gun combat actions', () => {
      const rows = wrapper.find('.combatActions tbody tr');
      expect(rows.at(1).text()).toEqual('Hand1111');
    });
  });
  describe('rendering movement and damage bonus', () => {
    const data = wrapper.find('.additionalCombatData');
    it('should render base speed', () => {
      expect(data.text()).toContain('3');
    });
    it('should render max speed', () => {
      expect(data.text()).toContain('6');
    });
    it('should render damage bonus', () => {
      expect(data.text()).toContain('1');
    });
  });
});
