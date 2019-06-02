import React from 'react';
import PropTypes from 'prop-types';

const WeaponsDataRow = ({ tableLine, index }) => {
  const borderLeftAndRight = { borderLeft: '1px solid rgb(85, 83, 83)', borderRight: '1px solid rgb(85, 83, 83)' };

  return (
    <tr id={`GunTableLine${index}`}>
      <td id={`WeaponStat${tableLine.dataType.name}`}>
        <span style={{ marginLeft: '.4rem' }}>{tableLine.dataType.short}</span>
        <span style={{ marginRight: '.4rem', float: 'right' }}>{tableLine.dataType.data}</span>
      </td>
      <td style={borderLeftAndRight}>
        <span style={{ marginLeft: '.9rem' }}>{tableLine.aim[0]}</span>
        <span style={{ marginRight: '.9rem', float: 'right' }}>{tableLine.aim[1]}</span>
      </td>
      <td>
        <span style={{ marginLeft: '.2rem' }}>{tableLine.tag[0]}</span>
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
  tableLine: PropTypes.shape({
    dataType: PropTypes.object,
    aim: PropTypes.array,
    tag: PropTypes.array,
    array: PropTypes.array,
  }),
  index: PropTypes.number,
};

export default WeaponsDataRow;
