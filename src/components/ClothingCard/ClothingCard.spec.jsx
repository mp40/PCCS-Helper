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

    it('should be possible to change uniform types', () => {
      wrapper.find('tbody').find('tr').simulate('click');

      wrapper.find('.uniforms').find('button').at(1).simulate('click');

      expect(wrapper.find('tbody').find('tr').text()).toBe('Tropical4.5');
    });
  });
});
