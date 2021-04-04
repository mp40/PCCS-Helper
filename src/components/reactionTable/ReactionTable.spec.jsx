import React from 'react';
import { shallow } from 'enzyme';

import ReactionTable from '.';

describe('The Reaction Table', () => {
  const sal = 10;

  const wrapper = shallow(<ReactionTable sal={sal} />);

  it('should render any action roll value', () => {
    expect(wrapper.text()).toContain('Any Action≤ 7');
  });

  it('should render any duck roll value', () => {
    expect(wrapper.text()).toContain('Duck/Go Prone≤ 10');
  });

  it('should render any reroll value', () => {
    expect(wrapper.text()).toContain('-1 AC & Reroll≤ 11');
  });
});
