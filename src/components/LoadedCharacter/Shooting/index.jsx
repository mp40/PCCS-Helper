import React, { useReducer, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { AlmDispatchProvider, AlmStateProvider, WeaponProvider } from './context';
import { updateAims, resetSituation } from './actions';
import reducer from './reducer';

import LoadedCharacterShootingHeader from './header';
import Alm from './alm';
import FirearmData from './firearm-data';
import PewPew from './pew-pew';

import { gunObjShape, launcherShape } from '../../../helpers/proptypeShapes';
import { salAndCeTable } from '../../../core/tables';
import { initialState } from './data';

const LoadedCharacterShooting = ({
  weapon,
  level,
  setWeapon,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [alm, setAlm] = useState(0);
  const [rof, setRof] = useState('Single');

  useEffect(() => {
    dispatch(resetSituation());
    dispatch(updateAims(1));
    setRof(weapon.selector ? 'Auto' : 'Single');
  }, [weapon]);

  const sal = salAndCeTable[level];

  return (
    <AlmDispatchProvider dispatch={dispatch}>
      <WeaponProvider weapon={{ ...weapon }}>
        <AlmStateProvider state={{ ...state }}>
          <div className="card-standard">
            <LoadedCharacterShootingHeader setWeapon={setWeapon} weaponName={weapon.name} />
            <FirearmData alm={alm} rof={rof} level={level} />
            <Alm setAlm={setAlm} />
            <PewPew rof={rof} setRof={setRof} alm={alm + sal} />
          </div>
        </AlmStateProvider>
      </WeaponProvider>
    </AlmDispatchProvider>

  );
};

LoadedCharacterShooting.propTypes = {
  weapon: PropTypes.oneOfType([gunObjShape, launcherShape]).isRequired,
  level: PropTypes.number.isRequired,
  setWeapon: PropTypes.func.isRequired,
};

export default LoadedCharacterShooting;
