import React from 'react';
import { shallow } from 'enzyme';

import LoadedCharacterShootingHeader from './index';

describe('Header', () => {
  const setFirearm = jest.fn();

  const wrapper = shallow(
    <LoadedCharacterShootingHeader
      setFirearm={setFirearm}
      firearmName="PewPew Stick"
    />,
  );

  it('should close shooting modal', () => {
    wrapper.find('button').simulate('click');
    expect(setFirearm).toHaveBeenCalledWith(false);
  });
});
