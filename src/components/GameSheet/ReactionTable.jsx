import React from 'react';
import { PropTypes } from 'prop-types';

import './ReactionTable.css';

const ReactionTable = ({ sal }) => (
  <div className="reaction-table">
    <div>
      <div>Reaction Time</div>
    </div>
    <div className="reaction-table-row">
      <div>Any Action</div>
      <div>≤</div>
      <div>{sal - 3}</div>
    </div>
    <div className="reaction-table-row">
      <div>Duck/Go Prone</div>
      <div>≤</div>
      <div>{sal}</div>
    </div>
    <div className="reaction-table-row">
      <div>-1 AC, reroll</div>
      <div>≤</div>
      <div>{sal + 1}</div>
    </div>
  </div>
);

ReactionTable.propTypes = {
  sal: PropTypes.number,
};

export default ReactionTable;
