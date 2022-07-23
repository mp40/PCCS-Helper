import React from 'react';
import PropTypes from 'prop-types';

// import WeaponStatsTable from '../../WeaponStatsTable';
import WeaponStatsTable from '../WeaponStatsTable';
import FirearmModify from '../WeaponsCard/modify_modal/modify';

import LinkWrapper from '../widgets/link/link-wrapper';

import { getFullFirearmSystemWeightByObject } from '../../data/firearms';
import { hydrateFirearmByObject } from '../../data/firearms/hydrate';

import { gunObjShape } from '../../helpers/proptypeShapes';

import styles from './styles.module.css';

const ModifyCard = ({ firearms, firearmIndex }) => {
  const firearm = firearms[firearmIndex];

  let headerText;
  if (firearm) {
    headerText = firearm.name;
  } else {
    headerText = 'Error: Firearm Not Found';
  }

  const hydratedFirearm = hydrateFirearmByObject(firearm);

  return (
    <div className="card-standard">
      <div className={styles.header}>
        <span>{headerText}</span>
        <LinkWrapper href="/edit">
          <button
            aria-label="close"
            className={styles.close}
            type="button"
          />
        </LinkWrapper>
      </div>
      <div className={styles.body}>
        <WeaponStatsTable
          weapon={{ ...hydratedFirearm, weight: getFullFirearmSystemWeightByObject(firearm) }}
        />
        <FirearmModify
          gunObj={hydratedFirearm}
        />
      </div>
    </div>
  );
};

ModifyCard.propTypes = {
  firearms: PropTypes.arrayOf(gunObjShape).isRequired,
  firearmIndex: PropTypes.number,
};

export default ModifyCard;
