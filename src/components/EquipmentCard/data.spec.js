import { toggleTagsInList } from './data';

describe('handling tags for filter list', () => {
  it('should add tag to filter list if not present', () => {
    let list = [];
    list = toggleTagsInList(list, 'test');
    expect(list).toStrictEqual(['test']);
    list = toggleTagsInList(list, 'next');
    expect(list).toStrictEqual(['test', 'next']);
  });
  it('should remove tag from list if already present', () => {
    let list = ['test', 'last'];
    list = toggleTagsInList(list, 'test');
    expect(list).toStrictEqual(['last']);
    list = toggleTagsInList(list, 'last');
    expect(list.length).toBe(0);
  });
});
