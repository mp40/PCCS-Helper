import React from 'react';
import { shallow } from 'enzyme';

import ActionsTable from './index';

describe('rendering combat actions', () => {
  const wrapper = shallow(<ActionsTable
    gunCombatActions={6}
    handCombatActions={4}
  />);

  it('should render combat actions table', () => {
    expect(wrapper.text()).toContain('Gun2121');
    expect(wrapper.text()).toContain('Hand1111');
  });
});
