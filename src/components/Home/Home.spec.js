import { mountAppWithStore } from '../../helpers/testHelpers';

describe('Home Page', () => {
  it('should render the correct page when Create Charcter is clicked', () => {
    const wrapper = mountAppWithStore();
    wrapper.find('#activateCreateChar').simulate('click');
  });
});
