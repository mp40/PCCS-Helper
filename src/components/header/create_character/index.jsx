import React from "react";
import PropTypes from "prop-types";
import "../header.css";

const HeaderCreateCharacter = ({ totalWeight }) => {
  const characterWeight = Math.round(totalWeight * 1000) / 1000;
  return (
    <div className='navCreateCharacterContainer'>
      <div>Create Character</div>
      <div className='navEquipWeight'>{`total lbs ${characterWeight}`}</div>
    </div>
  );
};

HeaderCreateCharacter.propTypes = {
  totalWeight: PropTypes.number,
};

export default HeaderCreateCharacter;
