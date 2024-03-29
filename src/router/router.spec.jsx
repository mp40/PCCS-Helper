import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

import App from '../components/App';
import Body from '.';

import { getStore } from '../helpers/testStore';

describe('Routes', () => {
  afterEach(() => {
    window.history.pushState({}, '', '/');
  });

  it('should render the home page when pathname /', () => {
    const wrapper = shallow(<Body signedIn={false} />);

    expect(wrapper.find('HomePage').exists()).toBe(true);
  });

  it('should render the create character page when pathname /edit', () => {
    window.history.pushState({}, '', '/edit');
    const wrapper = shallow(<Body signedIn={false} />);

    expect(wrapper.find('Connect(EditPage)').exists()).toBe(true);
  });

  it('should render the modify firearm page when pathname /modify/n', () => {
    window.history.pushState({}, '', '/modify/0');
    const wrapper = shallow(<Body signedIn={false} />);

    expect(wrapper.find('ModifyPage').exists()).toBe(true);
  });

  it('should use the firearm index to modify in url as prop', () => {
    window.history.pushState({}, '', '/modify/0');
    const wrapper = shallow(<Body signedIn={false} />);

    expect(wrapper.props()).toEqual({ firearmIndex: 0 });
  });

  it('should render the loaded character page when pathname /use', () => {
    window.history.pushState({}, '', '/use');
    const wrapper = shallow(<Body signedIn={false} />);

    expect(wrapper.find('Connect(UsePage)').exists()).toBe(true);
  });

  it('should render the password reset page when pathname /reset', () => {
    window.history.pushState({}, '', '/reset');
    const wrapper = shallow(<Body signedIn={false} />);

    expect(wrapper.find('ResetPage').exists()).toBe(true);
  });

  it('should render 404 if pathname does not match', () => {
    window.history.pushState({}, '', '/this/does/not/exist');
    const wrapper = shallow(<Body signedIn={false} />);

    expect(wrapper.find('FourOhFourPage').dive().text()).toBe('404');
  });
});

describe('Router integration', () => {
  const wrapper = mount(
    <Provider store={getStore()}>
      <App />
    </Provider>,
  );

  it('should navigate to edit character page via href link', () => {
    wrapper.find('button[children="Create Character"]').simulate('click');

    expect(wrapper.find('EditPage').exists()).toBe(true);
  });

  it('should navigate home via home link', () => {
    wrapper.find('Header').find('Link').find('button').simulate('click');

    expect(wrapper.find('CharacterGeneration').exists()).toBe(false);
    expect(wrapper.find('HomePage').exists()).toBe(true);
  });

  it('should clean up event listener on unmount', () => {
    const remover = jest
      .spyOn(global, 'removeEventListener')
      .mockImplementation(() => {});

    return Promise.resolve().then(() => {
      wrapper.unmount();
      expect(remover).toHaveBeenCalled();
    });
  });
});
