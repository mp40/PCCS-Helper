/* eslint-disable quote-props */
export const situationAndStanceMods = {
  'Standing': 0,
  'Standing & Braced ': 4,
  'Kneeling': 3,
  'Kneeling & Braced': 5,
  'Prone': 6,
  'Prone & Braced': 7,
  'Firing From Hip': -6,
  'Firing Rifle One Hand': -7,
  'Firing Pistol One Hand': -4,
  'Folding Stock Not Used': -4,
  'Firing Pistol Double Action': -3,
  'Deployed Bipod Not Braced': -2,
  'Bipod Mounted Weapon': 3,
  'Tripod Mounted Weapon': 5,
};

export const targetSizeMods = {
  'Look Over/Around': [-4, -3, -3],
  'Fire Over/Around': [0, 2, 2],
  'Standing Exposed': [7, 14, 1],
  'Kneeling Exposed': [6, 11, 3],
  'Prone/Crawl': [2, 2, 2],
  'Running': [8, 14, 1],
  'Low Crouch': [7, 11, 2],
  'Hands & Knees': [6, 8, 1],
  'Low Prone': [1, 0, 5],
  'Head': [-3, 0, -3],
  'Body': [5, 8, 3],
  'Legs': [4, 8, 0],
};

// HPI: [10,20,70,100]
export const movementMods = {
  0.5: [-6, -5, -5, -5, -5],
  1: [-8, -6, -5, -5, -5],
  2: [-10, -8, -6, -5, -5],
  3: [-10, -10, -7, -6, -5],
  4: [-10, -10, -8, -6, -6],
  10: [-10, -10, -10, -10, -8],
};
