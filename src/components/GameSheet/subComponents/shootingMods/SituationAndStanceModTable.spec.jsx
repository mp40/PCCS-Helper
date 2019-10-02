import React from 'react';
import { shallow } from 'enzyme';

import SituationAndStanceModTable from './SituationAndStanceModTable';

describe('situation and stance table', () => {
  const wrapper = shallow(<SituationAndStanceModTable />);
  it('should render the situation/stance', () => {
    expect(wrapper.childAt(1).text()).toContain('Standing & Braced');
    expect(wrapper.childAt(5).text()).toContain('Prone & Braced');
    expect(wrapper.childAt(9).text()).toContain('Folding Stock Not Used');
  });
  it('should render the mod value', () => {
    expect(wrapper.childAt(1).text()).toContain('4');
    expect(wrapper.childAt(5).text()).toContain('7');
    expect(wrapper.childAt(9).text()).toContain('-4');
  });
});
