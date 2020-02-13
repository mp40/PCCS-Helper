/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';
import ButtonIncrementArrows from '../widgets/buttons/ButtonIncrementArrows';
import { correctFloatingPoint } from '../../reducers/reducerHelpers';

export const renderCorrectAmmoTitle = magObj => (magObj.type === 'Rnd' ? 'Single Rounds' : `${magObj.cap} round ${magObj.type}`);

export const TableHeader = totalWeight => (
  <thead className="--reverseHeading" id="weaponsHeader" style={{ width: '100%' }}>
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

export const RenderGunName = (gunObj, removeFirearm, toggleModifyWeapon) => (
  <td>
    <span>
      <ButtonDeleteX
        id="removeGun"
        onClick={() => removeFirearm(gunObj)}
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

export const RenderGunInfo = (gunObj, increaseFirearmQty, decreaseFirearmQty) => (
  <>
    <td>
      {gunObj.weight}
    </td>
    <td id={`${gunObj.name}_qty`}>
      {gunObj.qty}
    </td>
    <td>
      {correctFloatingPoint(gunObj.qty * gunObj.weight)}
    </td>
    <td>
      <ButtonIncrementArrows
        className="ButtonIncrementArrows"
        idUp="qtyUpGun"
        idDown="qtyDownGun"
        onClickUp={() => increaseFirearmQty(gunObj)}
        onClickDown={() => (gunObj.qty === 1 ? null : decreaseFirearmQty(gunObj))}
      />
    </td>
  </>
);

export const RenderGunMags = (gunObj, increaseMagazineQty, decreaseMagazineQty) => (
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
                  onClickUp={() => increaseMagazineQty({ firearm: gunObj, magazine: magObj })}
                  onClickDown={() => (magObj.qty === 0 ? null : decreaseMagazineQty({ firearm: gunObj, magazine: magObj }))}
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
