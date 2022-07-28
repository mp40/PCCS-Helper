const pistols = [{ key: 'pistolOneHand', text: 'Pistol One Handed' }, { key: 'pistolDoubleAction', text: 'Firing Pistol Double Action' }];

const smgs = [{ key: 'smgOneHand', text: 'SMG One Handed' }];

const longArms = [{ key: 'rifleOneHand', text: 'Rifle One Handed' }];

const nonPistols = [{ key: 'slingSupport', text: 'Sling for Support' }];

const bipods = [{ key: 'bipodBraced', text: 'Bipod Braced' }, { key: 'bipodNotBraced', text: 'Bipod Not Braced' }];

export const getModifierList = (list, bipod, foldingStock) => {
  let result = [{ key: 'braced', text: 'Braced' }, { key: 'hipFire', text: 'Hip Fire' }];

  if (bipod) {
    result = [...bipods, ...result];
  }

  if (list === 'pistols') {
    result = [...result, ...pistols];
  }

  if (list !== 'pistols') {
    result = [...result, ...nonPistols];
  }

  if (list === 'smgs') {
    result = [...result, ...smgs];
  }

  if (list !== 'smgs' && list !== 'pistols') {
    result = [...result, ...longArms];
  }

  if (foldingStock) {
    result = [...result, { key: 'foldingStockNotUsed', text: 'Folding Stock Not Used' }];
  }

  return result;
};
