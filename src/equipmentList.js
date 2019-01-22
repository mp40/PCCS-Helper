// const equipment = {
//     basicPouch:{
//         name: "Basic Pouch",
//         weight: 0.4,
//         type: ['Load Bearing', 'ALICE']
//     },
//     belt:{
//         name: "Belt",
//         weight: 0.7,
//         type: ['Load Bearing', 'ALICE']
//     },
//     beltPistolM1923:{
//         name: "Belt, pistol M1923",
//         weight: 0.56,
//         type: ['Load Bearing', 'WW2']
//     },
//     bumPack:{
//         name: "Bum Pack",
//         weight: 0.7,
//         type: ['Load Bearing', 'ALICE']
//     },
//     canteen:{
//         name: "Canteen",
//         weight: 2.5,
//         type: ['Load Bearing', 'ALICE']
//     },
//     hHarness:{
//         name: "H Harness",
//         weight: 0.7,
//         type: ['Load Bearing', 'ALICE']
//     },
//     type56Rig:{
//         name: "Type 56 AK Chest Rig",
//         weight: 0.89,
//         type: ['Load Bearing', 'Chest Rig']
//     },
//     type56Rig:{
//         name: "Type 56 SKS Chest Rig",
//         weight: 0.88,
//         type: ['Load Bearing', 'Chest Rig']
//     },
//     sobrVest:{
//         name: 'SOBR Assault Vest',
//         weight: 2.86,
//         type: ["Load Bearing", 'Modern Russian LBE']
//     },
//     sniperHarness:{
//         name: "SNIPERS Harness",
//         weight: 1.76,
//         type: ["Load Bearing", 'Modern Russian LBE']
//     },
// }
const equipment = {
        "Basic Pouch": {
            weight: 0.4,
            tags:[]
        },
        "Bayonet": {
            weight: 1,
            tags:[]
        },
        "Bayonet, M1 w/M7 scabard": {
            weight: 1.56,
            tags:[]
        },
        "Belt": {
            weight: 0.7,
            tags:[]
        },
        "Belt, pistol M1923": {
            weight: 0.56,
            tags: []
        },
        "Bergen": {
            weight: 3,
            tags: []
        },
        "Billy Club":{
            weight:0.5,
            tags:[]
        },
        "Binoculars w/case": {
            weight: 3.5,
            tags:[]
        },
        "Boil In The Bag": {
            weight: 0.8,
            tags: []
        },
        "Bum Pack": {
            weight: 0.7,
            tags: []
        },
        "Canteen":{
            weight: 2.5,
            tags:[]
        },
        "Canteen, M1910 ":{
            weight:3.69,
            tags:[]
        },
        "Cartridge Belt, M1923":{
            weight:1.44,
            tags:[]
        },
        "Cartridge Belt, M1937":{
            weight:1.88,
            tags:[]
        },
        "D-Ration (1 day)":{
            weight:0.25,
            tags:[]
        },
        "Entrenching Tool":{
            weight: 1.5,
            tags:[]
        },
        "Entrenching tool, M1943 w/carrier":{
            weight:2.94,
            tags:[]
        },
        "Field Dressing":{
            weight: 0.1,
            tags:[]
        },
        "Field Radio": {
            weight: 12,
            tags:[]
        },
        "Flash Bang": {
            weight: 0.6,
            tags:[]
        },
        "H Harness": {
            weight:0.7,
            tags:[]
        },
        "Harness, M1936": {
            weight:0.95,
            tags:[],
        },
        "Hatchet": {            
            weight: 2.5,
            tags:[],
        },   
        "Headset Coms": {          
            weight:1,
            tags:[],
        },
        "Holster": {            
            weight: 0.4,
            tags:[],
        },   
        "Holster, M1916": {
            weight:0.59,
            tags:[],
        },
        "Katana ": {
            weight:3,
            tags:[],
        },
        "Knife, Bowie": {
            weight:1.1,
            tags:[],
        },
        "Knife, Combat": {
            weight:0.6,
            tags:[],
        },
        "Knife, Switch Blade": {
            weight:0.3,
            tags:[],
        },
        "K-Ration (1 day)": {
            weight: 2.31,
            tags:[],
        },
        "M14 Toe Popper": {
            weight:0.22,
            tags:[],
        },
        "M15 WP Grenade": {
            weight:1.9,
            tags:[],
        },
        "M18A1 Claymore": {
            weight:3.5,
            tags:[],
        },
        "Machete": {
            weight:2.4,
            tags:[],
        },
        "Magazine Pouch, M1 carbine": {
            weight: 0.16,
            tags:[],
        },
        "Magazine pouch, M1923 (.45)": {
            weight: 0.13,
            tags:[],
        },
        "Magazine Pouch, SMG (US WW2)": {
            weight: 0.53,
            tags:[],
        },
        "Misc 1.0lbs": {
            weight: 1,
            tags:[],
        },
        "Misc 0.1lbs": {
            weight: 0.1,
            tags:[],
        },
        "Misc 0.25lbs": {
            weight: 0.25,
            tags:[],
        },
        "MRE": {
            weight: 1.5,
            tags:[],
        },
        "Pack, M1936": {
            weight:1.81,
            tags:[],
        },
        "Pipe, 24": {
            weight: 2.2,
            tags:[],
        },
        "Rat Pack (1 day)": {
            weight: 3.5,
            tags:[]
        },
        "Rock": {
            weight: 1.5,
            tags:[]
        },
        "Saber": {
            weight: 2.6,
            tags:[]
        },
        "Scimitar ": {
            weight: 3.7,
            tags:[]
        },
        "Smoke Grenade": {
            weight: 1.5,
            tags:[]
        },
        "SNIPERS Harness": {
            weight:1.76,
            tags:[]
        },
        "SOBR Assault Vest": {
            weight:2.86,
            tags:[]
        },
        "Stick": {
            weight: 2,
            tags:[]
        },
        "Tarzan M21 Assault Vest": {
            weight:2.2,
            tags:[]
        },
        "Tarzan M22 Assault Vest": {
            weight:1.5,
            tags:[]
        },
        "Tarzan M24 Assault Vest": {
            weight:1.5,
            tags:[]
        },
        "Tarzan M32 Assault Vest": {
            weight:1.5,
            tags:[]
        },
        "Tripod, M1919A4": {            
            weight: 14,
            tags:[]
        },
        "Two by Four": {
            weight:3,
            tags:[]
        },
        "Type 56 AK Chest Rig": {
            weight:0.89,
            tags:[]
        },
        "Type 56 SKS Chest Rig": {
            weight:0.88,
            tags:[]
        },
        "Type 65 Canteen": {           
            weight:2.6,
            tags:[]
        },
        "Webbing, ALICE": {            
            weight: 6.5,
            tags:[]
        },
        "Webbing, M1956": {
            weight: 7.4,
            tags:[]
        },
        "Webbing, M1967": {
            weight:7.2,
            tags:[]
        },
        "MCI Ration": {
            weight:2.6,
            tags:[]
        },
        "MCI Ration (reduced packaging ect)": {
            weight: 2,
             tags:[]
        },
        "LRP Ration": {
            weight: 0.69,
            tags:[]
        },
        "PRC-25 Radio": {
            weight:23.5,
            tags:[]
        },
        "PRC-25 Battery": {
            weight: 2.86,
            tags:[]
        },
        "Water, 1 quart": {
            weight:2,
            tags:[]
        },
        "Bladder (Mil-Spec), 5 quart with cover": {
            weight:1.5,
            tags:[]
        },
        "Jerry Can, Plastic (20L)": {           
            weight: 5,
            tags:[]
        },
        "Jerry Can, Plastic (10L)": {
            weight:3.4,
            tags:[]
        },
        "Bandolier, 7 pocket": {
            weight:0.18,
            tags:[]
        },
        "Canteen, 2 quart colapsable": {
            weight:0.35,
            tags:[]
        },
        "Canteen, 2 quart with cover and sling": {
            weight:1.05,
            tags:[]
        },
        "Webbing, WWII": {
            weight:7.8,
            tags:[]
            },
        "Wood Axe": {
            weight:3.5,
            tags:[]
        },
        "Survival Kit": {
            weight:0.88,
            tags:[]
        },
        "IFAK": {
            weight: 2.4,
            tags:[]
        },
        "M3 Medic Bag":{ 
            weight: 3.9,
            tags:[]
        },
        "M17 Medic Bag": {
            weight:12.25,
            tags:[]
        },
        "Tactical Trauma Kit": {
            weight:1.15,
            tags:[]
        },
        "Rapid Response Bag": {
            weight:2.5,
            tags:[]
        },
        "M39 Medic Bag": {
            weight:10,
            tags:[]
        },
        "Surgical Set": {
            weight:0.7,
            tags:[]
        },
        "Combat Stretcher, Folding": {
            weight: 15,
            tags: []
        }
  }
  
  

module.exports = equipment