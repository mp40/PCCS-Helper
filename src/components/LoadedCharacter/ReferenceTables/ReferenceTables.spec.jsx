import React from 'react';
import { shallow } from 'enzyme';

import LoadedCharacterReferenceTables from './index';

describe('Loaded Character Reference Card', () => {
  let wrapper;

  const selectCurrentView = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <LoadedCharacterReferenceTables
        name="Mr Test"
        gunCombatActions={4}
        handCombatActions={4}
        knockoutValue={10}
        sal={10}
        helmet={null}
        vest={null}
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
