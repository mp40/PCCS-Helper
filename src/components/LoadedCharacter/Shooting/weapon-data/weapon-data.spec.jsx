import React from 'react';
import { mount } from 'enzyme';

import WeaponData from './index';
import { WeaponProvider } from '../context';

import { firearms } from '../../../../data/firearms';

jest.mock('./thrown', () => () => {
  const MockThrown = 'mocked-thrown-component';
  return <MockThrown />;
});
jest.mock('./ballistic', () => () => {
  const MockBallistic = 'mocked-ballistic-component';
  return <MockBallistic />;
});

const testFAMAS = () => ({ ...firearms.FAMAS });

const grenadeDouble = {
  name: 'Mr Grenade', length: 6, weight: 1.5, r: 10, fl: 2, list: 'grenades', data: {}, heading: 'the heading',
};

describe('WeaponData Component', () => {
  it('should render the Thrown component if weapon list is grenades', () => {
    const wrapper = mount(
      <WeaponProvider weapon={grenadeDouble}>
        <WeaponData level={1} alm={9} rof="Single" />
      </WeaponProvider>,
    );

    expect(wrapper.find('mocked-thrown-component').exists()).toBe(true);
  });

  it('should render the Ballistic component if weapon list is not grenades', () => {
    const wrapper = mount(
      <WeaponProvider weapon={{ ...testFAMAS() }}>
        <WeaponData level={1} alm={9} rof="Single" />
      </WeaponProvider>,
    );

    expect(wrapper.find('mocked-ballistic-component').exists()).toBe(true);
  });
});
