import { getMaxAims } from './data';

it('should return 8 for grenades', () => {
  const list = 'grenades';
  const aims = undefined;

  const maxAims = getMaxAims(list, aims);
  expect(maxAims).toBe(8);
});

it('should return value of last element aims array if not grenade', () => {
  const list = 'pistols';
  const aims = [1, 2, 3, 5];

  const maxAims = getMaxAims(list, aims);
  expect(maxAims).toBe(5);
});
