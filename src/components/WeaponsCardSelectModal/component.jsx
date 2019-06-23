import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';
import WeaponsModalSelection from '../WeaponsModalSelection';
import { isNotValidObjectToAdd } from '../../helpers/gaurds';

import { rifles, pistols, smgs, mgs, sniperRifles, shotguns } from '../../data/firearms';

class WeaponsCardSelectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGunStats: false,
      gunStatsToView: undefined,
    };
  }

    handleAddFirearm = (gunObj) => {
      const { addFirearm, gear } = this.props;

      if (isNotValidObjectToAdd(gear.firearms, gunObj)) {
        return;
      }

      addFirearm(gunObj);
    }

    handleShowGunStats = (gunObj) => {
      const { showGunStats } = this.state;
      this.setState({ showGunStats: !showGunStats, gunStatsToView: gunObj });
    }

    render() {
      const { gunStatsToView, showGunStats } = this.state;
      const { closeShowFirearms } = this.props;
      const firearmsArray = [...rifles(), ...pistols(), ...smgs(), ...mgs(), ...sniperRifles(), ...shotguns()];
      const gunObj = gunStatsToView;

      return (
        <div className="equipmentModalContainer">
          {showGunStats
            ? (
              <WeaponsCardWeaponStats
                gunObj={gunObj}
                handleShowGunStats={this.handleShowGunStats}
              />
            )
            : (
              <WeaponsModalSelection
                firearmsArray={firearmsArray}
                closeShowFirearms={closeShowFirearms}
                handleAddFirearm={this.handleAddFirearm}
                handleShowGunStats={this.handleShowGunStats}
              />
            )
            }
        </div>
      );
    }
}

WeaponsCardSelectModal.propTypes = {
  addFirearm: PropTypes.func,
  closeShowFirearms: PropTypes.func,
  gear: gearShape,
};

export default WeaponsCardSelectModal;
