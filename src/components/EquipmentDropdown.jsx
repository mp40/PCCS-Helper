import React, { Component } from "react";
import {connect} from 'react-redux';
import{addEquipment} from '../actions'
import './EquipmentDropdown.css'

import {createArrayOfEquipment, filterEquipment, createFilterSet} from '../helpers/equipmentListFunctions.js'

const equipment = require('../helpers/equipmentList')
 
class EquipmentDropdown extends Component {

  
    // handleAddEquip(equipObj){
    //     this.props.addEquipment(this.props, equipObj)
    // }  

  render() {
    console.log("ED", this.props)
    const filteredEquipment = filterEquipment(this.props.filteredTags)
    const equipmentArray = createArrayOfEquipment(filteredEquipment)
    const equipmentTags = createFilterSet(equipment)

    return (
        <div className='equipmentModalContainer'>
            
            <div className="equipmentListCard">
                <div className="equipmentListHeader">
                    Select Equipment
                    <button 
                        id="closeEquipmentModal"
                        className="equipmentButton"
                        onClick={this.props.closeShowEquipment.bind(this)}
                    >
                        Close List
                    </button>
                    <button
                        id="filterEquipmentList"
                        className="equipmentButton"
                        onClick={this.props.toggleFilters.bind(this)}
                    >
                        {this.props.showFilters ?
                        'Apply Filter' :
                        'Filter List'}
                    </button>
                </div>
                {this.props.showFilters ?
                <div className="tagContainer">
                    {equipmentTags.map((tag, index)=>{
                        return <div 
                            className="equipTags" 
                            style={{fontWeight: this.props.filteredTags.includes(tag) ? 
                                'bold' : 
                                null}}
                            onClick={this.props.handleTags.bind(this, tag)}
                            key={index}
                            >{tag}</div>
                    })}
                </div> 
                :
                <div className="equipmentListBody">
                {equipmentArray.map((equipObj, index)=>{
                    return <div className="equipmentEntry"
                            key={index}
                            // onClick={this.handleAddEquip.bind(this, equipObj)}>
                            onClick={()=>this.props.addEquipment(this.props, equipObj)}>
                                <div>
                                    {equipObj.name}
                                </div>
                                <div>
                                    {`${equipObj.weight} lbs`}
                                </div>
                            </div>
                })}  
                </div> 
            }
            </div>
        </div>
    );
  }
}

// export default EquipmentDropdown;
const mapStateToProps = (state) => {
    return ({ 
      currentView: state.currentView,
      totalWeight: state.totalWeight,
      // gear: state.gear
      gear: {
        equipment: state.gear.equipment
      }
     });
  }
  
  export default connect(mapStateToProps, {addEquipment})(EquipmentDropdown)
  