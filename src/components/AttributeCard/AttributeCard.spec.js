import { mountAppWithStore, storeWithCreateCharacterView } from '../../helpers/testHelpers';

describe('Character Attribute Stat Input', () => {
  const wrapper = mountAppWithStore(storeWithCreateCharacterView());

  const inputAttribute = (attributeId, newValue) => {
    wrapper.find(attributeId).simulate('click');
    wrapper.find(`${attributeId} input`).simulate('keyUp', { target: { value: newValue },
      key: 'Enter' });
  };

  it('should render Character Generation page', () => {
    expect(wrapper.text()).toContain('Attribute');
  });
  it('should render the attributes', () => {
    expect(wrapper.text()).toContain('Strength');
    expect(wrapper.text()).toContain('Intelligence');
    expect(wrapper.text()).toContain('Health');
    expect(wrapper.text()).toContain('Willpower');
    expect(wrapper.text()).toContain('Agility');
  });
  it('shoulder render attribute values', () => {
    expect(wrapper.text()).toContain('10');
  });
  describe('changing attribute values', () => {
    const attributeTable = wrapper.find('.attributeLevelCard').childAt(0);
    it('should update strength', () => {
      inputAttribute('.updateStrength', '11');
      expect(wrapper.text()).toContain('11');
      const strengthRow = attributeTable.find('.statInputTableRow').at(0);
      expect(strengthRow.find('.statName').text()).toBe('Strength');
      expect(strengthRow.find('.statValue').text()).toBe('11');
    });
    it('should update intelligence', () => {
      inputAttribute('.updateIntelligence', '12');
      expect(wrapper.text()).toContain('12');
      const intelligenceRow = attributeTable.find('.statInputTableRow').at(1);
      expect(intelligenceRow.find('.statName').text()).toBe('Intelligence');
      expect(intelligenceRow.find('.statValue').text()).toBe('12');
    });
    it('should update willpower', () => {
      inputAttribute('.updateWillpower', '17');
      expect(wrapper.text()).toContain('17');
      const willpowerRow = attributeTable.find('.statInputTableRow').at(2);
      expect(willpowerRow.find('.statName').text()).toBe('Willpower');
      expect(willpowerRow.find('.statValue').text()).toBe('17');
    });
    it('should update health', () => {
      inputAttribute('.updateHealth', '14');
      expect(wrapper.text()).toContain('14');
      const healthRow = attributeTable.find('.statInputTableRow').at(3);
      expect(healthRow.find('.statName').text()).toBe('Health');
      expect(healthRow.find('.statValue').text()).toBe('14');
    });
    it('should update agility', () => {
      inputAttribute('.updateAgility', '18');
      expect(wrapper.text()).toContain('18');
      const agilityRow = attributeTable.find('.statInputTableRow').at(4);
      expect(agilityRow.find('.statName').text()).toBe('Agility');
      expect(agilityRow.find('.statValue').text()).toBe('18');
    });
    it('updates actions and other combat stats when attributes change', () => {
      const gunActionsTable = wrapper.find('.actionsTable').at(0);
      const handActionsTable = wrapper.find('.actionsTable').at(1);
      const additionalData = wrapper.find('.additionalCombatData');
      expect(gunActionsTable.text()).toEqual('Gun2121');
      expect(handActionsTable.text()).toEqual('Hand3222');
      expect(additionalData.text()).toEqual('BS 3MS 8DB 3');
    });
    describe('edge cases', () => {
      it('should not be possible to enter values under 3', () => {
        inputAttribute('.updateAgility', '2');
        expect(wrapper.find('.statInputTableRow').at(4).text()).not.toContain('2');
      });
      it('should not be possible to enter values over 19', () => {
        inputAttribute('.updateAgility', '20');
        expect(wrapper.find('.statInputTableRow').at(4).text()).not.toContain('20');
      });
    });
  });
});
