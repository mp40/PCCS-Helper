import React from 'react';
import { shallow } from 'enzyme';

import LinkWrapper from './link-wrapper';

import * as shared from './shared';

describe('describe link wrapper', () => {
  it('should ..', () => {
    const eventDouble = undefined;
    const href = '/test';
    const wrapper = shallow(
      <LinkWrapper href={href}>
        <span />
      </LinkWrapper>,
    );

    jest.spyOn(shared, 'onClick').mockImplementation(() => {});

    wrapper.find('a').simulate('click');

    expect(shared.onClick).toHaveBeenCalledWith(eventDouble, href);
  });
});
