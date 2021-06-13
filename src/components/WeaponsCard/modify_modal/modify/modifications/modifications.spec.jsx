import React from 'react';
import { shallow } from 'enzyme';

import Modifications from './index';

describe('the form', () => {
  const removeFirearmModification = jest.fn();

  const wrapper = shallow(
    <Modifications
      removeFirearmModification={removeFirearmModification}
      firearmName="M16"
      modNotes={[{ note: 'test', weightMod: 2 }]}
    />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be possible to clear modifications', () => {
    wrapper.find('button').simulate('click');

    expect(removeFirearmModification).toHaveBeenCalledWith(
      { firearmToUpdate: 'M16', modIndex: 0 },
    );
  });
});
