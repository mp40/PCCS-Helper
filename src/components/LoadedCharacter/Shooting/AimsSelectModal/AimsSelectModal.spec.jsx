import React from 'react';
import { shallow } from 'enzyme';

import AimsSelectModal from './index';

describe('Aim Select Modal', () => {
  let wrapper;
  const setAims = jest.fn();
  const setModal = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<AimsSelectModal aims={1} maxAims={6} setAims={setAims} setModal={setModal} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render a button for each aim option', () => {
    wrapper = wrapper.dive();

    expect(wrapper.find('button').find({ children: 1 }).exists()).toBe(true);
    expect(wrapper.find('button').find({ children: 2 }).exists()).toBe(true);
    expect(wrapper.find('button').find({ children: 3 }).exists()).toBe(true);
    expect(wrapper.find('button').find({ children: 4 }).exists()).toBe(true);
    expect(wrapper.find('button').find({ children: 5 }).exists()).toBe(true);
    expect(wrapper.find('button').find({ children: 6 }).exists()).toBe(true);
  });

  it('should not render a button for non aim options', () => {
    wrapper = wrapper.dive();

    expect(wrapper.find('button').find({ children: 0 }).exists()).toBe(false);
    expect(wrapper.find('button').find({ children: 7 }).exists()).toBe(false);
  });

  it('should set the aim value  when button clicked', () => {
    wrapper = wrapper.dive();

    wrapper.find('button').find({ children: 1 }).simulate('click');

    expect(setAims).toHaveBeenCalledWith(1);
  });

  it('should close the modal when button clicked', () => {
    wrapper = wrapper.dive();

    wrapper.find('button').find({ children: 1 }).simulate('click');

    expect(setModal).toHaveBeenCalledWith(false);
  });
});
