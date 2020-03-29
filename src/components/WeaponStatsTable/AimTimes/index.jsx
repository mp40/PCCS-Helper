import React from 'react';
import PropTypes from 'prop-types';


const AimTimes = ({ aim, index, sal }) => (
  <td>
    <span>{aim.ac[index]}</span>
    <span>
      {index < aim.mod.length && sal
        ? aim.mod[index] + sal
        : aim.mod[index]}

    </span>
  </td>
);

AimTimes.propTypes = {
  aim: PropTypes.objectOf(PropTypes.array).isRequired,
  index: PropTypes.number.isRequired,
  sal: PropTypes.number,
};

export default AimTimes;
