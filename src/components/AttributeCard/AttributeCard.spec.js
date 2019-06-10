import { mountAppWithStore } from '../../helpers/testHelpers';

describe('Chasracter Attribute Stat Input', () => {
  const wrapper = mountAppWithStore();
  wrapper.find('#activateCreateChar').simulate('click');

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
    it('should update strength', () => {
      inputAttribute('#updateStr', '11');
      expect(wrapper.text()).toContain('11');
    });
    it('should update intelligence', () => {
      inputAttribute('#updateInt', '12');
      expect(wrapper.text()).toContain('12');
    });
    it('should update health', () => {
      inputAttribute('#updateHlt', '14');
      expect(wrapper.text()).toContain('14');
    });
    it('should update willpower', () => {
      inputAttribute('#updateWil', '17');
      expect(wrapper.text()).toContain('17');
    });
    it('should update agility', () => {
      inputAttribute('#updateAgi', '18');
      expect(wrapper.text()).toContain('18');
    });
    it('updates actions when attributes change', () => {
      const actionsTable = wrapper.find('#gunActionTable');
      const firstImpulse = actionsTable.childAt(1);
      const secondImpulse = actionsTable.childAt(2);
      const thirdImpulse = actionsTable.childAt(3);
      const fourthImpulse = actionsTable.childAt(4);
      expect(firstImpulse.text()).toContain('2');
      expect(secondImpulse.text()).toContain('1');
      expect(thirdImpulse.text()).toContain('1');
      expect(fourthImpulse.text()).toContain('1');
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
