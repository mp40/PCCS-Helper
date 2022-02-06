export const viewCreateCharacter = () => ({
  type: 'CREATE_CHARACTER_VIEWED',
  payload: 'createChar',
});

export const modifyGunCombatLevel = (newGunCombatLevel) => ({
  type: 'GUN_COMBAT_LEVEL_UPDATED',
  payload: newGunCombatLevel,
});

export const modifyMeleeCombatLevel = (newMeleeCombatLevel) => ({
  type: 'MELEE_COMBAT_LEVEL_UPDATED',
  payload: newMeleeCombatLevel,
});

export const modifyStrengthValue = (newStrengthValue) => ({
  type: 'STRENGTH_VALUE_UPDATED',
  payload: newStrengthValue,
});

export const modifyIntelligenceValue = (newIntelligenceValue) => ({
  type: 'INTELLIGENCE_VALUE_UPDATED',
  payload: newIntelligenceValue,
});

export const modifyHealthValue = (newHealthValue) => ({
  type: 'HEALTH_VALUE_UPDATED',
  payload: newHealthValue,
});

export const modifyWillpowerValue = (newWillpowerValue) => ({
  type: 'WILLPOWER_VALUE_UPDATED',
  payload: newWillpowerValue,
});

export const modifyAgilityValue = (newAgilityValue) => ({
  type: 'AGILITY_VALUE_UPDATED',
  payload: newAgilityValue,
});

export const changeUniform = (newUniform) => ({
  type: 'UNIFORM_CHANGED',
  payload: newUniform,
});

export const addEquipment = (equipment) => ({
  type: 'EQUIPMENT_ADDED',
  payload: equipment,
});

export const removeEquipment = (equipment) => ({
  type: 'EQUIPMENT_REMOVED',
  payload: equipment,
});

export const removeAllEquipment = (emptyArray) => ({
  type: 'ALL_EQUIPMENT_REMOVED',
  payload: emptyArray,
});

export const increaseEquipmentQty = (equipment) => ({
  type: 'EQUIPMENT_QTY_INCREASED',
  payload: equipment,
});

export const decreaseEquipmentQty = (equipment) => ({
  type: 'EQUIPMENT_QTY_DECREASED',
  payload: equipment,
});

export const addFirearm = (firearm) => ({
  type: 'FIREARM_ADDED',
  payload: firearm,
});

export const removeFirearm = (firearm) => ({
  type: 'FIREARM_REMOVED',
  payload: firearm,
});

export const removeAllWeapons = (emptyArray) => ({
  type: 'ALL_WEAPONS_REMOVED',
  payload: emptyArray,
});

export const increaseFirearmQty = (firearm) => ({
  type: 'FIREARM_QTY_INCREASED',
  payload: firearm,
});

export const decreaseFirearmQty = (firearm) => ({
  type: 'FIREARM_QTY_DECREASED',
  payload: firearm,
});

export const increaseMagazineQty = (firearmAndMagazine) => ({
  type: 'MAGAZINE_QTY_INCREASED',
  payload: firearmAndMagazine,
});

export const decreaseMagazineQty = (firearmAndMagazine) => ({
  type: 'MAGAZINE_QTY_DECREASED',
  payload: firearmAndMagazine,
});

export const modifyFirearm = (firearmNameAndModification) => ({
  type: 'FIREARM_MODIFIED',
  payload: firearmNameAndModification,
});

export const removeFirearmModification = (firearmNameAndModification) => ({
  type: 'FIREARM_MODIFICATION_REMOVED',
  payload: firearmNameAndModification,
});

export const addCustomMagazine = (customMagazine) => ({
  type: 'CUSTOM_MAGAZINE_ADDED',
  payload: customMagazine,
});

export const removeAllModificationsFromFirearm = (firearm) => ({
  type: 'ALL_FIREARM_MODIFICATIONS_REMOVED',
  payload: firearm,
});

export const setPrimaryMagazine = (firearmAndPrimary) => ({
  type: 'PRIMARY_MAGAZINE_SET',
  payload: firearmAndPrimary,
});

export const removeMagazine = (firearmAndMagazine) => ({
  type: 'MAGAZINE_REMOVED',
  payload: firearmAndMagazine,
});

export const replaceMagazine = (firearmAndMagazine) => ({
  type: 'MAGAZINE_REPLACED',
  payload: firearmAndMagazine,
});

export const changeHelmet = (helmetBodyArmour) => ({
  type: 'HELMET_CHANGED',
  payload: helmetBodyArmour,
});

export const changeVest = (vestBodyArmour) => ({
  type: 'VEST_CHANGED',
  payload: vestBodyArmour,
});

export const addGrenade = (grenade) => ({
  type: 'GRENADE_ADDED',
  payload: grenade,
});

export const removeGrenade = (grenade) => ({
  type: 'GRENADE_REMOVED',
  payload: grenade,
});

export const increaseGrenadeQty = (grenade) => ({
  type: 'GRENADE_QTY_INCREASED',
  payload: grenade,
});

export const decreaseGrenadeQty = (grenade) => ({
  type: 'GRENADE_QTY_DECREASED',
  payload: grenade,
});

export const changeCharacterName = (name) => ({
  type: 'CHARACTER_NAME_CHANGED',
  payload: name,
});

export const addLauncher = (launcher) => ({
  type: 'LAUNCHER_ADDED',
  payload: launcher,
});

export const increaseLauncherQty = (launcher) => ({
  type: 'LAUNCHER_QTY_INCREASED',
  payload: launcher,
});

export const decreaseLauncherQty = (launcher) => ({
  type: 'LAUNCHER_QTY_DECREASED',
  payload: launcher,
});

export const removeLauncher = (launcher) => ({
  type: 'LAUNCHER_REMOVED',
  payload: launcher,
});

export const increaseLauncherAmmo = (launcherAndAmmoType) => ({
  type: 'LAUNCHER_AMMO_QTY_INCREASED',
  payload: launcherAndAmmoType,
});

export const decreaseLauncherAmmo = (launcherAndAmmoType) => ({
  type: 'LAUNCHER_AMMO_QTY_DECREASED',
  payload: launcherAndAmmoType,
});

export const updateOptic = (firearmAndOptic) => ({
  type: 'OPTIC_UPDATED',
  payload: firearmAndOptic,
});

export const removeOptic = (firearm) => ({
  type: 'OPTIC_REMOVED',
  payload: firearm,
});

export const updateUnderslungLauncher = (firearmAndLauncher) => ({
  type: 'UNDERSLUNG_LAUNCHER_UPDATED',
  payload: firearmAndLauncher,
});

export const removeUnderslungLauncher = (firearm) => ({
  type: 'UNDERSLUNG_LAUNCHER_REMOVED',
  payload: firearm,
});

export const increaseUnderslungLauncherAmmo = (launcherAndAmmoIndex) => ({
  type: 'UNDERSLUNG_LAUNCHER_AMMO_QTY_INCREASED',
  payload: launcherAndAmmoIndex,
});

export const decreaseUnderslungLauncherAmmo = (launcherAndAmmoIndex) => ({
  type: 'UNDERSLUNG_LAUNCHER_AMMO_QTY_DECREASED',
  payload: launcherAndAmmoIndex,
});

export const updateSavedCharacters = (characters) => ({
  type: 'CHARACTERS_UPDATED',
  payload: characters,
});

export const addSavedCharacter = (character) => ({
  type: 'CHARACTER_ADDED',
  payload: character,
});

export const updateSavedCharacter = (character) => ({
  type: 'CHARACTER_UPDATED',
  payload: character,
});

export const hydrateCurrentCharacter = (character) => ({
  type: 'CURRENT_CHARACTER_HYDRATED',
  payload: character,
});
