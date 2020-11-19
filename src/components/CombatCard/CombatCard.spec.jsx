import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { getStore } from '../../helpers/testHelpers';

import ConnectedCombatCard from '.';

describe('the CombatCard component', () => {
  describe('combat card intergration tests', () => {
    const store = getStore();

    const wrapper = mount(
      <Provider store={store}>
        <ConnectedCombatCard />
      </Provider>,
    );

    const inputAttribute = (attributeId, newValue) => {
      wrapper.find(attributeId).simulate('click');
      wrapper.find(`${attributeId} input`).simulate('keyUp', { target: { value: newValue },
        key: 'Enter' });
    };

    it('should update gun combat level', () => {
      inputAttribute('.updateGun', '4');

      expect(wrapper.find('.updateGun').text()).toContain('4');
    });

    it('should update hand to hand combat level', () => {
      inputAttribute('.updateHand', '2');

      expect(wrapper.find('.updateHand').text()).toContain('2');
    });
  });
});
