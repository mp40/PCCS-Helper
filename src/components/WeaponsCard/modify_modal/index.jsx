import React from 'react';
import PropTypes from 'prop-types';

import { gunObjShape } from '../../../helpers/proptypeShapes';

import WeaponStatsTable from '../../WeaponStatsTable';
import FirearmModify from './modify';

import { getFullFirearmSystemWeightByObject } from '../../../data/firearms';

import styles from './styles.module.css';

const FirearmModifyModal = ({ gunToModify, toggleOffWeaponCardViews }) => (
  <>
    <div className="modal-background" />
    <div className={`card-standard card-select-gear-modal ${styles.card}`}>
      <div className={styles.header}>
        <span>{gunToModify.name}</span>
        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => toggleOffWeaponCardViews('modifyFirearm')}
        />
      </div>

      <div className={styles.body}>
        <WeaponStatsTable
          weapon={{ ...gunToModify, weight: getFullFirearmSystemWeightByObject(gunToModify) }}
        />
        <FirearmModify
          gunObj={gunToModify}
        />
      </div>
    </div>
  </>
);

FirearmModifyModal.propTypes = {
  toggleOffWeaponCardViews: PropTypes.func.isRequired,
  gunToModify: gunObjShape,
};

export default FirearmModifyModal;
