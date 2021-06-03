import { firearms } from '../index';

// mptodo
// { name: firearm.name,
//     qty: firearm.qty,
//     mag: firearm.mag,
//     modNotes: firearm.modNotes }

export const hydrateFirearmByName = (name) => ({
  name,
  list: firearms[name].list,
  mag: firearms[name].mag,
});

// export const hydrateFirearm
