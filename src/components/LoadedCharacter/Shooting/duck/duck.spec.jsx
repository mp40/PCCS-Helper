import React from 'react';
import { mount } from 'enzyme';

import Duck from '.';

describe('Duck ALM', () => {
  const setDuckAlm = jest.fn();

  const mountComponent = () => mount(<Duck setDuckAlm={setDuckAlm} />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call setDuckAlm with 0 on mount', () => {
    mountComponent();

    expect(setDuckAlm).toHaveBeenCalledTimes(1);
    expect(setDuckAlm).toHaveBeenCalledWith(0);
  });

  it('should call setDuckAlm with -10 when shooter ducks', () => {
    const wrapper = mountComponent();
    jest.clearAllMocks();

    wrapper.find('button[children="Duck\nShooter"]').simulate('click');

    expect(setDuckAlm).toHaveBeenCalledTimes(1);
    expect(setDuckAlm).toHaveBeenCalledWith(-10);
  });

  it('should call setDuckAlm with -5 when target ducks', () => {
    const wrapper = mountComponent();
    jest.clearAllMocks();

    wrapper.find('button[children="Duck\nTarget"]').simulate('click');

    expect(setDuckAlm).toHaveBeenCalledTimes(1);
    expect(setDuckAlm).toHaveBeenCalledWith(-5);
  });

  it('should call setDuckAlm with -15 when target and shooter ducks', () => {
    const wrapper = mountComponent();
    jest.clearAllMocks();

    wrapper.find('button[children="Duck\nTarget"]').simulate('click');
    wrapper.find('button[children="Duck\nShooter"]').simulate('click');

    expect(setDuckAlm).toHaveBeenCalledWith(-15);
  });
});
