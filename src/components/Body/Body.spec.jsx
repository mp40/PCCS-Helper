import React from 'react';
import { shallow } from 'enzyme';

import Body from '.';

describe('Routes', () => {
  afterEach(() => {
    window.history.pushState({}, '', '/');
  });

  it('should render the home page when pathname /', () => {
    const wrapper = shallow(<Body signedIn={false} />);

    expect(wrapper.find('Connect(HomePage)').exists()).toBe(true);
  });

  it('should render the create character page when pathname /edit', () => {
    window.history.pushState({}, '', '/edit');
    const wrapper = shallow(<Body signedIn={false} />);

    expect(wrapper.find('Connect(CharacterGeneration)').exists()).toBe(true);
  });

  it('should render the loaded character page when pathname /use', () => {
    window.history.pushState({}, '', '/use');
    const wrapper = shallow(<Body signedIn={false} />);

    expect(wrapper.find('Connect(LoadedCharacter)').exists()).toBe(true);
  });

  it('should render the password reset page when pathname /reset', () => {
    window.history.pushState({}, '', '/reset');
    const wrapper = shallow(<Body signedIn={false} />);

    expect(wrapper.find('Reset').exists()).toBe(true);
  });
});
