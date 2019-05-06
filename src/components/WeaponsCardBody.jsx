import React, { Component } from "react";
import WeaponsCardAmmo from './WeaponsCardAmmo'

export class WeaponsCardBody extends Component {

    render() {
        return (
            <div id="characterWeaponList">
                {this.props.selectedGuns.map((gunObj, index)=>{
                    return <div key={index}>
                      <div className="addedEqipRow" id='weaponsBody'>
                        <span style={{width:'65%'}}>
                          <button
                            id="removeGun" 
                            className="equipmentButton"
                            onClick={this.props.handleRemoveGun.bind(this, gunObj)}
                            >
                              X
                            </button>
                          {gunObj.name}
                        </span>

                        <div id="weaponsBodyStats" style={{width:'100%'}}>
                            <span style={{width:'25%', paddingTop:'6px', paddingBottom:'6px'}}>{gunObj.weight}</span>
                            <span style={{width:'25%', paddingTop:'6px', paddingBottom:'6px'}}>{gunObj.qty}</span>
                            <span style={{width:'25%', paddingTop:'6px', paddingBottom:'6px'}}>{Math.round((gunObj.qty * gunObj.weight)*100)/100}</span>
                            <span className="arrowBox" id="gunArrowBox" style={{width:'25%', paddingTop:'6px', paddingBottom:'6px'}}>
                                <span style={{paddingLeft:'6px'}}/>
                                <button 
                                    id="qtyUpGun"
                                    className="equipmentButton"
                                    onClick={this.props.handleIncrementGunQty.bind(this,gunObj,1)}
                                >
                                    {String.fromCharCode(8593)}
                                </button>
                                <span style={{paddingLeft:'6px'}}/>
                                <button 
                                    id="qtyDownGun" 
                                    className="equipmentButton"
                                    onClick={this.props.handleIncrementGunQty.bind(this,gunObj,-1)}
                                >
                                    {String.fromCharCode(8595)}
                                </button>
                            </span>
                        </div>

                    </div>
                    <WeaponsCardAmmo
                        gunObj={gunObj}
                    />
                </div>
            })}
            </div>
        )   
    }

}

export default WeaponsCardBody