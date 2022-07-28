import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import ConnectedHelmet from '.';

import { getStore } from '../../../helpers/testStore';

describe('select helmet integration', () => {
  const store = getStore();

  const closeModal = jest.fn();

  const wrapper = mount(
    <Provider store={store}>
      <ConnectedHelmet closeModal={closeModal} />
    </Provider>,
  );

  it('should update helmet', () => {
    wrapper.find('td[children="SPECTRA"]').simulate('click');

    expect(store.getState().currentCharacter.helmet).toBe('SPECTRA');
  });
});
