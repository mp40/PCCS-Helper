import React from 'react';
import { mount } from 'enzyme';

import { Provider } from 'react-redux';

import { getStore } from '../../helpers/testStore';

import ConnectedAttributeCard from '.';

describe('Character Attributes intergration tests', () => {
  let wrapper;
  const store = getStore();

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ConnectedAttributeCard />
      </Provider>,
    );
  });

  it('should update Strength', () => {
    wrapper.find('span[children="Strength"]').closest('button').simulate('click');

    wrapper.find('KeyPad').find('button[children=18]').simulate('click');

    expect(wrapper.find('span[children="Strength"]').closest('button').text()).toBe('Strength18');
  });

  it('should update Intelligence', () => {
    wrapper.find('span[children="Intelligence"]').closest('button').simulate('click');

    wrapper.find('KeyPad').find('button[children=17]').simulate('click');

    expect(wrapper.find('span[children="Intelligence"]').closest('button').text()).toBe('Intelligence17');
  });

  it('should update Willpower', () => {
    wrapper.find('span[children="Willpower"]').closest('button').simulate('click');

    wrapper.find('KeyPad').find('button[children=16]').simulate('click');

    expect(wrapper.find('span[children="Willpower"]').closest('button').text()).toBe('Willpower16');
  });

  it('should update Health', () => {
    wrapper.find('span[children="Health"]').closest('button').simulate('click');

    wrapper.find('KeyPad').find('button[children=15]').simulate('click');

    expect(wrapper.find('span[children="Health"]').closest('button').text()).toBe('Health15');
  });

  it('should update Agility', () => {
    wrapper.find('span[children="Agility"]').closest('button').simulate('click');

    wrapper.find('KeyPad').find('button[children=14]').simulate('click');

    expect(wrapper.find('span[children="Agility"]').closest('button').text()).toBe('Agility14');
  });
});
