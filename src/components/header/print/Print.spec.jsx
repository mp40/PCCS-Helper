import React from 'react';
import { shallow } from 'enzyme';

import Print from './index';

import Header from '../component';

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
