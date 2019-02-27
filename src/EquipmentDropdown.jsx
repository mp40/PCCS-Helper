import React, { Component } from "react";
import './EquipmentDropdown.css'

const {equipment} = require('./equipmentList')
 
class EquipmentDropdown extends Component {



  render() {
    return (
        <div className="equipmentListCard">
            Equipment List Goes Here
            {/* {Object.keys(equipment).map((objKey, index)=>{
                return <div key={index}>
                        {equipment[objKey]}
                    </div>
            })} */}
        </div>
    );
  }
}

export default EquipmentDropdown;