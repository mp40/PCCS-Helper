import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ButtonDeleteX from './buttons/ButtonDeleteX';
import ButtonIncrementArrows from './buttons/ButtonIncrementArrows';
import ButtonStandard from './buttons/ButtonStandard';

import './CharacterGeneration.css';
import './WeaponsCard.css';

const WeaponsCardBody = ({
  weaponsWeight,
  toggleShowFirearms,
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
            onClick={toggleShowFirearms}
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
                onClickUp={handleIncrementGunQty.bind(this, gunObj, 1)}
                onClickDown={handleIncrementGunQty.bind(this, gunObj, -1)}
              />
            </td>
          </tr>
          {gunObj.mag.map((magObj, dex) => (
            <tr key={`${magObj.cap}${magObj.weight}`} className="spareMags">
              <td>
                {magObj.type === 'Rnd'
                  ? <span className="magQtySpan" style={{ marginLeft: '2rem' }}>{`${magObj.qty} x Single Rounds`}</span>
                  : <span className="magQtySpan" style={{ marginLeft: '2rem' }}>{`${magObj.qty} x ${magObj.cap} round ${magObj.type}`}</span>
                                        }
                <span style={{ marginLeft: '2px', marginRight: '2px' }}>
                  <ButtonIncrementArrows
                    idUp={`qtyUpMagType${dex + 1}`}
                    idDown={`qtyDownMagType${dex + 1}`}
                    onClickUp={handleIncrementMagQty.bind(this, gunObj, magObj, 1)}
                    onClickDown={handleIncrementMagQty.bind(this, gunObj, magObj, -1)}
                  />
                </span>
              </td>
            </tr>
          ))}
        </Fragment>
      ))}
    </tbody>
  </table>
);

WeaponsCardBody.propTypes = {
  weaponsWeight: PropTypes.number,
  toggleShowFirearms: PropTypes.func,
  handleRemoveAllGuns: PropTypes.func,
  handleIncrementGunQty: PropTypes.func,
  handleIncrementMagQty: PropTypes.func,
  handleRemoveGun: PropTypes.func,
  toggleModifyWeapon: PropTypes.func,
  selectedGuns: PropTypes.arrayOf(PropTypes.object),
};

export default WeaponsCardBody;
