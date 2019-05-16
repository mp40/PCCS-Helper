import React, { Component } from "react";
import WeaponDataRow from './WeaponDataRow'

import {buildArrayForGunTable} from '../helpers/componentHelpers'

import './WeaponsCard.css'

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
            <div style={{marginTop:'1.5rem', marginLeft:'5.5%', fontWeight:'bold'}}>{gunObj.name}</div>
                <table className='WeaponStatTable' style={{border: '1px solid rgb(85, 83, 83)', borderCollapse:'collapse'}}>
                    
                    <thead>
                        <tr className="WeaponStatHeader" >
                            <th style={{width:'5rem',borderBottom}}>Data</th>
                            <th style={{borderBottom}}>Aim Time</th>
                            <th style={{width:'4.8rem', borderBottom}}></th>
                            {rangeBrackets.map((range, index)=>{
                                return <th key={index} style={{textAlign:'center',borderBottom}}>{range}</th>
                            })}
                            {/* <th style={{textAlign:'center',borderBottom}}>10</th>
                            <th style={{textAlign:'center',borderBottom}}>20</th>
                            <th style={{textAlign:'center',borderBottom}}>40</th>
                            <th style={{textAlign:'center',borderBottom}}>70</th>
                            <th style={{textAlign:'center',borderBottom}}>100</th>
                            <th style={{textAlign:'center',borderBottom}}>200</th>
                            <th style={{textAlign:'center',borderBottom}}>300</th>
                            <th style={{textAlign:'center',borderBottom}}>400</th> */}
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
            </div>
        )   
    }

}

export default WeaponsCardWeaponStats