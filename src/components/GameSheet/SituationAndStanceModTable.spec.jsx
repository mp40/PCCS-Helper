import React from 'react';
import { shallow } from 'enzyme';

import SituationAndStanceModTable from './SituationAndStanceModTable';

describe('situation and stance table', () => {
  const wrapper = shallow(<SituationAndStanceModTable />);
  it('should render the situation/stance', () => {
    expect(wrapper.childAt(1).text()).toContain('Standing');
    expect(wrapper.childAt(6).text()).toContain('Prone & Braced');
    expect(wrapper.childAt(10).text()).toContain('Folding Stock Not Used');
  });
  it('should render the mod value', () => {
    expect(wrapper.childAt(1).text()).toContain('0');
    expect(wrapper.childAt(6).text()).toContain('7');
    expect(wrapper.childAt(10).text()).toContain('-4');
  });
});
