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

// mptodo - keep below test?
//   it('updates actions and other combat data when levels change', () => {
//     const gunActionsTable = wrapper.find('.actionsTable').at(0);
//     const handActionsTable = wrapper.find('.actionsTable').at(1);
//     const additionalData = wrapper.find('.additionalCombatData');
//     expect(gunActionsTable.text()).toEqual('Gun2122');
//     expect(handActionsTable.text()).toEqual('Hand2121');
//     expect(additionalData.text()).toEqual('BS 3MS 6DB 1.5');
//   });
