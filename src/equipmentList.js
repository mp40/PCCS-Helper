const equipment = {
        "Baseball Bat": {
            weight: 2.2,
            tags:["Melee"]
        },
        "Basic Pouch": {
            weight: 0.4,
            tags:['Load Bearing', 'ALICE']
        },
        "Bayonet": {
            weight: 1,
            tags:["Melee"]
        },
        "Bayonet, M1 w/M7 scabard": {
            weight: 1.56,
            tags:["Melee", "WW2"]
        },
        "Belt": {
            weight: 0.7,
            tags:['Load Bearing', 'ALICE']
        },
        "Belt, pistol M1923": {
            weight: 0.56,
            tags: ['Load Bearing', 'WW2']
        },
        "Bergen": {
            weight: 3,
            tags: ["Load Bearing", "Pack"]
        },
        "Billy Club":{
            weight:0.5,
            tags:["Melee"]
        },
        "Binoculars w/case": {
            weight: 3.5,
            tags:["Combat","Support","Misc"]
        },
        "Boil In The Bag": {
            weight: 0.8,
            tags: ["Rations"]
        },
        "Bum Pack": {
            weight: 0.7,
            tags: ['Load Bearing', 'ALICE']
        },
        "Canteen":{
            weight: 2.5,
            tags:['Load Bearing', 'ALICE', 'Rations']
        },
        "Canteen, M1910 ":{
            weight:3.69,
            tags:["Load Bearing", 'WW2', "Rations"]
        },
        "Cartridge Belt, M1923":{
            weight:1.44,
            tags:['Load Bearing', 'WW2']
        },
        "Cartridge Belt, M1937":{
            weight:1.88,
            tags:['Load Bearing', 'WW2']
        },
        "D-Ration (1 day)":{
            weight:0.25,
            tags:["Rations", "WW2"]
        },
        "Entrenching Tool":{
            weight: 1.5,
            tags:["Melee","Tools"]
        },
        "Entrenching tool, M1943 w/carrier":{
            weight:2.94,
            tags:["Melee","Tools","WW2"]
        },
        "Field Dressing":{
            weight: 0.1,
            tags:["Combat", "Medical"]
        },
        "Field Radio": {
            weight: 12,
            tags:["Comms"]
        },
        "Flash Bang": {
            weight: 0.6,
            tags:["Combat"]
        },
        "H Harness": {
            weight:0.7,
            tags:['Load Bearing', 'ALICE']
        },
        "Harness, M1936": {
            weight:0.95,
            tags:['Load Bearing', 'WW2'],
        },
        "Hatchet": {            
            weight: 2.5,
            tags:["Melee", "Tools"],
        },   
        "Headset Coms": {          
            weight:1,
            tags:["Comms"],
        },
        "Holster": {            
            weight: 0.4,
            tags:["Load Bearing", "Generic"],
        },   
        "Holster, M1916": {
            weight:0.59,
            tags:['Load Bearing', 'WW2'],
        },
        "Katana ": {
            weight:3,
            tags:["Melee"],
        },
        "Knife, Bowie": {
            weight:1.1,
            tags:["Melee"],
        },
        "Knife, Combat": {
            weight:0.6,
            tags:["Melee"],
        },
        "Knife, Switch Blade": {
            weight:0.3,
            tags:["Melee"],
        },
        "K-Ration (1 day)": {
            weight: 2.31,
            tags:["Rations", 'WW2'],
        },
        "M14 Toe Popper": {
            weight:0.22,
            tags:["Combat"],
        },
        "M15 WP Grenade": {
            weight:1.9,
            tags:["Combat"],
        },
        "M18A1 Claymore": {
            weight:3.5,
            tags:["Comabat"],
        },
        "Machete": {
            weight:2.4,
            tags:["Melee", "Tools"],
        },
        "Magazine Pouch, M1 carbine": {
            weight: 0.16,
            tags:['Load Bearing', 'WW2'],
        },
        "Magazine pouch, M1923 (.45)": {
            weight: 0.13,
            tags:['Load Bearing', 'WW2'],
        },
        "Magazine Pouch, SMG (US WW2)": {
            weight: 0.53,
            tags:['Load Bearing', 'WW2'],
        },
        "Misc 1.0lbs": {
            weight: 1,
            tags:['Misc'],
        },
        "Misc 0.1lbs": {
            weight: 0.1,
            tags:['Misc'],
        },
        "Misc 0.25lbs": {
            weight: 0.25,
            tags:['Misc'],
        },
        "MRE": {
            weight: 1.5,
            tags:["Rations"],
        },
        "Pack, M1936": {
            weight:1.81,
            tags:['Load Bearing', 'WW2', "Pack"],
        },
        "Pipe, 24": {
            weight: 2.2,
            tags:["Melee"],
        },
        "Rat Pack (1 day)": {
            weight: 3.5,
            tags:["Rations"]
        },
        "Rock": {
            weight: 1.5,
            tags:["Melee"]
        },
        "Saber": {
            weight: 2.6,
            tags:["Melee"]
        },
        "Scimitar ": {
            weight: 3.7,
            tags:["Melee"]
        },
        "Smoke Grenade": {
            weight: 1.5,
            tags:["Comabt"]
        },
        "SNIPERS Harness": {
            weight:1.76,
            tags:["Load Bearing", 'Modern Russian LBE']
        },
        "SOBR Assault Vest": {
            weight:2.86,
            tags:["Load Bearing", 'Modern Russian LBE']
        },
        "Stick": {
            weight: 2,
            tags:["Melee"]
        },
        "Tarzan M21 Assault Vest": {
            weight:2.2,
            tags:["Load Bearing", 'Modern Russian LBE']
        },
        "Tarzan M22 Assault Vest": {
            weight:1.5,
            tags:["Load Bearing", 'Modern Russian LBE']
        },
        "Tarzan M24 Assault Vest": {
            weight:1.5,
            tags:["Load Bearing", 'Modern Russian LBE']
        },
        "Tarzan M32 Assault Vest": {
            weight:1.5,
            tags:["Load Bearing", 'Modern Russian LBE']
        },
        "Tripod, M1919A4": {            
            weight: 14,
            tags:["Support"]
        },
        "Two by Four": {
            weight:3,
            tags:["Melee"]
        },
        "Type 56 AK Chest Rig": {
            weight:0.89,
            tags:['Load Bearing', 'Chest Rig', 'Vietnam']
        },
        "Type 56 SKS Chest Rig": {
            weight:0.88,
            tags:['Load Bearing', 'Chest Rig','Vietnam']
        },
        "Type 65 Canteen": {           
            weight:2.6,
            tags:["Load Bearing", "Rations", 'Vietnam']
        },
        "Webbing, ALICE": {            
            weight: 6.5,
            tags:["Load Bearing", "Webbing Set"]
        },
        "Webbing, M1956": {
            weight: 7.4,
            tags:["Load Bearing", "Webbing Set"]
        },
        "Webbing, M1967": {
            weight:7.2,
            tags:["Load Bearing", "Webbing Set"]
        },
        "MCI Ration": {
            weight:2.6,
            tags:["Rations", "Vietnam"]
        },
        "MCI Ration (reduced packaging ect)": {
            weight: 2,
             tags:["Rations","Vietnam"]
        },
        "LRP Ration": {
            weight: 0.69,
            tags:["Rations","Vietnam"]
        },
        "PRC-25 Radio": {
            weight:23.5,
            tags:["Comms", "Vietnam"]
        },
        "PRC-25 Battery": {
            weight: 2.86,
            tags:["Comms", "Vietnam"]
        },
        "Water, 1 quart": {
            weight:2,
            tags:["Rations"]
        },
        "Bladder (Mil-Spec), 5 quart with cover": {
            weight:1.5,
            tags:["Load Bearing"]
        },
        "Jerry Can, Plastic (20L)": {           
            weight: 5,
            tags:["Misc"]
        },
        "Jerry Can, Plastic (10L)": {
            weight:3.4,
            tags:['Misc']
        },
        "Bandolier, 7 pocket": {
            weight:0.18,
            tags:["Load Bearing", "Vietnam", "Generic"]
        },
        "Canteen, 2 quart colapsable": {
            weight:0.35,
            tags:["Load Bearing"]
        },
        "Canteen, 2 quart with cover and sling": {
            weight:1.05,
            tags:["Load Bearing"]
        },
        "Webbing, WWII": {
            weight:7.8,
            tags:["Load Bearing", "Webbing Set"]
            },
        "Wood Axe": {
            weight:3.5,
            tags:["Melee", "Tools"]
        },
        "Survival Kit": {
            weight:0.88,
            tags:["Misc"]
        },
        "IFAK": {
            weight: 2.4,
            tags:["Medical"]
        },
        "M3 Medic Bag":{ 
            weight: 3.9,
            tags:["Medical"]
        },
        "M17 Medic Bag": {
            weight:12.25,
            tags:["Medical"]
        },
        "Tactical Trauma Kit": {
            weight:1.15,
            tags:["Medical"]
        },
        "Rapid Response Bag": {
            weight:2.5,
            tags:["Medical"]
        },
        "M39 Medic Bag": {
            weight:10,
            tags:["Medical"]
        },
        "Surgical Set": {
            weight:0.7,
            tags:["Medical"]
        },
        "Combat Stretcher, Folding": {
            weight: 15,
            tags: ["Medical"]
        }
  }
  
  

module.exports = equipment