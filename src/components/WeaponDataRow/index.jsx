import React from 'react';
import PropTypes from 'prop-types';
import { tableLineShape } from '../../helpers/proptypeShapes';

import '../WeaponsCard/WeaponsCard.css';

const getModPlusSal = (mod, sal) => (mod === undefined ? '' : mod + sal);

const WeaponsDataRow = ({ tableLine, sal, index }) => {
  const borderLeftAndRight = { borderLeft: '1px solid rgb(85, 83, 83)', borderRight: '1px solid rgb(85, 83, 83)' };

  return (
    <tr id={`GunTableLine${index}`} className="GunTableTableRow">
      <td id={`WeaponStat${tableLine.dataType.name}`}>
        <span className="DataType">{tableLine.dataType.short}</span>
        <span className="DataValue">{tableLine.dataType.data}</span>
      </td>
      <td style={borderLeftAndRight}>
        <span className="AimCount">{tableLine.aim[0]}</span>
        <span className="AimMod">{getModPlusSal(tableLine.aim[1], sal)}</span>
      </td>
      <td>
        <span className="AimCount" style={{ marginLeft: '.2rem' }}>{tableLine.tag[0]}</span>
        <span style={{ float: 'right' }}>{tableLine.tag[1]}</span>
      </td>
      {tableLine.array.map((information, dex) => {
        let data = information;
        if (tableLine.tag[1] === 'PEN' && data.toString().length === 1) {
          data = data.toFixed(1);
        }
        return <td key={dex} style={{ textAlign: 'center', width: '2rem' }}>{data}</td>;
      })}
    </tr>
  );
};

WeaponsDataRow.propTypes = {
  tableLine: tableLineShape,
  sal: PropTypes.number,
  index: PropTypes.number,
};

WeaponsDataRow.defaultProps = {
  sal: 0,
};

export default WeaponsDataRow;
