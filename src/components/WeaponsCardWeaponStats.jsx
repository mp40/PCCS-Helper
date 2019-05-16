import React, { Component } from "react";
import WeaponDataRow from './WeaponDataRow'

import {buildArrayForGunTable} from '../helpers/componentHelpers'

import './WeaponsCard.css'

class WeaponsCardWeaponStats extends Component {
    
    render() {
        const gunObj = this.props.gunObj
        const gunTableArray = buildArrayForGunTable(gunObj)
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
                            <th style={{textAlign:'center',borderBottom}}>10</th>
                            <th style={{textAlign:'center',borderBottom}}>20</th>
                            <th style={{textAlign:'center',borderBottom}}>40</th>
                            <th style={{textAlign:'center',borderBottom}}>70</th>
                            <th style={{textAlign:'center',borderBottom}}>100</th>
                            <th style={{textAlign:'center',borderBottom}}>200</th>
                            <th style={{textAlign:'center',borderBottom}}>300</th>
                            <th style={{textAlign:'center',borderBottom}}>400</th>
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