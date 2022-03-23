import React from 'react';
import { mount } from 'enzyme';
import { AlmStateProvider } from '../../context';

import ThrownData from './index';

const grenadeDouble = {
  name: 'Mr Grenade', length: 6, weight: 1.5, r: 10, fl: 2, list: 'grenades', data: {}, heading: 'the heading',
};

describe('Thrown Weapon Data', () => {
  const wrapper = mount(
    <AlmStateProvider state={{ range: 10, target: 'Hex - indirect' }}>
      <ThrownData alm={10} grenade={grenadeDouble} />
    </AlmStateProvider>,
  );

  it('should calculate hit change', () => {
    expect(wrapper.text()).toContain('Hit Chance: 80%');
  });

  it('should calculate TOF', () => {
    expect(wrapper.text()).toContain('TOF: 4.3');
  });
});
