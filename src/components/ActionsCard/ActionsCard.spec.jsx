import React from 'react';
import { shallow } from 'enzyme';

import CombatCard from './component';

describe('rendering combat actions', () => {
  const combatStats = {
    baseSpeed: 2,
    maxSpeed: 4,
    damageBonus: 1.5,
    gunCombatActions: 6,
    handCombatActions: 4,
  };

  const wrapper = shallow(<CombatCard combatStats={combatStats} />);

  it('should render combat actions', () => {
    const actionTable = wrapper.find('ActionTable').dive();

    expect(actionTable.text()).toContain('Gun2121');
    expect(actionTable.text()).toContain('Hand1111');
  });

  it('should render movement data and damage bonus', () => {
    expect(wrapper.find('.additionalCombatData').text()).toContain('BS 2');
    expect(wrapper.find('.additionalCombatData').text()).toContain('MS 4');
    expect(wrapper.find('.additionalCombatData').text()).toContain('DB 1.5');
  });
});
