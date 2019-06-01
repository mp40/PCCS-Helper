import React from 'react';
import { shallow } from 'enzyme';
import WeaponsCardModifyWeight from './WeaponsCardModifyWeight';

describe('the <WeaponsCardCustomMag/> component', () => {
  const wrapper = shallow(<WeaponsCardModifyWeight />);
  it('should take an input for a note on modification', () => {
    wrapper.find('#modifyWeightNoteInput').simulate('change', {
      target: { value: 'removed stock' },
    });
    expect(wrapper.state('modWeightNote')).toEqual('removed stock');
  });
  it('should take an input for weight', () => {
    wrapper.find('#modifyWeightValueInput').simulate('change', {
      target: { value: '1.2' },
    });
    expect(wrapper.state('modWeightNumber')).toEqual('1.2');
  });
});
