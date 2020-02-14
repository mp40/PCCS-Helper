/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Fragment } from 'react';
import { weaponRowDataShape } from '../../../helpers/proptypeShapes';
import ButtonDeleteX from '../../widgets/buttons/ButtonDeleteX';
import ButtonIncrementArrows from '../../widgets/buttons/ButtonIncrementArrows';
import { correctFloatingPoint } from '../../../reducers/reducerHelpers';

import './WeaponRow.css';

export const renderCorrectAmmoTitle = (mag) => (mag.type === 'Rnd' ? 'Single Rounds' : `${mag.cap} round ${mag.type}`);

const WeaponRow = ({ weapons }) => {
  const renderRemoveButton = (weapon) => (
    <ButtonDeleteX
      className={`remove${weapon.name}`}
      onClick={() => weapons.remove(weapon)}
    />
  );


  const renderIncrementButtons = (weapon) => (
    <ButtonIncrementArrows
      className="ButtonIncrementArrows"
      idUp={`qtyUp${weapons.type}`}
      idDown={`qtyDown${weapons.type}`}
      onClickUp={() => weapons.up(weapon)}
      onClickDown={() => (weapon.qty === 1 ? null : weapons.down(weapon))}
    />
  );

  const wrapWithClickable = (weapon) => {
    if (weapons.type === 'Firearm') {
      return (
        <span
          id={`modify${weapon.name}`}
          onClick={() => weapons.modify(weapon)}
        >
          {weapon.name}
        </span>
      );
    }
    return weapon.name;
  };

  return (
    weapons.array.map((weapon) => (
      <Fragment key={weapon.name}>
        <tr className={`${weapon.name}Row tableRow`}>
          <td>
            {renderRemoveButton(weapon)}
            {wrapWithClickable(weapon)}
          </td>
          <td>{weapon.weight}</td>
          <td>{weapon.qty}</td>
          <td>{correctFloatingPoint(weapon.qty * weapon.weight)}</td>
          <td>{renderIncrementButtons(weapon)}</td>
        </tr>
        {weapon.mag && weapon.mag.map((mag, index) => {
          if (mag.removed === true) {
            return null;
          }
          return (
            <tr key={`${mag.cap}${mag.weight}`} className="spareMagRow">
              <td>
                {/* <span className="magQtySpan" style={{ marginLeft: '2rem' }}> */}
                <span className="magQtySpan">
                  {`${mag.qty} x ${renderCorrectAmmoTitle(mag)}`}
                </span>
                {/* <span style={{ marginLeft: '2px', marginRight: '2px' }}> */}
                <ButtonIncrementArrows
                  idUp={`qtyUpMagType${index + 1}`}
                  idDown={`qtyDownMagType${index + 1}`}
                  onClickUp={() => weapons.magUp({ firearm: weapon, magazine: mag })}
                  onClickDown={() => (mag.qty === 0 ? null : weapons.magDown({ firearm: weapon, magazine: mag }))}
                />
                {/* </span> */}
              </td>
            </tr>
          );
        },
        )}
      </Fragment>
    ),
    )
  );
};

WeaponRow.propTypes = {
  weapons: weaponRowDataShape,
};

export default WeaponRow;
