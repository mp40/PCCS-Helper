import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './component';

describe('Home Page', () => {
  const viewCreateCharacter = jest.fn();

  const wrapper = shallow(
    <HomePage viewCreateCharacter={viewCreateCharacter} />,
  );

  beforeEach(() => {
    viewCreateCharacter.mockClear();
  });

  it('should render the correct page when Create Charcter is clicked', () => {
    wrapper.find('button[children="Create Character"]').simulate('click');

    expect(viewCreateCharacter).toHaveBeenCalled();
  });

  it('should hide load character modal by default', () => {
    expect(wrapper.find('LoadCharacterModal').exists()).toBe(false);
  });

  it('should open load character modal when Load Character button clicked', () => {
    wrapper.find('button[children="Load Character"]').simulate('click');

    expect(wrapper.find('Connect(LoadCharacterModal)').exists()).toBe(true);
  });
});
