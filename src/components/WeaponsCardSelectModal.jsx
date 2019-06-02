import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WeaponsCardWeaponStats from './WeaponsCardWeaponStats';
import WeaponsModalSelection from './WeaponsModalSelection';
import { modifyFirearmList } from '../actions';

import { rifles, pistols, smgs, mgs, sniperRifles, shotguns } from '../helpers/firearms';

class WeaponsCardSelectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGunStats: false,
      gunStatsToView: undefined,
    };
    this.handleAddFirearm = this.handleAddFirearm.bind(this);
    this.handleShowGunStats = this.handleShowGunStats.bind(this);
  }

    handleAddFirearm = (gunObj) => {
      const { gear, totalWeight, characterStats } = this.props;

      const gunAlreadyInList = gear.firearms.filter(obj => obj.name === gunObj.name).length;

      if (gunAlreadyInList) {
        return;
      }

      const newGunObj = gunObj;
      const newWeight = totalWeight + newGunObj.weight;
      const attributeObj = characterStats;
      newGunObj.qty = 1;

      const newFirearmsArray = [...gear.firearms, ...[newGunObj]];

      this.props.modifyFirearmList(newWeight, newFirearmsArray, attributeObj);
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
  closeShowFirearms: PropTypes.func,
  totalWeight: PropTypes.number,
  gear: PropTypes.shape({
    uniform: PropTypes.string,
    equipment: PropTypes.arrayOf(PropTypes.object),
    firearms: PropTypes.arrayOf(PropTypes.object),
  }),
  characterStats: PropTypes.objectOf(PropTypes.number),
};

const mapStateToProps = state => ({
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: state.gear,
});

export default connect(mapStateToProps, { modifyFirearmList })(WeaponsCardSelectModal);
