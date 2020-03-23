/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Fragment } from 'react';
import { gearRowShape } from '../../helpers/proptypeShapes';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';
import ButtonIncrementArrows from '../widgets/buttons/ButtonIncrementArrows';
import { correctFloatingPoint } from '../../reducers/reducerHelpers';

import keys from './data';

import './GearRow.css';

export const renderCorrectAmmoTitle = (mag) => {
  if (mag?.class) {
    return mag.class;
  }
  return (mag.type === 'Rnd' ? 'Single Rounds' : `${mag.cap} round ${mag.type}`);
};

const GearRow = ({ gear }) => {
  const renderRemoveButton = (item) => (
    <ButtonDeleteX
      className={`remove${item.name.replace(/\s/g, '')}`}
      onClick={() => gear.remove(item)}
    />
  );


  const renderIncrementButtons = (idString, upFn, downFn) => (
    <ButtonIncrementArrows
      idUp={`qtyUp${idString}`}
      idDown={`qtyDown${idString}`}
      onClickUp={upFn}
      onClickDown={downFn}
    />
  );

  const renderIncrementItemButtons = (item) => renderIncrementButtons(
    gear.type, () => gear.up(item), () => (item.qty === 1 ? null : gear.down(item)),
  );

  const renderIncrementMagazineButtons = (weapon, magazine, index) => renderIncrementButtons(
    `MagType${index + 1}`, () => gear.magUp({ weapon, magazine }), () => (magazine.qty === 0 ? null : gear.magDown({ weapon, magazine })),
  );

  const wrapWithClickable = (item) => {
    if (gear.type === 'Firearm') {
      return (
        <span
          id={`modify${item.name}`}
          onClick={() => gear.modify(item)}
          className="--selectableRow"
        >
          {item.name}
        </span>
      );
    }
    return item.name;
  };

  return (
    gear.array.map((item) => (
      <Fragment key={item.name}>
        <tr className={`${item.name.replace(/\s/g, '')}Row tableRow`}>
          <td>
            {renderRemoveButton(item)}
            {wrapWithClickable(item)}
          </td>
          <td>{item.weight}</td>
          <td>{item.qty}</td>
          <td>{correctFloatingPoint(item.qty * item.weight)}</td>
          <td>{renderIncrementItemButtons(item)}</td>
        </tr>
        {item.mag && item.mag.map((mag, index) => {
          if (mag.removed === true || mag.weight === '-') {
            return null;
          }
          return (
            <tr key={keys[index]} className="spareMagRow">
              <td>
                <span>
                  {`${mag.qty} x ${renderCorrectAmmoTitle(mag)}`}
                </span>
                <span>
                  {renderIncrementMagazineButtons(item, mag, index)}
                </span>
              </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
          );
        },
        )}
      </Fragment>
    ),
    )
  );
};

GearRow.propTypes = {
  gear: gearRowShape,
};

export default GearRow;
