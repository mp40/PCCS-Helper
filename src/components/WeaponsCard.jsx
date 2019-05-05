import React, { Component } from "react";
import { connect } from 'react-redux';

// import { modifyEquipment, updateAttributes } from '../actions';
// import {removeEquipment, removeAllEquipment, incrementEquipmentQty} from '../helpers/actionHelpers'

import './WeaponsCard.css' 

export class WeaponsCard extends Component {
  
    render() {
  
      return (
        <div style={{width:'33%'}} className="WeaponSelect">
            GUNS!!!
        </div>
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return ({ 
      totalWeight: state.totalWeight,
      characterStats: state.characterStats,
      gear: state.gear
     });
  }
  
  
  export default connect(mapStateToProps)(WeaponsCard)