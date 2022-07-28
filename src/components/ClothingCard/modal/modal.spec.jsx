import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import ConnectedSelectUniformModal from '.';

import { getStore } from '../../../helpers/testStore';

describe('select helmet integration', () => {
  const store = getStore();

  const closeModal = jest.fn();

  const wrapper = mount(
    <Provider store={store}>
      <ConnectedSelectUniformModal closeModal={closeModal} />
    </Provider>,
  );

  it('should update uniform', () => {
    wrapper.find('span[children="Winter"]').closest('button').simulate('click');

    expect(store.getState().currentCharacter.uniform).toBe('Winter');
  });

  it('should be possible to exit modal', () => {
    wrapper.find('.close').simulate('click');

    expect(closeModal).toHaveBeenCalled();
  });
});
