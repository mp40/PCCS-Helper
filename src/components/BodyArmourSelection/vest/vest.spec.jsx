import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import ConnectedVest from '.';

import { getStore } from '../../../helpers/testStore';

describe('select helmet integration', () => {
  const store = getStore();

  const closeModal = jest.fn();

  const wrapper = mount(
    <Provider store={store}>
      <ConnectedVest closeModal={closeModal} />
    </Provider>,
  );

  it('should update vest', () => {
    wrapper.find('td[children="M69"]').simulate('click');

    expect(store.getState().currentCharacter.vest).toBe('M69');
  });
});
