import React from 'react';
import PropTypes from 'prop-types';
import ButtonStandard from '../widgets/buttons/ButtonStandard';

import buttonData from './data';

const GearCard = ({ gearType, buttonFunctions, children }) => {
  const renderButtons = () => (
    <div>
      {buttonData(gearType).map((obj, index) => (
        <ButtonStandard
          key={obj.id}
          id={obj.id}
          name={obj.name}
          onClick={buttonFunctions[index]}
        />
      ),
      )}
    </div>
  );

  return (
    <div className="--card --gearCard">
      {renderButtons()}
      { children }
    </div>
  );
};

GearCard.propTypes = {
  gearType: PropTypes.string,
  buttonFunctions: PropTypes.arrayOf(PropTypes.func),
  children: PropTypes.arrayOf(PropTypes.node),
};

export default GearCard;
