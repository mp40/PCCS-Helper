import React from 'react';
import { PropTypes } from 'prop-types';

import './ReactionTable.css';

const ReactionTable = ({ sal }) => (
  <div className="reaction-table">
    <div>
      <div className="reaction-table-heading">Reaction Time</div>
    </div>
    <div className="reaction-table-row">
      <div>Any Action</div>
      <div>{`≤ ${sal - 3}`}</div>
    </div>
    <div className="reaction-table-row">
      <div>Duck/Go Prone</div>
      <div>{`≤ ${sal}`}</div>
    </div>
    <div className="reaction-table-row">
      <div>-1 AC &#38; Reroll</div>
      <div>
        {`≤ ${sal + 1}`}
      </div>
    </div>
  </div>
);

ReactionTable.propTypes = {
  sal: PropTypes.number,
};

export default ReactionTable;
