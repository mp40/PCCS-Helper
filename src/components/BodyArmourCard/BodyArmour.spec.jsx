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
      wrapper.find('.helmetBodyArmour').simulate('click');
      wrapper.find('.M1Row').simulate('click');

      expect(wrapper.find('.helmetBodyArmour').childAt(0).text()).toBe('M1');
      expect(wrapper.find('.helmetBodyArmour').childAt(1).text()).toBe('2.5');
    });

    it('should update body armour card and total weight when vest selected', () => {
      wrapper.find('.vestBodyArmour').simulate('click');
      wrapper.find('.M69Row').simulate('click');

      expect(wrapper.find('.vestBodyArmour').childAt(0).text()).toBe('M69');
      expect(wrapper.find('.vestBodyArmour').childAt(1).text()).toBe('8.5');
    });

    it('should be able to remove helmet', () => {
      wrapper.find('.helmetBodyArmour').simulate('click');
      wrapper.find('button[children="Remove"]').simulate('click');

      expect(wrapper.find('.helmetBodyArmour').childAt(0).text()).toBe('No Helmet');
      expect(wrapper.find('.helmetBodyArmour').childAt(1).text()).toBe('0');
    });

    it('should be able to remove vest', () => {
      wrapper.find('.vestBodyArmour').simulate('click');
      wrapper.find('button[children="Remove"]').simulate('click');

      expect(wrapper.find('.vestBodyArmour').childAt(0).text()).toBe('No Vest');
      expect(wrapper.find('.vestBodyArmour').childAt(1).text()).toBe('0');
    });
  });
});
