import React, { useReducer, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { AlmDispatchProvider, AlmStateProvider, FirearmProvider } from './context';
import { updateAims, resetSituation } from './actions';
import reducer from './reducer';

import LoadedCharacterShootingHeader from './header';
import Alm from './alm';
import FirearmData from './firearm-data';
import PewPew from './pew-pew';

import { gunObjShape } from '../../../helpers/proptypeShapes';
import { salAndCeTable } from '../../../core/tables';
import { initialState } from './data';

const LoadedCharacterShooting = ({
  firearm,
  level,
  setFirearm,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [alm, setAlm] = useState(0);
  const [rof, setRof] = useState(!firearm.selector ? 'Single' : 'Auto');

  useEffect(() => {
    dispatch(resetSituation());
    dispatch(updateAims(1));
    setRof(!firearm.selector ? 'Single' : 'Auto');
  }, [firearm]);

  const sal = salAndCeTable[level];

  return (
    <AlmDispatchProvider dispatch={dispatch}>
      <FirearmProvider firearm={{ ...firearm }}>
        <AlmStateProvider state={{ ...state }}>

          <div className="card-standard">
            <LoadedCharacterShootingHeader setFirearm={setFirearm} firearmName={firearm.name} />
            <FirearmData alm={alm} rof={rof} level={level} />
            <Alm setAlm={setAlm} />
            <PewPew rof={rof} setRof={setRof} alm={alm + sal} />
          </div>

        </AlmStateProvider>
      </FirearmProvider>
    </AlmDispatchProvider>

  );
};

LoadedCharacterShooting.propTypes = {
  firearm: gunObjShape.isRequired,
  level: PropTypes.number.isRequired,
  setFirearm: PropTypes.func.isRequired,
};

export default LoadedCharacterShooting;
