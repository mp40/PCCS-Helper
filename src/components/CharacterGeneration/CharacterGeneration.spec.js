import { mountAppWithStore } from '../../helpers/testHelpers';

describe('Selecting Charcter Generation', () => {
  it('should generate default stats for character', () => {
    const wrapper = mountAppWithStore();
    wrapper.find('#activateCreateChar').simulate('click');
    expect(wrapper.find('.navEquipWeight').text()).toContain(5);
    expect(wrapper.find('#updateStr').text()).toBe('10');
    expect(wrapper.find('#updateInt').text()).toBe('10');
    expect(wrapper.find('#updateWil').text()).toBe('10');
    expect(wrapper.find('#updateHlt').text()).toBe('10');
    expect(wrapper.find('#updateAgi').text()).toBe('10');
    expect(wrapper.find('#updateGun').text()).toBe('0');
    expect(wrapper.find('#updateHand').text()).toBe('0');
  });
});

describe('Character Generation', () => {
  // todo overall intergration tests here
  it('should be able to clear filters', () => {
    // TODO
  });
});
