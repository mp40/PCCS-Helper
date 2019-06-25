
import { mountAppWithStore, storeWithCreateCharacterView, createWrapperTextInput } from '../../helpers/testHelpers';

describe('the Clothing and Body Armour Card', () => {
  let wrapper;
  let inputValue;
  beforeEach(() => {
    wrapper = mountAppWithStore(storeWithCreateCharacterView());
    inputValue = createWrapperTextInput(wrapper);
  });
  it('should render', () => {
    expect(wrapper.text()).toContain('Uniform');
  });
  it('should render normal uniform as default', () => {
    expect(wrapper.text()).toContain('Normal');
    expect(wrapper.find('#uniformWeight').text()).toContain('5');
  });
  it('should be possible to change uniform types', () => {
    wrapper.find('.uniformStats').simulate('click');
    inputValue('#uniformDropdownSelector', 'Tropical');
    expect(wrapper.find('.uniformStats').text()).toEqual('Tropical4.5');
  });
  it('should update the total weight on change', () => {
    wrapper.find('.uniformStats').simulate('click');
    inputValue('#uniformDropdownSelector', 'Winter');
    const navBar = wrapper.find('.navCreateCharacterContainer');
    expect(navBar.text()).toContain('7');
    expect(navBar.text()).not.toContain('-7');
  });
});
