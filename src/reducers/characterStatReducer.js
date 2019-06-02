const defaultStats = {
  str: 10,
  int: 10,
  wil: 10,
  hlt: 10,
  agi: 10,
  gunLevel: 0,
  handLevel: 0,
};

const characterStats = (obj = defaultStats, action) => {
  if (action.type === 'UPDATE_ATTRIBUTES') {
    return action.payload;
  }
  return obj;
};

export default characterStats;
