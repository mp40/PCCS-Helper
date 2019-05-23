import React, { Component } from "react";

import './WeaponsCard.css'

class WeaponsCardModifyWeapon extends Component {

    setPrimaryMag(index){
        const newGunObj = this.props.gunObj
        const newPrimary = this.props.gunObj.mag.splice(index,1)
        newGunObj.mag.unshift(newPrimary[0])

        this.props.handleModifyFirearm(newGunObj)
    }

    render() {
        const gunObj = this.props.gunObj

        return (
            <div style={{marginLeft:'5rem'}} className="modifyWeaponPanel">
                <div>Modify Weapon</div>

                <div className='modifyMagazines'>
                    <div>Magazines</div>
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

}

export default WeaponsCardModifyWeapon