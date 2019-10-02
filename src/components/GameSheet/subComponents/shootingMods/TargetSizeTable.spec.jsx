import React from 'react';
import { shallow } from 'enzyme';

import TargetSizeTable from './TargetSizeTable';

describe('situation and stance table', () => {
  const wrapper = shallow(<TargetSizeTable />);
  it('should render the target size description', () => {
    expect(wrapper.childAt(2).text()).toContain('Look Over/Around');
    expect(wrapper.childAt(4).text()).toContain('Standing Exposed');
    expect(wrapper.childAt(7).text()).toContain('Running');
  });
  it('should render the mod value', () => {
    expect(wrapper.childAt(2).text()).toContain('-4-3-3');
    expect(wrapper.childAt(4).text()).toContain('7141');
    expect(wrapper.childAt(7).text()).toContain('8141');
  });
});
