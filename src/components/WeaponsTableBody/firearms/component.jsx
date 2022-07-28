import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import FirearmRow from '../../gear-rows/firearm-row';

import Magazines from './magazines';
import UnderslugAmmo from './underslung-ammo';

import { getFullFirearmSystemWeightByObject } from '../../../data/firearms';

import { gunObjShape } from '../../../helpers/proptypeShapes';

const Firearms = ({
  firearms,
  removeFirearm,
  increaseFirearmQty,
  decreaseFirearmQty,
  increaseMagazineQty,
  decreaseMagazineQty,
  increaseUnderslungLauncherAmmo,
  decreaseUnderslungLauncherAmmo,
}) => {
  const handleDecreaseFirearm = (payload, qty) => {
    if (qty === 1) {
      return;
    }

    decreaseFirearmQty(payload);
  };

  return firearms.map((firearm, index) => (
    <Fragment key={firearm.name}>

      <FirearmRow
        text={`${firearm.name}${firearm?.launcher ? ` - ${firearm.launcher.attached}` : ''}`}
        removeItem={() => removeFirearm(firearm.name)}
        firearmIndex={index}
        weight={getFullFirearmSystemWeightByObject(firearm)}
        qty={firearm.qty}
        increaseItem={() => increaseFirearmQty(firearm.name)}
        decreaseItem={() => handleDecreaseFirearm(firearm.name, firearm.qty)}
      />

      <Magazines
        firearmName={firearm.name}
        magazines={firearm.mag}
        increaseMagazineQty={increaseMagazineQty}
        decreaseMagazineQty={decreaseMagazineQty}
      />

      <UnderslugAmmo
        firearmName={firearm.name}
        attached={firearm?.launcher?.attached}
        magazines={firearm?.launcher?.mag}
        increaseUnderslungLauncherAmmo={increaseUnderslungLauncherAmmo}
        decreaseUnderslungLauncherAmmo={decreaseUnderslungLauncherAmmo}
      />

    </Fragment>
  ));
};

Firearms.propTypes = {
  increaseMagazineQty: PropTypes.func.isRequired,
  decreaseMagazineQty: PropTypes.func.isRequired,
  removeFirearm: PropTypes.func.isRequired,
  increaseFirearmQty: PropTypes.func.isRequired,
  decreaseFirearmQty: PropTypes.func.isRequired,
  increaseUnderslungLauncherAmmo: PropTypes.func.isRequired,
  decreaseUnderslungLauncherAmmo: PropTypes.func.isRequired,
  firearms: PropTypes.arrayOf(gunObjShape).isRequired,
};

export default Firearms;
