import React from 'react';
import { shallow } from 'enzyme';

import Launchers from './component';

describe('Modify Firearm With Grenade Launcher', () => {
  let wrapper;

  const firearm = 'M16';
  const ableToAttach = ['M203'];
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

  it('should to attach underslung launcher', () => {
    wrapper.find('button[children="Update Launcher"]').simulate('click');

    wrapper.find('button[children="M203"]').simulate('click');

    const expectedActionPayload = { firearmToUpdate: 'M16', launcher: 'M203' };

    expect(updateUnderslungLauncher).toHaveBeenCalledWith(expectedActionPayload);
  });
});
