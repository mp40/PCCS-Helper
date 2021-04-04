import React from 'react';
import PropTypes from 'prop-types';

import text from './data';

import './LevelsCard.css';

const LevelsCard = ({ levelType, children }) => (
  <div className="--card levelsCard">
    <table>
      <tbody>
        <tr>
          <th className="--tableHeading">{text[levelType].heading}</th>
          <th className="--tableValue">{text[levelType].value}</th>
        </tr>
        {children}
      </tbody>
    </table>
  </div>
);

LevelsCard.propTypes = {
  levelType: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default LevelsCard;
