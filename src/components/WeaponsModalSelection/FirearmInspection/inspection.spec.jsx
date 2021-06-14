import React from 'react';
import { shallow } from 'enzyme';

import FirearmInspection from './index';

import { firearms } from '../../../data/firearms';

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

  // mptodo
  // it('should not render view grenade button if weapon does not have an attached grenade launcher', () => {
  //   const wrapper = createWrapper('M1911A1');

  //   expect(wrapper.find('button[children="View Grenade Data"]').exists()).toBe(false);
  // });

  // mptodo
  // it('should be possible to view attached grenade launcher button', () => {
  //   const wrapper = createWrapper('M16', 'M203');
  //   wrapper.find('button[children="View Grenade Data"]').simulate('click');

  //   expect(setFirearmToInspect).toHaveBeenCalledWith('M230');
  // });

  // it('should be possible to switch view back to rifle', () => {
  //   const wrapper = createWrapper('M16', 'M203');
  //   wrapper.find('button[children="View Rifle Data"]').simulate('click');

  //   expect(setFirearmToInspect).toHaveBeenCalledWith('M16');
  // });

  it('should not render notes for shotguns', () => {
    const wrapper = createWrapper('Remington M870');

    expect(wrapper.find('FirearmNotes').exists()).toBe(false);
  });
});
