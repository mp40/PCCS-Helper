import { mountAppWithStore, storeWithCreateCharacterView } from '../../helpers/testHelpers';

describe('the CombatCard comonent', () => {
  const wrapper = mountAppWithStore(storeWithCreateCharacterView());

  const inputAttribute = (attributeId, newValue) => {
    wrapper.find(attributeId).simulate('click');
    wrapper.find(`${attributeId} input`).simulate('keyUp', { target: { value: newValue },
      key: 'Enter' });
  };
  const combatLevels = wrapper.find('#combatLevelInputContainer');

  describe('changing combat level values', () => {
    it('should update gun combat level', () => {
      inputAttribute('#updateGun', '4');
      expect(combatLevels.text()).toContain('4');
    });
    it('should update hand to hand combat level', () => {
      inputAttribute('#updateHand', '2');
      expect(combatLevels.text()).toContain('2');
    });
    it('updates actions and other combat data when levels change', () => {
      const gunActionsTable = wrapper.find('#gunActionTable');
      const handActionsTable = wrapper.find('#handActionTable');
      const additionalData = wrapper.find('.additionalCombatData');
      expect(gunActionsTable.text()).toEqual('Gun2122');
      expect(handActionsTable.text()).toEqual('Hand2121');
      expect(additionalData.text()).toEqual('BS 3MS 6DB 1.5');
    });
  });
});
