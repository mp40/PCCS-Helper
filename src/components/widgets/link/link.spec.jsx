import React from 'react';
import { shallow } from 'enzyme';

import Link from '.';

describe('describe links', () => {
  it('should open external links in new tab', () => {
    const wrapper = shallow(<Link href="/" text="some text" external />);

    expect(wrapper.props()).toEqual(expect.objectContaining({ target: '_blank' }));
  });
});
