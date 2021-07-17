import { blacklistedPatterns } from './data';

export const correctFloatingPoint = (number) => Math.round(number * 1000) / 1000;

const checkNoBlacklistedPatterns = (password) => {
  let result = true;

  const list = [...blacklistedPatterns];

  for (let i = 0; i < list.length; i += 1) {
    if (password.includes(list[i])) {
      result = false;
      break;
    }
  }

  return result;
};

export const checkPasswordHasNoBadPatterns = (password) => {
  if (!checkNoBlacklistedPatterns(password.toLowerCase())) {
    return false;
  }

  const map = {};

  for (let i = 0; i < password.length; i += 1) {
    const char = password[i];
    if (map[char]) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }
  if (Object.keys(map).length < 5) {
    return false;
  }

  return true;
};
