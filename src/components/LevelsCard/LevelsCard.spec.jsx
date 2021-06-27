import React from 'react';
import { shallow } from 'enzyme';

import LevelsCard from './index';

describe('Levels Card', () => {
  let wrapper;

  const stubStat1 = jest.fn();
  const stubStat2 = jest.fn();
  const stubStat3 = jest.fn();

  const heading = 'Mock Heading';
  const stats = {
    stat1: { text: 'Stat 1', value: 1, handleClick: stubStat1 },
    stat2: { text: 'Stat 2', value: 2, handleClick: stubStat2 },
    stat3: { text: 'Stat 3', value: 3, handleClick: stubStat3 },
  };
  const min = 3;
  const length = 12;

  beforeEach(() => {
    wrapper = shallow(
      <LevelsCard
        heading={heading}
        stats={stats}
        min={min}
        length={length}
      />,
    );
  });

  it('should not render modal by default', () => {
    expect(wrapper.find('KeyPadModal').exists()).toBe(false);
  });

  it('should display correct heading', () => {
    expect(wrapper.find('.heading').text()).toContain(heading);
  });

  it('should display stat text', () => {
    expect(wrapper.text()).toContain('Stat 1');
    expect(wrapper.text()).toContain('Stat 2');
    expect(wrapper.text()).toContain('Stat 3');
  });

  it('should display correct stat values', () => {
    expect(wrapper.find('button').at(0).find('span').at(1)
      .text()).toContain('1');

    expect(wrapper.find('button').at(1).find('span').at(1)
      .text()).toContain('2');

    expect(wrapper.find('button').at(2).find('span').at(1)
      .text()).toContain('3');
  });

  it('should be able to open modal', () => {
    wrapper.find('span[children="Stat 1"]').closest('button').simulate('click');

    expect(wrapper.find('KeyPadModal').exists()).toBe(true);
  });

  it('should have a key pad of buttons starting at the min value', () => {
    wrapper.find('span[children="Stat 1"]').closest('button').simulate('click');

    const keyPad = wrapper.find('KeyPadModal').dive().find('KeyPad').dive();

    expect(keyPad.find('button').at(0).text()).toBe(`${min}`);
  });

  it('should have a key pad of with as many buttons as the length', () => {
    wrapper.find('span[children="Stat 1"]').closest('button').simulate('click');

    const keyPad = wrapper.find('KeyPadModal').dive().find('KeyPad').dive();

    expect(keyPad.find('button').length).toBe(length);
  });

  it('should have a key pad with the correct last button value', () => {
    wrapper.find('span[children="Stat 1"]').closest('button').simulate('click');

    const keyPad = wrapper.find('KeyPadModal').dive().find('KeyPad').dive();

    const buttonLength = keyPad.find('button').length;

    expect(keyPad.find('button').at(buttonLength - 1).text()).toBe(`${min + length - 1}`);
  });

  it('should be possible to select new value for the stat', () => {
    wrapper.find('span[children="Stat 2"]').closest('button').simulate('click');

    const keyPad = wrapper.find('KeyPadModal').dive().find('KeyPad').dive();

    keyPad.find('button[children=6]').simulate('click');

    expect(stubStat2).toHaveBeenCalledWith(6);
  });

  it('should close the modal when value selected', () => {
    wrapper.find('span[children="Stat 3"]').closest('button').simulate('click');

    const keyPad = wrapper.find('KeyPadModal').dive().find('KeyPad').dive();

    keyPad.find('button[children=6]').simulate('click');

    expect(wrapper.find('KeyPadModal').exists()).toBe(false);
  });
});
