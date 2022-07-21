import React from 'react';
import { shallow } from 'enzyme';

import LoadedCharacterShootingHeader from './index';

describe('Header', () => {
  const setWeapon = jest.fn();

  const wrapper = shallow(
    <LoadedCharacterShootingHeader
      setWeapon={setWeapon}
      firearmName="PewPew Stick"
    />,
  );

  it('should close shooting modal', () => {
    wrapper.find('button').simulate('click');
    expect(setWeapon).toHaveBeenCalledWith(false);
  });
});
