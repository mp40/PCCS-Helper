// mptodo
// import { riflesList, pistolsList, smgsList, mgsList, shotgunsList, sniperRiflesList } from '../../data/firearms';
// import { launchers } from '../../data/launchers';
// import { grenadeData, specialGrenades } from '../../data/grenades';

// import { findObjectByNameInArray } from '../../utils';

// const createFirearmsList = () => [...riflesList(), ...pistolsList(), ...smgsList(), ...mgsList(), ...shotgunsList(), ...sniperRiflesList()];

// export const hydrateFirearm = (dyhydratedFirearm) => {
//   const firearm = findObjectByNameInArray(createFirearmsList(), dyhydratedFirearm.name);

//   firearm.qty = dyhydratedFirearm.qty;

//   firearm.weight -= firearm.mag[0].weight;
//   firearm.weight += dyhydratedFirearm.mag[0].weight;

//   firearm.mag = dyhydratedFirearm.mag;

//   if (dyhydratedFirearm.modNotes) {
//     firearm.modNotes = dyhydratedFirearm.modNotes;

//     const weightAdjustment = dyhydratedFirearm.modNotes.reduce((acc, obj) => acc + obj.weightMod, 0);

//     firearm.weight += weightAdjustment;
//   }

//   return firearm;
// };

// export const hydrateFirearmList = (dyhydratedFirearms) => dyhydratedFirearms.map((firearm) => hydrateFirearm(firearm));

// export const hydrateLauncher = (dehydratedLauncher) => {
//   const launcher = findObjectByNameInArray(launchers(), dehydratedLauncher.name);

//   launcher.mag = dehydratedLauncher.mag;
//   launcher.qty = dehydratedLauncher.qty;

//   return launcher;
// };

// export const hydrateLauncherList = (
//   dehydratedLaunchers,
// ) => dehydratedLaunchers.map((launcher) => hydrateLauncher(launcher));

// export const hydrateGrenade = (dehydratedGrenade) => {
//   const grenade = findObjectByNameInArray([...grenadeData(), ...specialGrenades()], dehydratedGrenade.name);

//   grenade.qty = dehydratedGrenade.qty;

//   return grenade;
// };

// export const hydrateGrenadeList = (
//   dehydratedGrenades,
// ) => dehydratedGrenades.map((grenade) => hydrateGrenade(grenade));
