import React from 'react';
import { shallow } from 'enzyme';

import ActionsCard from './component';

describe('rendering combat actions', () => {
  const combatStats = {
    baseSpeed: 2,
    maxSpeed: 4,
    damageBonus: 1.5,
    gunCombatActions: 6,
    handCombatActions: 4,
  };

  const wrapper = shallow(<ActionsCard combatStats={combatStats} />);

  it('should render combat actions table', () => {
    expect(wrapper.find('Connect(ActionsTable)').exists()).toBe(true);
  });

  it('should render movement data and damage bonus', () => {
    expect(wrapper.find('.movement').text()).toContain('BS 2');
    expect(wrapper.find('.movement').text()).toContain('MS 4');
    expect(wrapper.find('.movement').text()).toContain('DB 1.5');
  });
});
