import React from 'react';
import { shallow } from 'enzyme';

import FirearmRow from './firearm-row';

describe('FirearmRow', () => {
  let wrapper;

  const removeItem = jest.fn();
  const increaseItem = jest.fn();
  const decreaseItem = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <FirearmRow
        text="Mock Firearm"
        removeItem={removeItem}
        firearmIndex={0}
        weight={9}
        qty={1}
        increaseItem={increaseItem}
        decreaseItem={decreaseItem}
      />,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have link to modify firearm using firearm index', () => {
    const linkWrapper = wrapper.find('LinkWrapper');

    expect(linkWrapper.props().href).toBe('modify/0');
  });
});
