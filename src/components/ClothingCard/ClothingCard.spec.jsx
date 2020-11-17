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
  });
});
