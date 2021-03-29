import React from 'react';
import { currentCharacterShape } from '../../helpers/proptypeShapes';

const LoadedCharacter = ({ currentCharacter }) => (
  <div>
    <h1>Loaded Character Placeholder</h1>
    <p>{currentCharacter.name}</p>
  </div>

);

LoadedCharacter.propTypes = {
  currentCharacter: currentCharacterShape.isRequired,
};

export default LoadedCharacter;