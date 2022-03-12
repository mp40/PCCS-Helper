import React from 'react';
import { shallow } from 'enzyme';

import CharacterGrenades from './index';

const mockGrenade = { name: 'The Holy Hand Grenade Of Antioch', qty: 1 };

describe('Loaded Character Reference Card', () => {
  it('should render characters grenades', () => {
    const wrapper = shallow(
      <CharacterGrenades
        grenades={[mockGrenade]}
      />,
    );

    expect(wrapper.text()).toContain('The Holy Hand Grenade Of Antioch');
  });

  it('should not render if no grenades', () => {
    const wrapper = shallow(<CharacterGrenades grenades={[]} />);

    expect(wrapper.isEmptyRender()).toBe(true);
  });
});
