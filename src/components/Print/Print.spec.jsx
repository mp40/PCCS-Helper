import React from 'react';
import { shallow } from 'enzyme';
import Print from './component';
import { mountAppWithStore } from '../../helpers/testHelpers';

const selectCurrentView = jest.fn();

describe('Printing the reference sheet', () => {
  it('should call the selectCurrentView action with "printRefSheet"', () => {
    const wrapper = shallow(<Print selectCurrentView={selectCurrentView} />);
    wrapper.find('button').simulate('click');
    expect(selectCurrentView).toHaveBeenCalledWith('printRefSheet');
  });
  it('should render GameSheet when view is "printRefSheet"', () => {
    global.print = jest.fn();
    const wrapper = mountAppWithStore();
    const state = wrapper.state();
    expect(wrapper.state().storeState.currentView).toBe('home');
    expect(wrapper.find('GameSheet').exists()).toBe(false);
    wrapper.setState({ ...state, storeState: { ...state.storeState, currentView: 'printRefSheet' } });
    expect(wrapper.find('GameSheet').exists()).toBe(true);
  });
});
