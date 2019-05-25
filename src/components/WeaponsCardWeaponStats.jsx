import React, { Component } from "react";
import WeaponDataRow from './WeaponDataRow'
import ButtonDeleteX from './buttons/ButtonDeleteX'

import {buildArrayForGunTable} from '../helpers/componentHelpers'

import './WeaponsCard.css'
import WeaponsCardModifyWeapon from "./WeaponsCardModifyFirearm";

class WeaponsCardWeaponStats extends Component {

    getRangeBrackets = (gunObj) => {
        const standard = [10,20,40,70,100,200,300,400];
        const shotgun = [1,2,4,6,8,10,15,20,30,40,80];
        if(!gunObj.projectiles[1]){
            return standard
        }
        return gunObj.projectiles[1].type.includes('Shot') ? shotgun : standard
    }
    
    render() {
        const gunObj = this.props.gunObj
        const gunTableArray = buildArrayForGunTable(gunObj)
        const rangeBrackets = this.getRangeBrackets(gunObj)
        const borderBottom = '1px solid rgb(85, 83, 83)'

        return (
            <div className="WeaponStatTableContainer" style={{fontSize:'medium'}}>
                <div style={{marginTop:"2px", marginLeft: "2px"}}>
                    <ButtonDeleteX
                        id="closeGunStatView"
                        onClick={this.props.handleShowGunStats}
                    />
                </div>

                <div style={{marginTop:'0.5rem', marginLeft:'5.5%', fontWeight:'bold'}}>{gunObj.name}</div>
                
                <div style={{display:'flex'}}>
                <table className='WeaponStatTable' style={{border: '1px solid rgb(85, 83, 83)', borderCollapse:'collapse'}}>
                    
                    <thead>
                        <tr className="WeaponStatHeader" >
                            <th style={{width:'5rem',borderBottom}}>Data</th>
                            <th style={{borderBottom}}>Aim Time</th>
                            <th style={{width:'4.8rem', borderBottom}}></th>
                            {rangeBrackets.map((range, index)=>{
                                return <th key={index} style={{textAlign:'center',borderBottom}}>{range}</th>
                            })}
                        </tr>
                    </thead>

                    <tbody>

                        {gunTableArray.map((tableLine, index)=>{
                            return <WeaponDataRow 
                                key={index} 
                                tableLine={tableLine} 
                                index={index}/>
                        })}

                    </tbody>

                </table>

                {this.props.modifyFirearm ? 
                    <WeaponsCardModifyWeapon
                        gunObj={this.props.gunObj}
                        createCustomMag={this.props.createCustomMag}
                        modifyFirearmWeight={this.props.modifyFirearmWeight}
                        handleModifyFirearm={this.props.handleModifyFirearm.bind(this)}
                        toggleCreateCustomMag={this.props.toggleCreateCustomMag.bind(this)}
                        handleAddCustomMag={this.props.handleAddCustomMag.bind(this)}
                        toggleModifyFirearmWeight={this.props.toggleModifyFirearmWeight.bind(this)}
                        handleModifyFirearmWeight={this.props.handleModifyFirearmWeight.bind(this)}
                    /> :    
                    null}     
                </div>
            </div>
        )   
    }

}

export default WeaponsCardWeaponStats