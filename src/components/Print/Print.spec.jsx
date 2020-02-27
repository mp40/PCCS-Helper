import React from 'react';
import { shallow } from 'enzyme';
import Print from './component';

// eslint-disable-next-line import/named
import { App } from '../../App';

import { mountAppWithStore, storeWithCreateCharacterView } from '../../helpers/testHelpers';

const selectCurrentView = jest.fn();

describe('Printing the reference sheet', () => {
  it('should call the selectCurrentView action with "printRefSheet"', () => {
    const wrapper = shallow(<Print selectCurrentView={selectCurrentView} />);
    wrapper.find('button').simulate('click');
    expect(selectCurrentView).toHaveBeenCalledWith('printRefSheet');
  });
  it('should render GameSheet when view is "printRefSheet"', () => {
    const wrapper = shallow(<App currentView="home" />);
    expect(wrapper.find('Connect(GameSheet)').exists()).toBe(false);
    wrapper.setProps({ currentView: 'printRefSheet' });
    expect(wrapper.find('Connect(GameSheet)').exists()).toBe(true);
  });
  it('should finish the print life cycle with GameSheet closed', () => {
    global.print = jest.fn();
    const wrapper = mountAppWithStore(storeWithCreateCharacterView());
    wrapper.find('.print-button').simulate('click');
    expect(wrapper.find('GameSheet').exists()).toBe(false);
    expect(wrapper.find('CharacterGeneration').exists()).toBe(true);
  });
});
