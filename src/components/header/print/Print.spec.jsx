import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

import Print from './index';

import Header from '../component';

import App from '../../App';

import { getStoreWithGun, testM1911A1 } from '../../../helpers/testHelpers';

describe('Printing the reference sheet', () => {
  const selectCurrentView = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call the selectCurrentView action with "printRefSheet"', () => {
    const wrapper = shallow(<Print selectCurrentView={selectCurrentView} />);
    wrapper.find('button').simulate('click');

    expect(selectCurrentView).toHaveBeenCalledWith('printRefSheet');
  });

  it('should not show when not in the create character view', () => {
    const wrapper = shallow(<Header currentView="home" selectCurrentView={selectCurrentView} signedIn={false} handleSetSignedIn={() => {}} />);

    expect(wrapper.find('Print').exists()).toBe(false);
  });

  it('should show when in the create character view', () => {
    const wrapper = shallow(<Header currentView="createChar" selectCurrentView={selectCurrentView} signedIn={false} handleSetSignedIn={() => {}} />);

    expect(wrapper.find('Print').exists()).toBe(true);
  });
});

describe('Print intergration', () => {
  global.print = jest.fn();
  const store = getStoreWithGun(testM1911A1());

  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  it('should close the game sheet imediately after calling print', () => {
    wrapper.find('.print-button').simulate('click');

    expect(wrapper.find('GameSheet').exists()).toBe(false);
    expect(wrapper.find('CharacterGeneration').exists()).toBe(true);
  });
});
