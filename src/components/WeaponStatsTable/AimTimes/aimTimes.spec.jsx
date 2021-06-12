import React from 'react';
import { shallow } from 'enzyme';

import AimTimes from './index';

// const AimTimes = ({ aim, index, sal, optic })

const waitOneTick = (simulate) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(simulate);
  }, 0);
});

describe('Aim Times', () => {
  let wrapper;

  const aim = {
    ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
    mod: [-24, -14, -10, -8, -6, -5, -4, -3, -2, -1, 0],
  };

  beforeEach(() => {
    wrapper = shallow(<AimTimes
      aim={aim}
      index={0}
      sal={0}
      optic={undefined}
      launcher={false}
    />);
  });

  it('should calculate aim time plus sal 10 for aim time 1', () => {
    const index = 0;
    const sal = 10;

    wrapper.setProps({ index, sal });

    expect(wrapper.text()).toBe('1-14');
  });

  it('should calculate aim time plus sal 10 for max aim time', () => {
    const index = 10;
    const sal = 10;

    wrapper.setProps({ index, sal });

    expect(wrapper.text()).toBe('1210');
  });

  it('should calculate aim time plus low power optic for 1 aim time', () => {
    const index = 0;
    const optic = 'Low Power Scope';

    wrapper.setProps({ index, optic });

    expect(wrapper.text()).toBe('1-23');
  });

  it('should calculate aim time plus advanced aiming system for max aim time', () => {
    const index = 10;
    const optic = 'AAS';

    wrapper.setProps({ index, optic });

    expect(wrapper.text()).toBe('127');
  });

  it('should add penalty of 3 if launcher attached for 1 aim time', () => {
    const index = 0;

    wrapper.setProps({ index, launcher: true });

    expect(wrapper.text()).toBe('1-27');
  });

  it('should add penalty of 3 if launcher attached for 2 aim time', () => {
    const index = 1;

    wrapper.setProps({ index, launcher: true });

    expect(wrapper.text()).toBe('2-17');
  });

  it('should not add penalty if launcher attached for 3 aim time', () => {
    const index = 2;

    wrapper.setProps({ index, launcher: true });

    expect(wrapper.text()).toBe('3-10');
  });
});
