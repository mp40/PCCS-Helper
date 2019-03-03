import React, { Component } from "react";
import './EquipmentDropdown.css'

import {createArrayOfEquipment, filterEquipment, createFilterSet} from './equipmentListFunctions.js'

const equipment = require('./equipmentList')
 
class EquipmentDropdown extends Component {

    filteredEquipment = filterEquipment(this.props.requiredEquipment)
    equipmentArray = createArrayOfEquipment(this.filteredEquipment)
    equipmentTags = createFilterSet(equipment)

  render() {
    return (
        <div className='equipmentModalContainer'>
            
            <div className="equipmentListCard">
                <div className="equipmentListHeader">
                    Select Equipment
                    <button 
                        id="closeEquipmentModal"
                        onClick={this.props.closeShowEquipment.bind(this)}
                    >
                        Close List
                    </button>
                    <button
                        id="filterEquipmentList"
                        onClick={this.props.toggleFilters.bind(this)}
                    >
                        Filter List
                    </button>
                </div>
                {this.props.showFilters ?

                // <div className="equipmentListBody">
                // {this.equipmentArray.map((equipObj, index)=>{
                //     return <div className="equipmentEntry" key={index}>
                //         <div>
                //             {equipObj.name}
                //         </div>
                //         <div>
                //             {`${equipObj.weight} lbs`}
                //         </div>
                //     </div>
                // })}  
                // </div> 
                <div>
                    {this.equipmentTags.map((tag, index)=>{
                        return <div key={index}>{tag}</div>
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

                // <div>Test for Filters ALICE</div> 
            }
            </div>
        </div>
    );
  }
}

export default EquipmentDropdown;