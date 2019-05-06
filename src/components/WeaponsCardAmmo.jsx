import React, { Component } from "react";

export class WeaponsCardAmmo extends Component {

    render() {
        return (
            <div>
                <div className="additionalAmmoTag">
                    additional ammo
                </div>

                {this.props.gunObj.mag.map((magObj, index)=>{
                    return <div key={index} className="spareMags">
                                <span>{magObj.qty} x </span>
                                {magObj.type !== 'Rnd' ?
                                <span>{magObj.cap} round {magObj.type}</span> :
                                <span>single rounds</span>
                                }
                                <span> ({magObj.weight}) lbs </span>
                                <button 
                                id="qtyUpMag"
                                className="equipmentButton"
                                // onClick={this.handleIncrementGunQty.bind(this,gunObj,1)}
                                >
                                  {String.fromCharCode(8593)}
                                </button>
                                <button 
                                id="qtyDownMag" 
                                className="equipmentButton"
                                // onClick={this.handleIncrementGunQty.bind(this,gunObj,-1)}
                                >
                                  {String.fromCharCode(8595)}
                                </button>
                            </div>
                 })}
            </div>
        )   
    }

}

export default WeaponsCardAmmo