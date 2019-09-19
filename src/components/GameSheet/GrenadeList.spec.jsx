import React from 'react';
import { shallow } from 'enzyme';

import GrenadeList from './GrenadeList';

const grenadeDouble = [{ name: 'The Holy Hand Grenade Of Antioch', qty: 1 }];

describe('The Grenade List', () => {
  const wrapper = shallow(<GrenadeList grenades={grenadeDouble} />);
  it('should render a list of selected grenades', () => {
    expect(wrapper.text()).toContain('The Holy Hand Grenade Of Antioch');
  });
});
