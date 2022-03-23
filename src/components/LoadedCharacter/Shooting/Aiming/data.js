export const getMaxAims = (list, aims) => {
  if (list === 'grenades') {
    return 8;
  }

  return aims[aims.length - 1];
};
