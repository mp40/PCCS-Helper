import React from 'react';
import { shallow, mount } from 'enzyme';

import Launchers from './component';

// firearm, ableToAttach, attachedLauncher, updateUnderslungLauncher, removeUnderslungLauncher

describe('Modify Firearm With Grenade Launcher', () => {
  let wrapper;

  const firearm = 'M16';
  const ableToAttach = [];
  const attachedLauncher = undefined;
  const updateUnderslungLauncher = jest.fn();
  const removeUnderslungLauncher = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Launchers
        firearm={firearm}
        ableToAttach={ableToAttach}
        attachedLauncher={attachedLauncher}
        updateUnderslungLauncher={updateUnderslungLauncher}
        removeUnderslungLauncher={removeUnderslungLauncher}
      />,
    );
  });

  it('should not render remove launcher button if no launcher attached', () => {
    expect(wrapper.find('button[children="Remove Launcher"]').exists()).toBe(false);
  });
});
