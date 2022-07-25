import React from 'react';
import PropTypes from 'prop-types';

import WeaponStatsTable from '../WeaponStatsTable';
import ModifyFirearm from './firearm';

import LinkWrapper from '../widgets/link/link-wrapper';

import { getFullFirearmSystemWeightByObject } from '../../data/firearms';
import { hydrateFirearmByObject } from '../../data/firearms/hydrate';

import { gunObjShape } from '../../helpers/proptypeShapes';

import styles from './styles.module.css';

const ModifyCard = ({ firearms, firearmIndex }) => {
  const firearm = firearms[firearmIndex];

  if (!firearm) {
    return (
      <div className="card-standard">
        <div className={styles.header}>
          <span>Error: Firearm Not Found</span>
        </div>
      </div>
    );
  }

  const hydratedFirearm = hydrateFirearmByObject(firearm);

  return (
    <div className="card-standard">
      <div className={styles.header}>
        <span>{firearm.name}</span>
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
        <ModifyFirearm
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
