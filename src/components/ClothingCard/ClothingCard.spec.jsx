import React from 'react';
import { mount } from 'enzyme';

import { Provider } from 'react-redux';

import { getStore } from '../../helpers/testHelpers';

import ConnectedClothingCard from '.';

describe('the Clothing Card', () => {
  describe('clothing intergration test', () => {
    const store = getStore();

    const wrapper = mount(
      <Provider store={store}>
        <ConnectedClothingCard />
      </Provider>,
    );

    const selectUniform = (value) => wrapper.find('.uniformDropdownSelector').simulate('change', { target: { value } });

    it('should be possible to change uniform types', () => {
      wrapper.find('.uniformStats').simulate('click');
      selectUniform('Tropical');
      expect(wrapper.find('.uniformStats').text()).toEqual('Tropical4.5');
    });
    // mptodo - highe lvl intergration test
    // it('should update the total weight on change', () => {
    //   wrapper.find('.uniformStats').simulate('click');
    //   selectUniform('Winter');
    //   const navBar = wrapper.find('.navCreateCharacterContainer');
    //   expect(navBar.text()).toContain('7');
    //   expect(navBar.text()).not.toContain('-7');
    // });
  });
});

// mptodo -check, delete
// describe('the Clothing and Body Armour Card', () => {
//   let wrapper;

//   const selectUniform = (value) => wrapper.find('.uniformDropdownSelector').simulate('change', { target: { value } });

//   beforeEach(() => {
//     wrapper = mountAppWithStore(storeWithCreateCharacterView());
//   });
//   it('should render', () => {
//     expect(wrapper.text()).toContain('Uniform');
//   });
//   it('should render normal uniform as default', () => {
//     expect(wrapper.text()).toContain('Normal');
//     expect(wrapper.find('.uniformWeight').text()).toContain('5');
//   });
//   it('should be possible to change uniform types', () => {
//     wrapper.find('.uniformStats').simulate('click');
//     selectUniform('Tropical');
//     expect(wrapper.find('.uniformStats').text()).toEqual('Tropical4.5');
//   });
//   it('should update the total weight on change', () => {
//     wrapper.find('.uniformStats').simulate('click');
//     selectUniform('Winter');
//     const navBar = wrapper.find('.navCreateCharacterContainer');
//     expect(navBar.text()).toContain('7');
//     expect(navBar.text()).not.toContain('-7');
//   });
// });
