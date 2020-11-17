import React from 'react';
import { shallow } from 'enzyme';

import { testM1911A1, testRemington, testM203 } from '../../../helpers/testHelpers';

import FirearmInspection from './index';

describe('inspecting weapon stats', () => {
  const statBoxClassName = 'mptodo get rid of this';
  const setFirearmToInspect = jest.fn();

  const createWrapper = (firearmToInspect) => shallow(
    <FirearmInspection
      statBoxClassName={statBoxClassName}
      setFirearmToInspect={setFirearmToInspect}
      firearmToInspect={firearmToInspect}
    />,
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should to be possible to close stats', () => {
    const wrapper = createWrapper(testM1911A1());
    wrapper.find('.close').simulate('click');

    expect(setFirearmToInspect).toHaveBeenCalledWith(null);
  });

  it('should not render view grenade button if weapon does not have an attached grenade launcher', () => {
    const wrapper = createWrapper(testM1911A1());

    expect(wrapper.find('button[children="View Grenade Data"]').exists()).toBe(false);
  });

  it('should be possible to view attached grenade launcher button', () => {
    const wrapper = createWrapper(testM203());
    wrapper.find('button[children="View Grenade Data"]').simulate('click');

    expect(setFirearmToInspect).toHaveBeenCalledWith(testM203().launcher);
  });

  it('should be possible to switch view back to rifle', () => {
    const wrapper = createWrapper(testM203().launcher);
    wrapper.find('button[children="View Rifle Data"]').simulate('click');

    expect(setFirearmToInspect).toHaveBeenCalledWith(testM203());
  });

  it('should not render notes for shotguns', () => {
    const wrapper = createWrapper(testRemington());

    expect(wrapper.find('FirearmNotes').exists()).toBe(false);
  });
});
