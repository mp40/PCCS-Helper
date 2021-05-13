import React from 'react';
import { shallow } from 'enzyme';

import LoadedCharacter from './component';

import { NewCharacter } from '../../reducers/newCharacter';
import { testFAMAS } from '../../helpers/testHelpers';

describe('Loaded Character', () => {
  let wrapper;
  const currentCharacter = new NewCharacter();
  currentCharacter.firearms = [testFAMAS()];
  const selectCurrentView = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<LoadedCharacter currentCharacter={currentCharacter} selectCurrentView={selectCurrentView} />);
  });

  it('should render without firearm selected for shooting', () => {
    expect(wrapper.find('LoadedCharacterShooting').exists()).toBe(false);
  });

  it('should render firearm shooting card when firearm selected', () => {
    wrapper.find('LoadedCharacterWeapons').invoke('setFirearm')(testFAMAS());

    expect(wrapper.find('LoadedCharacterShooting').exists()).toBe(true);
  });
});
