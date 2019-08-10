/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ButtonBar, TableHeader, RenderGunMags, RenderGunName, RenderGunInfo } from './SubComponents';

import { calculateFirearmsArrayWeight } from '../../helpers/actionHelpers';

import '../CharacterGeneration/CharacterGeneration.css';
import '../WeaponsCard/WeaponsCard.css';

// todo maybe connct this instead of passing so many props?
const WeaponsCardBody = ({
  toggleOnWeaponsCardViews,
  handleRemoveGun,
  handleRemoveAllGuns,
  handleIncrementGunQty,
  handleIncrementMagQty,
  toggleModifyWeapon,
  selectedGuns,
  selectedGrenades,

}) => {
  const renderGunFragment = () => (
    selectedGuns.map(gunObj => (
      <Fragment key={gunObj.name}>
        <tr className="SelectedGunsFragment">
          {RenderGunName(gunObj, handleRemoveGun, toggleModifyWeapon)}
          {RenderGunInfo(gunObj, handleIncrementGunQty)}
        </tr>
        {RenderGunMags(gunObj, handleIncrementMagQty)}
      </Fragment>
    ))
  );

  return (
    <div>
      {ButtonBar(toggleOnWeaponsCardViews, handleRemoveAllGuns)}
      <table style={{ width: '100%' }} className="equipmentTable">
        {TableHeader(calculateFirearmsArrayWeight(selectedGuns))}
        <tbody id="characterWeaponList">
          {renderGunFragment()}
          {selectedGrenades.map(grenade => (
            <tr key={grenade.name}>
              <td>{grenade.name}</td>
              <td>{grenade.w}</td>
              <td>{grenade.qty}</td>
              <td>{grenade.qty * grenade.w}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


WeaponsCardBody.propTypes = {
  toggleOnWeaponsCardViews: PropTypes.func,
  handleRemoveAllGuns: PropTypes.func,
  handleIncrementGunQty: PropTypes.func,
  handleIncrementMagQty: PropTypes.func,
  handleRemoveGun: PropTypes.func,
  toggleModifyWeapon: PropTypes.func,
  selectedGuns: PropTypes.arrayOf(PropTypes.object),
  selectedGrenades: PropTypes.arrayOf(PropTypes.object),
};

export default WeaponsCardBody;
