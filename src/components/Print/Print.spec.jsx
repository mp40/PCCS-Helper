import React from 'react';
import { shallow } from 'enzyme';

import Print from './component';

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
});
