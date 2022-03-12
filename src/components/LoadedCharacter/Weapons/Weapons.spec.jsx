import React from 'react';
import { shallow } from 'enzyme';

import LoadedCharacterWeapons from './index';

const mockRifle = {
  name: 'Big Gun',
  mag: [{ type: 'Mag', cap: 30, qty: 4 }, { type: 'Drm', cap: 50, qty: 1 }],
};

describe('Loaded Character Reference Card', () => {
  const setWeapon = jest.fn();

  it('should add firearms to firearms list', () => {
    const rifle = { ...mockRifle };
    const wrapper = shallow(
      <LoadedCharacterWeapons
        firearms={[rifle]}
        grenades={[]}
        launchers={[]}
        setWeapon={setWeapon}
      />,
    );

    const characterLaunchersProps = wrapper.find('CharacterFirearms').props();

    expect(characterLaunchersProps.firearms.length).toBe(1);
    expect(characterLaunchersProps.firearms[0]).toEqual(mockRifle);
  });

  it('should add underslung launchers to launchers list', () => {
    const m203 = {
      attached: 'M203',
      mag: [{ qty: 1 }, { qty: 2 }],
    };

    const rifle = { ...mockRifle };
    rifle.launcher = m203;
    const wrapper = shallow(
      <LoadedCharacterWeapons
        firearms={[rifle]}
        grenades={[]}
        launchers={[]}
        setWeapon={setWeapon}
      />,
    );

    const characterLaunchersProps = wrapper.find('CharacterLaunchers').props();

    expect(characterLaunchersProps.launchers.length).toBe(1);
    expect(characterLaunchersProps.launchers[0].name).toBe('M203');
  });
});
