// mptodo store stuff in store with the below shape
const prepareFirearm = (firearm) => {
  const payload = {
    name: firearm.name,
    qty: firearm.qty,
    mag: firearm.mag,
  };

  if (firearm.modNotes) {
    payload.modNotes = firearm.modNotes;
  }

  if (firearm.attachedOptic) {
    payload.attachedOptic = firearm.attachedOptic;
  }

  if (firearm.launcher) {
    payload.launcher = firearm.launcher;
  }

  return payload;
};

const prepareGrenade = (grenade) => ({
  name: grenade.name,
  qty: grenade.qty,
});

const prepareLauncher = (launcher) => ({
  name: launcher.name,
  qty: launcher.qty,
  mag: launcher.mag,
});

export const buildRequestPayload = (currentCharacter) => ({ character_name: currentCharacter.name,
  str: currentCharacter.str,
  int: currentCharacter.int,
  hlt: currentCharacter.hlt,
  wil: currentCharacter.wil,
  agi: currentCharacter.agi,
  gun_level: currentCharacter.gunLevel,
  hand_level: currentCharacter.handLevel,
  uniform: currentCharacter.uniform,
  helmet: currentCharacter.helmet?.name || null,
  vest: currentCharacter.vest?.name || null,
  equipment: currentCharacter.equipment,
  firearms: currentCharacter.firearms.map((firearm) => prepareFirearm(firearm)),
  grenades: currentCharacter.grenades.map((grenade) => prepareGrenade(grenade)),
  launchers: currentCharacter.launchers.map((launcher) => prepareLauncher(launcher)),
  notes: {} });

export const parseDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${day}/${month}/${year}`;
};
