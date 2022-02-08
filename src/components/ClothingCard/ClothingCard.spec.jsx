import { mountAppWithStore } from '../../helpers/testHelpers';

describe('Clothing Card intergration test', () => {
  window.history.pushState({}, '', '/edit');
  const wrapper = mountAppWithStore();

  afterAll(() => {
    window.history.pushState({}, '', '/');
  });

  it('should be possible to change uniform types', () => {
    wrapper.find('ClothingCard').find('tbody').find('tr').simulate('click');

    wrapper.find('.uniforms').find('button').at(1).simulate('click');

    expect(wrapper.find('ClothingCard').find('tbody').find('tr').text()).toBe('Tropical4.5');
  });
});
