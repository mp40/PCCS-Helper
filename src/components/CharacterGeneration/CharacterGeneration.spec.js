import { mountAppWithStore } from '../../helpers/testHelpers';

describe('Selecting Charcter Generation', () => {
  it('should generate default stats for character', () => {
    const wrapper = mountAppWithStore();
    wrapper.find('#activateCreateChar').simulate('click');
    expect(wrapper.find('.navEquipWeight').text()).toContain(5);
    expect(wrapper.find('.updateStrength').text()).toBe('10');
    expect(wrapper.find('.updateIntelligence').text()).toBe('10');
    expect(wrapper.find('.updateWillpower').text()).toBe('10');
    expect(wrapper.find('.updateHealth').text()).toBe('10');
    expect(wrapper.find('.updateAgility').text()).toBe('10');
    expect(wrapper.find('.updateGun').text()).toBe('0');
    expect(wrapper.find('.updateHand').text()).toBe('0');
  });
});

describe('Character Generation', () => {
  // mptodo overall intergration tests here
  it('should be able to clear filters', () => {
    // mpTODO
  });
});
