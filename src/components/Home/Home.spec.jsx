import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './component';

describe('Home Page', () => {
  const selectCurrentView = jest.fn();
  const wrapper = shallow(<HomePage selectCurrentView={selectCurrentView} />);
  beforeEach(() => {
    selectCurrentView.mockClear();
  });
  it('should render the correct page when Create Charcter is clicked', () => {
    wrapper.find('#activateCreateChar').simulate('click');
    expect(selectCurrentView).toHaveBeenCalledWith('createChar');
  });
});
