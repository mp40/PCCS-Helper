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
        "Two by Four": 3,
            weight:
            tags:[]
            },
        "Type 56 AK Chest Rig": 0.89,
            weight:
            tags:[]
            },
        "Type 56 SKS Chest Rig": 0.88,
            weight:
            tags:[]
            },
        "Type 65 Canteen": 2.6,
            weight:
            tags:[]
            },
        "Webbing, ALICE": 6.5,
            weight:
            tags:[]
            },
        "Webbing, M1956": 7.4,
            weight:
            tags:[]
            },
        "Webbing, M1967": 7.2,
            weight:
            tags:[]
            },
        "MCI Ration": 2.6,
            weight:
            tags:[]
            },
        "MCI Ration (reduced packaging ect)": 2,
            weight:
            tags:[]
            },
        "LRP Ration": 0.69,
            weight:
            tags:[]
            },
        "PRC-25 Radio": 23.5,
            weight:
            tags:[]
            },
        "PRC-25 Battery": 2.86,
            weight:
            tags:[]
            },
        "Water, 1 quart": 2,
            weight:
            tags:[]
            },
        "Bladder (Mil-Spec), 5 quart with cover": 1.5,
            weight:
            tags:[]
            },
        "Jerry Can, Plastic (20L)": 5,
            weight:
            tags:[]
            },
        "Jerry Can, Plastic (10L)": 3.4,
            weight:
            tags:[]
            },
        "Bandolier, 7 pocket": 0.18,
            weight:
            tags:[]
            },
        "Canteen, 2 quart colapsable": 0.35,
            weight:
            tags:[]
            },
        "Canteen, 2 quart with cover and sling": 1.05,
            weight:
            tags:[]
            },
        "Webbing, WWII": 7.8,
            weight:
            tags:[]
            },
        "Wood Axe": 3.5,
            weight:
            tags:
        "Survival Kit": 0.88,
            weight:
            tags:
        "IFAK": 2.4,
            weight:
            tags:
        "M3 Medic Bag": 3.9,
            weight:
            tags:
        "M17 Medic Bag": 12.25,
            weight:
            tags:
        "Tactical Trauma Kit": 1.15,
            weight:
            tags:
        "Rapid Response Bag": 2.5,
            weight:
            tags:
        "M39 Medic Bag": 10,
            weight:
            tags:
        "Surgical Set": 0.7,
            weight:
            tags:
        "Combat Stretcher, Folding": 15
            weight:
            tags:
      
            weight:
            tags:
      
            weight:
            tags:
      
  }
  
  

module.exports = equipment