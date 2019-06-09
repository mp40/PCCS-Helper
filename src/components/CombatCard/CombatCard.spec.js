import { mountAppWithStore } from '../../helpers/testHelpers';

describe('Combat Levels', () => {
  const wrapper = mountAppWithStore();
  wrapper.find('#activateCreateChar').simulate('click');

  const inputAttribute = (attributeId, newValue) => {
    wrapper.find(attributeId).simulate('click');
    wrapper.find(`${attributeId} input`).simulate('keyUp', { target: { value: newValue },
      key: 'Enter' });
  };
  const combatLevels = wrapper.find('#combatLevelInputContainer');
  it('should render Gun Comabat', () => {
    expect(wrapper.text()).toContain('Gun');
  });
  it('should render Hand to Hand Combat', () => {
    expect(wrapper.text()).toContain('Hand');
  });
  it('should update gun combat level', () => {
    inputAttribute('#updateGun', '4');
    expect(combatLevels.text()).toContain('4');
  });
  it('should update hand to hand combat level', () => {
    inputAttribute('#updateHand', '2');
    expect(combatLevels.text()).toContain('2');
  });
  it('updates actions when attributes change', () => {
    const actionsTable = wrapper.find('#gunActionTable');
    const firstImpulse = actionsTable.childAt(1);
    const secondImpulse = actionsTable.childAt(2);
    const thirdImpulse = actionsTable.childAt(3);
    const fourthImpulse = actionsTable.childAt(4);
    expect(firstImpulse.text()).toContain('2');
    expect(secondImpulse.text()).toContain('1');
    expect(thirdImpulse.text()).toContain('2');
    expect(fourthImpulse.text()).toContain('2');
  });
});
