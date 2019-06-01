import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  }

    handleAddFirearm = (gunObj) => {
      const gunAlreadyInList = this.props.gear.firearms.filter(obj => obj.name === gunObj.name).length;

      if (gunAlreadyInList) {
        return;
      }

      const newWeight = this.props.totalWeight + gunObj.weight;
      const attributeObj = this.props.characterStats;
      gunObj.qty = 1;

      const newFirearmsArray = [...this.props.gear.firearms, ...[gunObj]];

      this.props.modifyFirearmList(newWeight, newFirearmsArray, attributeObj);
    }

    handleShowGunStats = (gunObj) => {
      this.setState({ showGunStats: !this.state.showGunStats, gunStatsToView: gunObj });
    }

    render() {
      const firearmsArray = [...rifles(), ...pistols(), ...smgs(), ...mgs(), ...sniperRifles(), ...shotguns()];
      const gunObj = this.state.gunStatsToView;

      return (
        <div className="equipmentModalContainer">
          {this.state.showGunStats
            ? (
              <WeaponsCardWeaponStats
                gunObj={gunObj}
                handleShowGunStats={this.handleShowGunStats.bind(this)}
              />
            )
            : (
              <WeaponsModalSelection
                firearmsArray={firearmsArray}
                closeShowFirearms={this.props.closeShowFirearms.bind(this)}
                handleAddFirearm={this.handleAddFirearm.bind(this)}
                handleShowGunStats={this.handleShowGunStats.bind(this)}
              />
            )
            }
        </div>
      );
    }
}

const mapStateToProps = state => ({
  totalWeight: state.totalWeight,
  characterStats: state.characterStats,
  gear: state.gear,
});

export default connect(mapStateToProps, { modifyFirearmList })(WeaponsCardSelectModal);
