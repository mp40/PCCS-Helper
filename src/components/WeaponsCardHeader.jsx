import React, { Component } from "react";

export class WeaponsCardHeader extends Component {

    render() {
        return (
            <div style={{width:'100%'}} className="equipmentTable">
                <div>
                  <div className="equipmentHeader" id='weaponsHeader'>
                    <span style={{marginLeft:'1rem', width:'60%'}}>Weapons</span>
                    <div id="weaponsHeaderStats" style={{width:'100%'}}>
                        <span style={{width:'25%'}}>Weight</span>
                        <span style={{width:'25%'}}>Qty</span>
                        <span style={{width:'25%'}}>lbs</span>
                        <span style={{width:'25%'}}>{this.props.weaponsWeight}</span>
                    </div>
                  </div>
                </div>
                <div className="addEquipment">
                    <div>
                        <button 
                            id="addFirearm" 
                            className="equipmentButton" 
                            onClick={this.props.toggleShowFirearms.bind(this)}
                        >
                            Add Firearm
                        </button>
                        <button
                            id="clearAllFirearms"
                            className="equipmentButton"
                            // onClick={this.props.handleRemoveAllEquipment.bind(this)}
                        >
                            Clear All
                        </button>
                    </div>
                </div>
        </div>
        )
    }

}

export default WeaponsCardHeader