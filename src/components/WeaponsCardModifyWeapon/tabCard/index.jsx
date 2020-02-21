import React from 'react';
import PropTypes from 'prop-types';
import './tabCard.css';

const TabCard = ({ tabContents, cardContents }) => {
  const x ='?';
  return (
    <div className="tabCardContainer">
      <div className="tab">
        {tabContents}
      </div>
      <div className="tabCard">
        {cardContents}
      </div>
    </div>
  );
};

// tabCard.propTypes = {
//     tabContents:
//     cardContents:
// }

export default TabCard;
