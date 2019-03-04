import React, { Component } from "react";
import './EquipmentDropdown.css'

import {createArrayOfEquipment, filterEquipment, createFilterSet} from './equipmentListFunctions.js'

const equipment = require('./equipmentList')
 
class EquipmentDropdown extends Component {
    constructor(props){
        super(props)
        this.state = {
            filterTags: []
        }
    }

    filteredEquipment = filterEquipment(this.props.requiredEquipment)
    equipmentArray = createArrayOfEquipment(this.filteredEquipment)
    equipmentTags = createFilterSet(equipment)
    // filteredTags = 

    filterTags(tag) {
        const tags = this.state.filterTags
        tags.push(tag)
        this.setState({filterTags: tags})
    }

  render() {
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
                        Filter List
                    </button>
                </div>
                {this.props.showFilters ?
                <div className="tagContainer">
                    {this.equipmentTags.map((tag, index)=>{
                        return <div 
                            className="equipTags" 
                            onclick={this.filterTags.bind(this, tag)}
                            key={index}
                            >{tag}</div>
                    })}
                </div> 
                :
                <div className="equipmentListBody">
                {this.equipmentArray.map((equipObj, index)=>{
                    return <div className="equipmentEntry" key={index}>
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

export default EquipmentDropdown;