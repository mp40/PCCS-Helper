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
    const attributeTable = wrapper.find('.attributeContainer').first().childAt(0);
    it('should update strength', () => {
      inputAttribute('#updateStr', '11');
      expect(wrapper.text()).toContain('11');
      const healthLine = attributeTable.childAt(1);
      expect(healthLine.find('.attName').text()).toBe('Strength');
      expect(healthLine.find('.attValue').text()).toBe('11');
    });
    it('should update intelligence', () => {
      inputAttribute('#updateInt', '12');
      expect(wrapper.text()).toContain('12');
      const healthLine = attributeTable.childAt(2);
      expect(healthLine.find('.attName').text()).toBe('Intelligence');
      expect(healthLine.find('.attValue').text()).toBe('12');
    });
    it('should update willpower', () => {
      inputAttribute('#updateWil', '17');
      expect(wrapper.text()).toContain('17');
      const willLine = attributeTable.childAt(3);
      expect(willLine.find('.attName').text()).toBe('Willpower');
      expect(willLine.find('.attValue').text()).toBe('17');
    });
    it('should update health', () => {
      inputAttribute('#updateHlt', '14');
      expect(wrapper.text()).toContain('14');
      const healthLine = attributeTable.childAt(4);
      expect(healthLine.find('.attName').text()).toBe('Health');
      expect(healthLine.find('.attValue').text()).toBe('14');
    });
    it('should update agility', () => {
      inputAttribute('#updateAgi', '18');
      expect(wrapper.text()).toContain('18');
      const healthLine = attributeTable.childAt(5);
      expect(healthLine.find('.attName').text()).toBe('Agility');
      expect(healthLine.find('.attValue').text()).toBe('18');
    });
    it('updates actions and other combat stats when attributes change', () => {
      const gunActionsTable = wrapper.find('#gunActionTable');
      const handActionsTable = wrapper.find('#handActionTable');
      const additionalData = wrapper.find('.additionalCombatData');
      expect(gunActionsTable.text()).toEqual('Gun2121');
      expect(handActionsTable.text()).toEqual('Hand3222');
      expect(additionalData.text()).toEqual('BS 3MS 8DB 3');
    });
    describe('edge cases', () => {
      it('should not be possible to enter values under 3', () => {
        inputAttribute('#updateAgi', '2');
        expect(wrapper.find('.attributeRow').at(4).text()).not.toContain('2');
      });
      it('should not be possible to enter values over 19', () => {
        inputAttribute('#updateAgi', '20');
        expect(wrapper.find('.attributeRow').at(4).text()).not.toContain('20');
      });
    });
  });
});
