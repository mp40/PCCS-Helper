const requiredKeys = [
  'character_id',
  'character_name',
  'user_id',
  'str',
  'int',
  'hlt',
  'wil',
  'agi',
  'gun_level',
  'hand_level',
  'uniform',
  'helmet',
  'vest',
  'equipment',
  'firearms',
  'grenades',
  'launchers',
];

export const validateCharacterFromResponse = (character) => {
  try {
    let hasRequiredKeys = true;

    for (let i = 0; i < requiredKeys.length; i += 1) {
      if (!(requiredKeys[i] in character)) {
        hasRequiredKeys = false;
        break;
      }
    }

    return hasRequiredKeys;
  } catch (err) {
    return false;
  }
};

export const validateCharacterArrayFromResponse = (characters) => {
  if (!Array.isArray(characters)) {
    return false;
  }

  let hasRequiredKeys = true;

  for (let i = 0; i < characters.length; i += 1) {
    if (!validateCharacterFromResponse(characters[i])) {
      hasRequiredKeys = false;
      break;
    }
  }

  return hasRequiredKeys;
};
