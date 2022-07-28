import React from 'react';
import { shallow } from 'enzyme';

import LoadedCharacterMelee from '.';

describe('the melee card', () => {
  it('should render card with table of melee weapons', () => {
    const wrapper = shallow(<LoadedCharacterMelee melee={['ashtray']} handLevel={0} />);

    expect(wrapper.find('HandToHandTable').exists()).toBe(true);
  });

  it('should not render card if no melee weapons', () => {
    const wrapper = shallow(<LoadedCharacterMelee melee={[]} handLevel={0} />);

    expect(wrapper.isEmptyRender()).toBe(true);
  });
});
