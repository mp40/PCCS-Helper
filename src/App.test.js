import { mountAppWithStore } from './helpers/testHelpers';

it('renders without crashing', () => {
  const wrapper = mountAppWithStore();
  expect(wrapper.exists()).toBe(true);
});
