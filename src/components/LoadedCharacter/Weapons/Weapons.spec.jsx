import React from 'react';
import { shallow } from 'enzyme';

import LoadedCharacterWeapons from './index';

const mockRifle = {
  name: 'Big Gun',
  mag: [{ type: 'Mag', cap: 30, qty: 4 }, { type: 'Drm', cap: 50, qty: 1 }],
};

const mockPistol = {
  name: 'Small Gun',
  mag: [{ type: 'Mag', cap: 7, qty: 0 }],
};

const mockShotgun = {
  name: 'Shotty',
  mag: [{ type: 'Rnd', cap: 5, qty: 5 }],
};

const mockSingleShotGun = {
  name: 'Flintlock',
  mag: [{ type: 'Rnd', cap: 1, qty: 1 }],
};

const mockRifleWithUnderslung = {
  name: 'Rifle with Grenade Launcher',
  mag: [
    { type: 'Mag', weight: 1, cap: 30, qty: 0 },
    { type: 'Rnd', class: 'HEAT', weight: 0.51, cap: 1, qty: 1 },
    { type: 'Rnd', class: 'HE', weight: 0.51, cap: 1, qty: 4 },
  ],
};

const mockGrenade = { name: 'The Holy Hand Grenade Of Antioch', qty: 1 };

describe('Loaded Character Reference Card', () => {
  let wrapper;
  const setFirearm = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <LoadedCharacterWeapons
        firearms={[mockRifle, mockPistol, mockShotgun, mockSingleShotGun, mockRifleWithUnderslung]}
        grenades={[mockGrenade]}
        setFirearm={setFirearm}
      />,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render characters firearms', () => {
    expect(wrapper.text()).toContain(mockRifle.name);
    expect(wrapper.text()).toContain(mockPistol.name);
    expect(wrapper.text()).toContain(mockShotgun.name);
  });

  it('should render quantity of firearm spare mags', () => {
    expect(wrapper.find('button').at(0).text()).toContain(
      `${mockRifle.mag[0].cap} round ${mockRifle.mag[0].type} x ${mockRifle.mag[0].qty}`,
    );

    expect(wrapper.find('button').at(0).text()).toContain(
      `${mockRifle.mag[1].cap} round ${mockRifle.mag[1].type} x ${mockRifle.mag[1].qty}`,
    );
  });

  it('should not render zero quantity mags', () => {
    expect(wrapper.find('button').at(1).text()).not.toContain(
      `${mockPistol.mag[0].cap} round ${mockPistol.mag[0].type} x ${mockPistol.mag[0].qty}`,
    );
  });

  it('should render msg if no spare ammo for firearm', () => {
    expect(wrapper.find('button').at(1).text()).toContain('no spare ammo');
  });

  it('should render appropriate msg for single rounds', () => {
    expect(wrapper.find('button').at(2).text()).toContain('5 x Single Rounds');
    expect(wrapper.find('button').at(3).text()).not.toContain('1 x Single Rounds');
    expect(wrapper.find('button').at(3).text()).toContain('1 x Single Round');
  });

  it('should render appropriate msg for attached launcher grenade rounds', () => {
    expect(wrapper.find('button').at(4).text()).toContain('1 x HEAT Round');
    expect(wrapper.find('button').at(4).text()).not.toContain('1 x HEAT Rounds');
    expect(wrapper.find('button').at(4).text()).toContain('4 x HE Rounds');
  });

  it('should render characters grenades', () => {
    expect(wrapper.text()).toContain('The Holy Hand Grenade Of Antioch');
  });

  it('should set firearm to use when firearm button clicked', () => {
    wrapper.find('.firearm').at(0).simulate('click');

    expect(setFirearm).toHaveBeenCalledWith(mockRifle);
  });
});
