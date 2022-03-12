import React from 'react';
import { shallow } from 'enzyme';

import CharacterLaunchers from './index';

const hydratedM79Double = { name: 'm79-double' };

jest.mock('../../../../data/firearms/launchers', () => ({
  __esModule: true,
  launchers: { double: { name: 'underslung-double' } },
}));

jest.mock('../../../../data/launchers', () => ({
  __esModule: true,
  launcherList: { M79: { ...hydratedM79Double } },
}));

const mockM79 = {
  name: 'M79',
  weight: 6.5,
  qty: 1,
  mag: [{ class: 'HEAT', weight: 0.51, qty: 2 }, { class: 'HE', weight: 0.51, qty: 1 }],
};

const mockM72 = {
  name: 'M72',
  weight: 5.2,
  qty: 1,
  mag: [{ weight: '-' }],
};

describe('Loaded Character Reference Card', () => {
  let wrapper;
  const setWeapon = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <CharacterLaunchers
        launchers={[mockM79, mockM72]}
        setWeapon={setWeapon}
      />,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render characters launchers', () => {
    expect(wrapper.text()).toContain('M79');
    expect(wrapper.text()).toContain('M72');
  });

  it('should render launcher spare ammo', () => {
    expect(wrapper.text()).toContain('HEAT x 2');
    expect(wrapper.text()).toContain('HE x 1');
  });

  it('should set hydrated launcher to use when launcher button clicked', () => {
    wrapper.setProps({ launchers: [mockM79] });
    wrapper.find('.weapon').at(0).simulate('click');

    expect(setWeapon).toHaveBeenCalledWith(hydratedM79Double);
  });

  it('should not render Launchers heading if no launchers', () => {
    wrapper.setProps({ launchers: [] });

    expect(wrapper.isEmptyRender()).toBe(true);
  });
});
