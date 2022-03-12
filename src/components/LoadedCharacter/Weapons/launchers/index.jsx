import React from 'react';
import PropTypes from 'prop-types';

import { launcherList } from '../../../../data/launchers';
import { launchers as underslugList } from '../../../../data/firearms/launchers';
import { launcherShape } from '../../../../helpers/proptypeShapes';

import styles from '../styles.module.css';

const CharacterLaunchers = ({ launchers, setWeapon }) => {
  if (!launchers.length) {
    return null;
  }

  const hydratedLaunchers = { ...launcherList, ...underslugList };

  return (
    <>
      <h3>Launchers</h3>

      {launchers.map((launcher) => (
        <button type="button" key={launcher.name} className={styles.weapon} onClick={() => setWeapon(hydratedLaunchers[launcher.name])}>

          <div key={launcher.name} className={styles.launcher}>
            <span>{`${launcher.name} x ${launcher.qty}`}</span>
            {launcher.mag.map((m) => {
              if (m.weight === '-') {
                return null;
              }
              return (
                <span key={m.class}>{`${m.class} x ${m.qty}`}</span>
              );
            })}
          </div>

        </button>
      ))}
    </>
  );
};

CharacterLaunchers.propTypes = {
  launchers: PropTypes.arrayOf(launcherShape).isRequired,
  setWeapon: PropTypes.func.isRequired,
};

export default CharacterLaunchers;
