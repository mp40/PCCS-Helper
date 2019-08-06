import React from 'react';
import { mount, shallow } from 'enzyme';
import GrenadeSelectModal from './index';

describe('GrenadeSelectModal', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const wrapper = shallow(<GrenadeSelectModal />);
  it('should render a list of grenades', () => {
    expect(wrapper.text()).toContain('#36M');
  });
});
