import React from 'react';
import { shallow } from 'enzyme';

import FirearmInspection from './index';

describe('inspecting weapon stats', () => {
  const setFirearmToInspect = jest.fn();

  const createWrapper = (firearmToInspect, attachedLauncher = null) => shallow(
    <FirearmInspection
      setFirearmToInspect={setFirearmToInspect}
      firearmToInspect={firearmToInspect}
      attachedLauncher={attachedLauncher}
    />,
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should to be possible to close stats', () => {
    const wrapper = createWrapper('M1911A1');
    wrapper.find('.close').simulate('click');

    expect(setFirearmToInspect).toHaveBeenCalledWith(null);
  });

  it('should not render notes for shotguns', () => {
    const wrapper = createWrapper('Remington M870');

    expect(wrapper.find('FirearmNotes').exists()).toBe(false);
  });
});
