import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';
import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';
import WeaponsModalSelection from '../WeaponsModalSelection';

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
      const { gear, totalWeight, characterStats, modifyFirearmList } = this.props;

      const gunAlreadyInList = gear.firearms.filter(obj => obj.name === gunObj.name).length;

      if (gunAlreadyInList) {
        return;
      }

      const newGunObj = gunObj;
      const newWeight = totalWeight + newGunObj.weight;
      const attributeObj = characterStats;

      const newFirearmsArray = [...gear.firearms, ...[newGunObj]];

      modifyFirearmList(newWeight, newFirearmsArray, attributeObj);
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
  modifyFirearmList: PropTypes.func,
  closeShowFirearms: PropTypes.func,
  totalWeight: PropTypes.number,
  gear: gearShape,
  characterStats: PropTypes.objectOf(PropTypes.number),
};

export default WeaponsCardSelectModal;
