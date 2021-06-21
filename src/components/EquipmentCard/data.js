export const toggleTagsInList = ((list, tag) => {
  if (list.includes(tag)) {
    return list.filter((element) => element !== tag);
  }
  return [...list, tag];
});
