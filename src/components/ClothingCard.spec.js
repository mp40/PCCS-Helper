
import { mountAppWithStore } from '../helpers/testHelpers';

describe('the Clothing and Body Armour Card', () => {
  it('should render', () => {
    const wrapper = mountAppWithStore();
    wrapper.find('#activateCreateChar').simulate('click');
    expect(wrapper.text()).toContain('Uniform');
  });
  it('should render normal uniform as default', () => {
    const wrapper = mountAppWithStore();
    wrapper.find('#activateCreateChar').simulate('click');
    expect(wrapper.text()).toContain('Normal');
    expect(wrapper.find('#uniformWeight').text()).toContain('5');
  });
  it('should be possible to change uniform types', () => {
    const wrapper = mountAppWithStore();
    wrapper.find('#activateCreateChar').simulate('click');
    wrapper.find('.uniformStats').simulate('click');
    wrapper.find('#uniformDropdownSelector').simulate('change', {
      target: { value: 'Tropical' },
    });
    expect(wrapper.find('.uniformStats').text()).toContain('Tropical');
    expect(wrapper.find('.uniformStats').text()).toContain('4.5');
  });
  it('should update the total weight on change', () => {
    const wrapper = mountAppWithStore();
    wrapper.find('#activateCreateChar').simulate('click');
    wrapper.find('.uniformStats').simulate('click');
    wrapper.find('#uniformDropdownSelector').simulate('change', {
      target: { value: 'Tropical' },
    });
    const navBar = wrapper.find('.navCreateCharacterContainer');
    expect(navBar.text()).toContain('4.5');
    expect(navBar.text()).not.toContain('-4.5');
  });
});
