import React from 'react';
import { shallow } from 'enzyme';
import HeaderModal from './index';

describe('Header Modal', () => {
  const handleShowModal = jest.fn();
  const handleSubmitUser = jest.fn();
  const handleSwitchModal = jest.fn();

  const event = { preventDefault: () => {} };

  describe('modal', () => {
    const wrapper = shallow(
      <HeaderModal
        type="signup"
        handleShowModal={handleShowModal}
        handleSubmitUser={handleSubmitUser}
        handleSwitchModal={handleSwitchModal}
      />,
    );

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should be possible to close modal', () => {
      wrapper.find('.close').simulate('click');
      expect(handleShowModal).toHaveBeenCalled();
    });

    it('should be possible to switch from Sign Up modal to Sign In', () => {
      wrapper.find('.switchModal').simulate('click');
      expect(handleSwitchModal).toHaveBeenCalled();
    });

    it('should be possible to input email', () => {
      const input = wrapper.find('input').at(0);
      input.simulate('change', { target: { value: 'test@gmail.com' } });

      expect(wrapper.find('input').at(0).props().value).toBe('test@gmail.com');
    });

    it('should be possible to input password', () => {
      const input = wrapper.find('input').at(1);
      input.simulate('change', { target: { value: 'password' } });

      expect(wrapper.find('input').at(1).props().value).toBe('password');
    });

    it('should be possible to submit details', () => {
      const form = wrapper.find('form');
      form.simulate('submit', event);

      expect(handleSubmitUser).toHaveBeenCalledWith({
        email: 'test@gmail.com',
        password: 'password',
      });
    });
  });

  describe('form validation', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <HeaderModal
          type="signup"
          handleShowModal={handleShowModal}
          handleSubmitUser={handleSubmitUser}
          handleSwitchModal={handleSwitchModal}
        />,
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should not render with errors', () => {
      expect(wrapper.text()).not.toContain('Valid email required');
      expect(wrapper.text()).not.toContain('Requires minimum six characters');
    });

    it('should not submit form if email is missing', () => {
      wrapper
        .find('input')
        .at(1)
        .simulate('change', { target: { value: 'password' } });

      const form = wrapper.find('form');
      form.simulate('submit', event);

      expect(handleSubmitUser).not.toHaveBeenCalled();
      expect(wrapper.text()).toContain('Valid email required');
    });

    it('should not submit form if email does not contain @ symbol', () => {
      wrapper
        .find('input')
        .at(0)
        .simulate('change', { target: { value: 'camel266' } });

      wrapper
        .find('input')
        .at(1)
        .simulate('change', { target: { value: 'password' } });

      const form = wrapper.find('form');
      form.simulate('submit', event);

      expect(handleSubmitUser).not.toHaveBeenCalled();
      expect(wrapper.text()).toContain('Valid email required');
    });

    it('should not submit form if password is less than six characters', () => {
      wrapper
        .find('input')
        .at(0)
        .simulate('change', { target: { value: 'camel266@gmail.com' } });

      wrapper
        .find('input')
        .at(1)
        .simulate('change', { target: { value: '12345' } });

      const form = wrapper.find('form');
      form.simulate('submit', event);

      expect(handleSubmitUser).not.toHaveBeenCalled();
      expect(wrapper.text()).toContain('Requires minimum six characters');
    });
  });
});
