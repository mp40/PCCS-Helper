import React from 'react';
import { mount } from 'enzyme';

import { Provider } from 'react-redux';
import { getStore } from '../../helpers/testHelpers';

import ConnectedBodyArmourCard from '.';

describe('the BodyArmourCard', () => {
  describe('body armour intergration tests', () => {
    const store = getStore();

    const wrapper = mount(
      <Provider store={store}>
        <ConnectedBodyArmourCard />
      </Provider>,
    );

    it('should update body armour card and total weight when helmet selected', () => {
      wrapper.find('td[children="No Helmet"]').simulate('click');
      wrapper.find('td[children="M1"]').closest('tr').simulate('click')

      expect(wrapper.text()).toContain('M12.5');
    });

    it('should update body armour card and total weight when vest selected', () => {
      wrapper.find('td[children="No Vest"]').simulate('click');
      wrapper.find('td[children="M69"]').closest('tr').simulate('click')

      expect(wrapper.text()).toContain('M698.5');
    });

    it('should be able to remove helmet', () => {
      wrapper.find('td[children="M1"]').simulate('click');
      wrapper.find('button[children="Remove"]').simulate('click');

      expect(wrapper.text()).not.toContain('M12.5');
    });

    it('should be able to remove vest', () => {
      wrapper.find('td[children="M69"]').simulate('click');
      wrapper.find('button[children="Remove"]').simulate('click');

      expect(wrapper.text()).not.toContain('M698.5');
    });
  });
});
