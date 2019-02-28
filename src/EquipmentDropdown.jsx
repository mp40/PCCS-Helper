import React, { Component } from "react";
import './EquipmentDropdown.css'

const equipment = require('./equipmentList')
const {createArrayOfEquipment} = require('./equipmentListFunctions')
 
class EquipmentDropdown extends Component {

    equipmentArray = createArrayOfEquipment(equipment)

  render() {
    return (
        <div className='equipmentModalContainer'>
            
            <div className="equipmentListCard">
                <div className="equipmentListHeader">Select Equipment</div>
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
             
            </div>
        </div>
    );
  }
}

export default EquipmentDropdown;