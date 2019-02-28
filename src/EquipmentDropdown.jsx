import React, { Component } from "react";
import './EquipmentDropdown.css'

const equipment = require('./equipmentList')
const {createArrayOfEquipment} = require('./equipmentListFunctions')
 
class EquipmentDropdown extends Component {

    equipmentArray = createArrayOfEquipment(equipment)

  render() {
    return (
        <div className="equipmentListCard">
            {this.equipmentArray.map((equipObj, index)=>{
                return <div key={index}>
                    {`${equipObj.name} ${equipObj.weight} lbs`}
                    </div>
            })}   
        </div>
    );
  }
}

export default EquipmentDropdown;