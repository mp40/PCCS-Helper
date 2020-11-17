import React from 'react';
import PropTypes from 'prop-types';

import { gunObjShape } from '../../../helpers/proptypeShapes';

import WeaponStatsTable from '../../WeaponStatsTable';
import FirearmModify from './modify';

import styles from './styles.module.css';

const FirearmModifyModal = ({ gunToModify, toggleOffWeaponCardViews }) => (
  <>
    <div className={styles.modal} />
    <div className={`--card ${styles.card}`}>
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
          weapon={gunToModify}
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
