import React from 'react';
import { shallow } from 'enzyme';
import Print from './component';

const selectCurrentView = jest.fn();

describe('Printing the reference sheet', () => {
  const wrapper = shallow(<Print selectCurrentView={selectCurrentView} />);
  it('should call the selectCurrentView action with "printRefSheet"', () => {
    wrapper.find('button').simulate('click');
    expect(selectCurrentView).toHaveBeenCalledWith('printRefSheet');
  });
});
