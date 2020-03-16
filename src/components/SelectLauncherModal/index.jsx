/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import WeaponsModalSelection from '../WeaponsModalSelection';
import GearModal from '../GearModal';

import GearModalContents from '../GearModalContents';
import GearCard from '../GearCard';

import ButtonStandard from '../widgets/buttons/ButtonStandard';
import ButtonInfo from '../widgets/buttons/ButtonInfo';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';

import { launchers } from '../../data/launchers';

const SelectLauncherModal = () => {
  console.log('hi');

  return (
    <GearModal>
      <GearCard>
        <GearModalContents>
          {launchers().map((gunObj) => (
            <div key={gunObj.name} style={{ display: 'flex', width: '30%', paddingLeft: '.2rem', paddingRight: '.2rem' }}>
              <ButtonInfo
                id={`view${gunObj.name.replace(/\s+/g, '')}`}
                //  onClick={() => handleShowStatCard(gunObj)}
              />
              <div
                className="firearmEntry"
                id={gunObj.name}
                // onClick={() => addFirearmToList(gunObj)}
              >
                <span>{gunObj.name}</span>
                <span>{`${gunObj.weight} lbs`}</span>
              </div>
            </div>
          ))}
        </GearModalContents>
      </GearCard>
    </GearModal>
  );
};

export default SelectLauncherModal;
