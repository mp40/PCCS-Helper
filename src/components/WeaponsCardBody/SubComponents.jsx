/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';
import ButtonIncrementArrows from '../widgets/buttons/ButtonIncrementArrows';
import ButtonStandard from '../widgets/buttons/ButtonStandard';

export const renderCorrectAmmoTitle = magObj => (magObj.type === 'Rnd' ? 'Single Rounds' : `${magObj.cap} round ${magObj.type}`);

export const ButtonBar = (toggleOnWeaponsCardViews, handleRemoveAllGuns) => (
  <div style={{ marginTop: '-1rem', marginBottom: '.5rem' }}>
    <ButtonStandard
      id="addFirearm"
      name="Add Firearm"
      onClick={() => toggleOnWeaponsCardViews('showFirearms')}
    />
    <ButtonStandard
      id="clearAllFirearms"
      name="Clear Firearms"
      onClick={handleRemoveAllGuns}
    />
    <ButtonStandard
      id="addGrenade"
      name="Add Grenade"
      onClick={() => toggleOnWeaponsCardViews('showGrenades')}
    />
  </div>
);

export const TableHeader = totalWeight => (
  <thead className="equipmentHeader" id="weaponsHeader" style={{ width: '100%' }}>
    <tr>
      <th>
        <span>Weapons</span>
      </th>
      <th style={{ width: '10%' }}>Weight</th>
      <th style={{ width: '10%' }}>Qty</th>
      <th style={{ width: '10%' }}>lbs</th>
      <th style={{ width: '10%' }}>{totalWeight}</th>
    </tr>
  </thead>
);

export const RenderGunName = (gunObj, handleRemoveGun, toggleModifyWeapon) => (
  <td>
    <span>
      <ButtonDeleteX
        id="removeGun"
        onClick={() => handleRemoveGun(gunObj)}
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
);

export const RenderGunInfo = (gunObj, handleIncrementGunQty) => (
  <>
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
        onClickUp={() => handleIncrementGunQty(gunObj, 'up')}
        onClickDown={() => handleIncrementGunQty(gunObj, 'down')}
      />
    </td>
  </>
);

export const RenderGunMags = (gunObj, handleIncrementMagQty) => (
  <>
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
                  onClickUp={() => handleIncrementMagQty(gunObj, magObj, 'up')}
                  onClickDown={() => handleIncrementMagQty(gunObj, magObj, 'down')}
                />
              </span>
            </td>
          </tr>
        );
      }
      return null;
    })}
  </>
);
