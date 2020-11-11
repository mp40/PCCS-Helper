import React from 'react';
import { shallow } from 'enzyme';

import Print from './index';

// mptodo - clean up
// eslint-disable-next-line import/named
// import App from '../../App/component';

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

  // it('should render GameSheet when view is "printRefSheet"', () => {
  //   const wrapper = shallow(<App currentView="home" />);
  //   expect(wrapper.find('Connect(GameSheet)').exists()).toBe(false);
  //   wrapper.setProps({ currentView: 'printRefSheet' });

  //   expect(wrapper.find('Connect(GameSheet)').exists()).toBe(true);
  // });

  // it('should finish the print life cycle with GameSheet closed', () => {
  //   global.print = jest.fn();

  // mptodo clean up this shit
  //   console.log(wrapper.debug());
  //   wrapper.find('.print-button').simulate('click');
  //   expect(wrapper.find('GameSheet').exists()).toBe(false);
  //   expect(wrapper.find('CharacterGeneration').exists()).toBe(true);
  // });
});
