import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import ConnectedNameCardModal from '.';

import { getStore } from '../../../helpers/testStore';

describe('select helmet integration', () => {
  const store = getStore();

  const closeModal = jest.fn();

  const wrapper = mount(
    <Provider store={store}>
      <ConnectedNameCardModal closeModal={closeModal} />
    </Provider>,
  );

  it('should update uniform', () => {
    wrapper.find('input').simulate('change', { target: { value: 'Biggles' } });
    wrapper.find('button').simulate('click');

    expect(store.getState().currentCharacter.name).toBe('Biggles');
  });
});
