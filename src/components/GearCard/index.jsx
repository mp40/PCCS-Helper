import React from 'react';
import PropTypes from 'prop-types';
import ButtonStandard from '../widgets/buttons/ButtonStandard';

import buttonData from './data';

const GearCard = ({ gearType, name, hasButtonFunctions, buttonFunctions, children }) => {
  const renderButtons = () => {
    if (!hasButtonFunctions) {
      return null;
    }
    return (
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
  };

  return (
    <div className={`--card ${name}`}>
      {renderButtons()}
      { children }
    </div>
  );
};

GearCard.propTypes = {
  gearType: PropTypes.string,
  name: PropTypes.string,
  hasButtonFunctions: PropTypes.bool,
  buttonFunctions: PropTypes.arrayOf(PropTypes.func),
  children: PropTypes.arrayOf(PropTypes.node),
};

GearCard.defaultProps = {
  name: '--gearCard',
  hasButtonFunctions: true,
};

export default GearCard;
