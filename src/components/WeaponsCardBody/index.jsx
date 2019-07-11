import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';
import ButtonIncrementArrows from '../widgets/buttons/ButtonIncrementArrows';
import ButtonStandard from '../widgets/buttons/ButtonStandard';

import '../CharacterGeneration/CharacterGeneration.css';
import '../WeaponsCard/WeaponsCard.css';

export const renderCorrectAmmoTitle = magObj => (magObj.type === 'Rnd' ? 'Single Rounds' : `${magObj.cap} round ${magObj.type}`);

const WeaponsCardBody = ({
  weaponsWeight,
  toggleOnWeaponsCardViews,
  handleRemoveGun,
  handleRemoveAllGuns,
  handleIncrementGunQty,
  handleIncrementMagQty,
  toggleModifyWeapon,
  selectedGuns,
}) => (
  <table style={{ width: '100%' }} className="equipmentTable">
    <thead className="equipmentHeader" id="weaponsHeader" style={{ width: '100%' }}>
      <tr>
        <th>
          <span>Weapons</span>
        </th>
        <th style={{ width: '10%' }}>Weight</th>
        <th style={{ width: '10%' }}>Qty</th>
        <th style={{ width: '10%' }}>lbs</th>
        <th style={{ width: '10%' }}>{weaponsWeight}</th>
      </tr>
    </thead>
    <tbody id="characterWeaponList">
      <tr>
        <td>
          <ButtonStandard
            id="addFirearm"
            name="Add Firearm"
            onClick={toggleOnWeaponsCardViews.bind(this, 'showFirearms')}
          />
          <ButtonStandard
            id="clearAllFirearms"
            name="Clear All"
            onClick={handleRemoveAllGuns}
          />
        </td>
      </tr>
      {selectedGuns.map(gunObj => (
        <Fragment key={gunObj.name}>
          <tr className="SelectedGunsFragment">
            <td>
              <span>
                <ButtonDeleteX
                  id="removeGun"
                  onClick={handleRemoveGun.bind(this, gunObj)}
                />
              </span>
              <span
                style={{ marginLeft: '0.5rem', paddingLeft: '5px', paddingRight: '5px' }}
                className="selectFirearmToModify"
                id={`modify${gunObj.name}`}
                onClick={toggleModifyWeapon.bind(this, gunObj)}
              >
                {gunObj.name}
              </span>
            </td>
            <td>
              {gunObj.weight}
            </td>
            <td id={`${gunObj.name}_qty`}>
              {gunObj.qty}
            </td>
            <td>
              {gunObj.qty * gunObj.weight}
            </td>
            <td>
              <ButtonIncrementArrows
                className="ButtonIncrementArrows"
                idUp="qtyUpGun"
                idDown="qtyDownGun"
                onClickUp={handleIncrementGunQty.bind(this, gunObj, 'up')}
                onClickDown={handleIncrementGunQty.bind(this, gunObj, 'down')}
              />
            </td>
          </tr>
          {gunObj.mag.map((magObj, dex) => {
            if (magObj.removed === undefined || magObj.removed === false) {
              return (
                <tr key={`${magObj.cap}${magObj.weight}`} className="spareMags">
                  <td>
                    <span className="magQtySpan" style={{ marginLeft: '2rem' }}>{`${magObj.qty} x ${renderCorrectAmmoTitle(magObj)}`}</span>
                    <span style={{ marginLeft: '2px', marginRight: '2px' }}>
                      <ButtonIncrementArrows
                        idUp={`qtyUpMagType${dex + 1}`}
                        idDown={`qtyDownMagType${dex + 1}`}
                        onClickUp={handleIncrementMagQty.bind(this, gunObj, magObj, 'up')}
                        onClickDown={handleIncrementMagQty.bind(this, gunObj, magObj, 'down')}
                      />
                    </span>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </Fragment>
      ))}
    </tbody>
  </table>
);

WeaponsCardBody.propTypes = {
  weaponsWeight: PropTypes.number,
  toggleOnWeaponsCardViews: PropTypes.func,
  handleRemoveAllGuns: PropTypes.func,
  handleIncrementGunQty: PropTypes.func,
  handleIncrementMagQty: PropTypes.func,
  handleRemoveGun: PropTypes.func,
  toggleModifyWeapon: PropTypes.func,
  selectedGuns: PropTypes.arrayOf(PropTypes.object),
};

export default WeaponsCardBody;
