import React from 'react';
import { shallow } from 'enzyme';

import LoadedCharacter from './component';

const m1911 = {
  name: 'M1911A1',
  list: 'pistols',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
};

describe('Loaded Character', () => {
  let wrapper;
  const firearms = [{ ...m1911 }];

  beforeEach(() => {
    wrapper = shallow(<LoadedCharacter
      name="Chuck Norris"
      gunLevel={10}
      handLevel={0}
      gunCombatActions={16}
      handCombatActions={16}
      knockoutValue={99}
      helmet={undefined}
      vest={undefined}
      firearms={firearms}
      grenades={[]}
      launchers={[]}
      melee={[]}
    />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without firearm selected for shooting', () => {
    expect(wrapper.find('LoadedCharacterShooting').exists()).toBe(false);
  });

  it('should render firearm shooting card when firearm selected', () => {
    wrapper.find('LoadedCharacterWeapons').invoke('setWeapon')(m1911);

    expect(wrapper.find('LoadedCharacterShooting').exists()).toBe(true);
  });
});
