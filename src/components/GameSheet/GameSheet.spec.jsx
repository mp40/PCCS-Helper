import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { firearms } from '../../data/firearms';

import ConnectedGameSheet from '.';

import { getStore } from '../../helpers/testHelpers';
import { getInitialReduxState } from '../../helpers/initialStore';

const testFAMAS = () => ({ ...firearms.FAMAS });

global.print = jest.fn();

describe('<GameSheet>', () => {
  const initialStore = getInitialReduxState();

  const currentCharacter = {
    name: 'Biggles',
    str: 10,
    int: 10,
    hlt: 10,
    wil: 10,
    agi: 10,
    gunLevel: 4,
    handLevel: 1,
    uniform: 'Normal',
    equipment: [],
    firearms: [testFAMAS()],
    grenades: [],
    launchers: [],
    helmet: undefined,
    vest: undefined,
  };
  const closeModal = jest.fn();

  const getWrapper = (store) => mount(
    <Provider store={getStore(store)}>
      <ConnectedGameSheet
        closeModal={closeModal}
      />
    </Provider>);

  it('should render first gun in firearms list with recoil recovery', () => {
    const wrapper = getWrapper({ ...initialStore, currentCharacter: { ...currentCharacter } });

    expect(wrapper.text()).toContain('FAMAS - recoil recovery: 0');
  });

  it('should inform if no firearmns selected', () => {
    const wrapper = getWrapper({ ...initialStore, currentCharacter: { ...currentCharacter, firearms: [] } });

    expect(wrapper.text()).toContain('None');
  });
});
