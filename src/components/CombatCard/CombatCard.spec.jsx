import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { getStore } from '../../helpers/testHelpers';

import ConnectedCombatCard from '.';

describe('Character Combat Skills intergration tests', () => {
  let wrapper;
  const store = getStore();

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ConnectedCombatCard />
      </Provider>,
    );
  });

  it('should update Gun Level', () => {
    wrapper.find('span[children="Gun"]').closest('button').simulate('click');

    wrapper.find('KeyPad').find('button[children=5]').simulate('click');

    expect(wrapper.find('span[children="Gun"]').closest('button').text()).toBe('Gun5');
  });

  it('should update Hand Level', () => {
    wrapper.find('span[children="Hand"]').closest('button').simulate('click');

    wrapper.find('KeyPad').find('button[children=2]').simulate('click');

    expect(wrapper.find('span[children="Hand"]').closest('button').text()).toBe('Hand2');
  });
});
