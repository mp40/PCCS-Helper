import React, { Component } from "react";

import './WeaponsCard.css'
import WeaponsCardCustomMag from "./WeaponsCardCustomMag";

class WeaponsCardModifyWeapon extends Component {

    setPrimaryMag(index){
        const newGunObj = this.props.gunObj
        newGunObj.weight -= newGunObj.mag[0].weight
        newGunObj.weight += newGunObj.mag[index].weight
        const newPrimary = this.props.gunObj.mag.splice(index,1)
        newGunObj.mag.unshift(newPrimary[0])

        this.props.handleModifyFirearm(newGunObj)
    }

    render() {
        const gunObj = this.props.gunObj

        if(!this.props.createCustomMag){
            return (
                <div style={{marginLeft:'5rem'}} className="modifyWeaponPanel">
                    <div>Modify Weapon</div>
    
                    <div className='modifyMagazines'>
                        <div style={{display:'flex'}}>
                            <div>Magazines</div>
                            <button id='addCustomMagazine' onClick={this.props.toggleCreateCustomMag.bind(this)}>+</button>
                        </div>
                        {gunObj.mag.map((magObj, index)=>{
                            return <div  key={index}>
                                {`${magObj.cap} round ${magObj.type}`}
                                {`${magObj.weight} lbs`}
                                {index > 0 ? 
                                    <button id={`${gunObj.name}MagAtIndex${index}`} onClick={this.setPrimaryMag.bind(this,index)} style = {{opacity: '0.6'}}>primary</button> :
                                    <button id={`${gunObj.name}MagAtIndex${index}`}>primary</button>
                                }
                            </div>
                        })}
                    </div>
                </div>
            )  
        }
        if(this.props.createCustomMag){
            return (
                <div style={{marginLeft:'5rem'}}>
                    <WeaponsCardCustomMag
                        handleAddCustomMag={this.props.handleAddCustomMag.bind(this)}
                    />
                </div>
            )
        }
    }
}

export default WeaponsCardModifyWeapon
