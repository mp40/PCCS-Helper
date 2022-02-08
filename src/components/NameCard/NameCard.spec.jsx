import { mountAppWithStore } from '../../helpers/testHelpers';

describe('NameCard intergration test', () => {
  window.history.pushState({}, '', '/edit');
  const wrapper = mountAppWithStore();

  afterAll(() => {
    window.history.pushState({}, '', '/');
  });

  it('should be possible to update name', () => {
    wrapper.find('NameCard').find('button').simulate('click');

    wrapper.find('input').simulate('change', { target: { value: 'Biggles' } });

    wrapper.find('button[children="Submit"]').simulate('click');

    expect(wrapper.text()).toContain('Biggles');
  });
});
