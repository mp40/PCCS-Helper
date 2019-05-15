import React, { Component } from "react";

import WeaponDataRow from './WeaponDataRow'

import {buildArrayForGunTable} from '../helpers/componentHelpers'

class WeaponsCardWeaponStats extends Component {
    
    render() {
        const gunObj = this.props.gunObj
        const gunTableArray = buildArrayForGunTable(gunObj)

        return (
            <div className="equipmentListCard" style={{fontSize:'medium'}}>
                <table>
                    
                    <thead>
                        <tr className="equipmentListHeader">
                            <th>{gunObj.name}</th>
                            <th>Aim Time</th>
                            <th></th>
                            <th>10</th>
                            <th>20</th>
                            <th>40</th>
                            <th>70</th>
                            <th>100</th>
                            <th>200</th>
                            <th>300</th>
                            <th>400</th>
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