import React from 'react';
import { shallow } from 'enzyme';

import { NewCharacter } from '../../../reducers/newCharacter';

import LoadedCharacterReferenceTables from './index';

describe('Loaded Character Reference Card', () => {
  let wrapper;

  const currentCharacter = new NewCharacter();
  const selectCurrentView = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <LoadedCharacterReferenceTables
        currentCharacter={currentCharacter}
        selectCurrentView={selectCurrentView}
      />,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be possible to edit character', () => {
    wrapper.find('button').simulate('click');

    expect(selectCurrentView).toHaveBeenCalledWith('createChar');
  });
});
