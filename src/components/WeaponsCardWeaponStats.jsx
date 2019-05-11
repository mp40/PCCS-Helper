import React, { Component } from "react";

import WeaponDataRow from './WeaponDataRow'

export class WeaponsCardWeaponStats extends Component {
    
    render() {
        const gunObj = this.props.gunObj

        return (
            <div className="WeaponStatTableContainer">
                <table>
                    
                    <thead>
                        <tr className="WeaponStatHeader">
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
                        {/* first row */}
                        <WeaponDataRow
                        gunObj = {gunObj}
                        dataType = {{name:'Length', short:'L', data:gunObj.length}}
                        index = {0}
                        tag = {['FMJ', 'PEN']}
                        array = {gunObj.projectiles[0].pen}
                        />
                        {/* second row */}
                        <WeaponDataRow
                        gunObj = {gunObj}
                        dataType = {{name:'Weight', short:'W', data:gunObj.weight}}
                        index = {1}
                        tag = {['', 'DC']}
                        array = {gunObj.projectiles[0].dc}
                        />
                        {/* third row */}
                        <WeaponDataRow
                        gunObj = {gunObj}
                        dataType = {{name:'', short:'', data:''}}
                        index = {2}
                        tag = {['', '']}
                        array = {[]}
                        />
                        {/* fourth row */}
                        <WeaponDataRow
                        gunObj = {gunObj}
                        dataType = {{name:'Reload', short:'RT', data:gunObj.rt}}
                        index = {3}
                        tag = {[gunObj.projectiles[1].type, 'PEN']}
                        array = {gunObj.projectiles[1].pen}
                        />
                        {/* fifth row */}
                        <WeaponDataRow
                        gunObj = {gunObj}
                        dataType = {{name:'ROF', short:'ROF', data:gunObj.rof}}
                        index = {4}
                        tag = {['', 'DC']}
                        array = {gunObj.projectiles[1].dc}
                        />
                        {/* sixth row */}
                        <WeaponDataRow
                        gunObj = {gunObj}
                        dataType = {{name:'', short:'', data:''}}
                        index = {5}
                        tag = {['', '']}
                        array = {[]}
                        />
                        {/* seventh row */}
                        <WeaponDataRow
                        gunObj = {gunObj}
                        dataType = {{name:'Capacity', short:'Cap', data:gunObj.mag[0].cap}}
                        index = {6}
                        tag = {[gunObj.projectiles[2].type, 'PEN']}
                        array = {gunObj.projectiles[2].pen}
                        />
                        {/* eighth row */}
                        <WeaponDataRow
                        gunObj = {gunObj}
                        dataType = {{name:'AW', short:'AW', data:gunObj.mag[0].weight}}
                        index = {7}
                        tag = {['', 'DC']}
                        array = {gunObj.projectiles[2].dc}
                        />
                        {/* ninth row */}
                        <WeaponDataRow
                        gunObj = {gunObj}
                        dataType = {{name:'', short:'', data:gunObj.mag[0].type}}
                        index = {8}
                        tag = {['', '']}
                        array = {[]}
                        />
                        {/* tenth row */}
                        <WeaponDataRow
                        gunObj = {gunObj}
                        dataType = {{name:'KnockDown', short:'KD', data:gunObj.kd}}
                        index = {9}
                        tag = {['', 'BA']}
                        array = {gunObj.ba}
                        />
                        {/* eleventh row */}
                        <WeaponDataRow
                        gunObj = {gunObj}
                        dataType = {{name:'SAB', short:'SAB', data:gunObj.sab}}
                        index = {10}
                        tag = {['', 'TOF']}
                        array = {gunObj.tof}
                        />
                    </tbody>

                </table>
            </div>
        )   
    }

}

export default WeaponsCardWeaponStats