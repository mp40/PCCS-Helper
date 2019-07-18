import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';
import WeaponsModalSelection from '../WeaponsModalSelection';
import { isNotValidObjectToAdd } from '../../helpers/gaurds';
import ButtonDeleteX from '../widgets/buttons/ButtonDeleteX';

import { rifles, pistols, smgs, mgs, sniperRifles, shotguns } from '../../data/firearms';

class WeaponsCardSelectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGunStats: false,
      gunStatsToView: undefined,
      // filterGunType: false,
    };
  }

    getGunList = () => {

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

    renderCloseButton = () => (
      <div style={{ marginTop: '2px', marginLeft: '2px' }}>
        <ButtonDeleteX
          id="closeGunStatView"
          onClick={this.handleShowGunStats}
        />
      </div>
    )

    renderWeaponStats = gunObj => (
      <div className="WeaponStatTableContainer" style={{ fontSize: 'medium' }}>
        {this.renderCloseButton()}
        <WeaponsCardWeaponStats
          gunObj={gunObj}
        />
      </div>
    )

    render() {
      const { gunStatsToView, showGunStats } = this.state;
      const { toggleOffWeaponCardViews } = this.props;
      const firearmsArray = [...rifles(), ...pistols(), ...smgs(), ...mgs(), ...sniperRifles(), ...shotguns()];
      const gunObj = gunStatsToView;

      return (
        <div className="equipmentModalContainer">
          {showGunStats
            ? (
              this.renderWeaponStats(gunObj)
            )
            : (
              <WeaponsModalSelection
                firearmsArray={firearmsArray}
                toggleOffWeaponCardViews={toggleOffWeaponCardViews}
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
  toggleOffWeaponCardViews: PropTypes.func,
  gear: gearShape,
};

export default WeaponsCardSelectModal;
