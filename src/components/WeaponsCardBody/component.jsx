/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';
import ButtonIncrementArrows from '../widgets/buttons/ButtonIncrementArrows';
import { TableHeader, RenderGunMags, RenderGunName, RenderGunInfo } from './SubComponents';
import { correctFloatingPoint } from '../../reducers/reducerHelpers';

import { calculateFirearmsArrayWeight } from '../../helpers/actionHelpers';

import '../CharacterGeneration/CharacterGeneration.css';
import '../WeaponsCard/WeaponsCard.css';

const WeaponsCardBody = ({
  toggleModifyWeapon,
  selectedGuns,
  selectedGrenades,
  removeGrenade,
  increaseGrenadeQty,
  decreaseGrenadeQty,
  removeFirearm,
  increaseFirearmQty,
  decreaseFirearmQty,
  increaseMagazineQty,
  decreaseMagazineQty,

}) => {
  const renderGunFragment = () => (
    selectedGuns.map(gunObj => (
      <Fragment key={gunObj.name}>
        <tr className="SelectedGunsFragment">
          {RenderGunName(gunObj, removeFirearm, toggleModifyWeapon)}
          {RenderGunInfo(gunObj, increaseFirearmQty, decreaseFirearmQty)}
        </tr>
        {RenderGunMags(gunObj, increaseMagazineQty, decreaseMagazineQty)}
      </Fragment>
    ))
  );

  const renderGrenadeFragment = () => (
    selectedGrenades.map(grenade => (
      <tr key={grenade.name} className={`${grenade.name}Row`} style={{ fontSize: 'small' }}>
        <td>
          <span style={{ paddingRight: '5px' }}>
            <ButtonDeleteX
              className={`remove${grenade.name}`}
              onClick={() => removeGrenade(grenade)}
            />
          </span>
          {grenade.name}
        </td>
        <td>{grenade.w}</td>
        <td>{grenade.qty}</td>
        <td>{correctFloatingPoint(grenade.qty * grenade.w)}</td>
        <td>
          <ButtonIncrementArrows
            className="ButtonIncrementArrows"
            idUp="qtyUpGrenade"
            idDown="qtyDownGrenade"
            onClickUp={() => increaseGrenadeQty(grenade, 'up')}
            onClickDown={() => (grenade.qty === 1 ? null : decreaseGrenadeQty(grenade, 'down'))}
          />
        </td>
      </tr>
    ))
  );


  return (
    <>
      <table className="--gearTable">
        {TableHeader(calculateFirearmsArrayWeight(selectedGuns))}
        <tbody id="characterWeaponList">
          {renderGunFragment()}
          {renderGrenadeFragment()}
        </tbody>
      </table>
    </>
  );
};


WeaponsCardBody.propTypes = {
  increaseMagazineQty: PropTypes.func,
  decreaseMagazineQty: PropTypes.func,
  removeFirearm: PropTypes.func,
  increaseFirearmQty: PropTypes.func,
  decreaseFirearmQty: PropTypes.func,
  increaseGrenadeQty: PropTypes.func,
  decreaseGrenadeQty: PropTypes.func,
  removeGrenade: PropTypes.func,
  toggleModifyWeapon: PropTypes.func,
  selectedGuns: PropTypes.arrayOf(PropTypes.object),
  selectedGrenades: PropTypes.arrayOf(PropTypes.object),
};

export default WeaponsCardBody;
