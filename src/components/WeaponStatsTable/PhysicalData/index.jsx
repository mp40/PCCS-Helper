import React from 'react';
import PropTypes from 'prop-types';

import { gunObjShape, launcherShape } from '../../../helpers/proptypeShapes';

const PhysicalData = ({ weapon, value }) => (
  <td>
    <span>{value.abbreviation}</span>
    <span>{value.mag ? weapon.mag[0][value.data] : weapon[value.data]}</span>
  </td>
);

PhysicalData.propTypes = {
  weapon: PropTypes.oneOfType([gunObjShape, launcherShape]).isRequired,
  value: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])).isRequired,
};

export default PhysicalData;
