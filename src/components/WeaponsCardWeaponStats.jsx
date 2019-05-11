import React, { Component } from "react";

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
                        <tr id="GunTableLineOne">
                            <td id="WeaponStatLength">
                                <span>L</span>
                                <span>{gunObj.length}</span>
                            </td>
                            <td>
                                <span>{gunObj.aim.ac[0]}</span>
                                <span>{gunObj.aim.mod[0]}</span>
                            </td>
                            <td>
                                <span>{gunObj.projectiles[0].type}</span>
                                <span>PEN</span>
                            </td>
                            {gunObj.projectiles[0].pen.map((penData, index)=>{
                                return penData.toString().length === 1 ?
                                <td key={index}>{penData.toFixed(1)}</td> :
                                <td key={index}>{penData}</td>
                            })}
                        </tr>
                        {/* second row */}
                        <tr id="GunTableLineTwo">
                            <td id="WeaponStatWeight">
                                <span>W</span>
                                <span>{gunObj.weight}</span>
                            </td>
                            <td>
                                <span>{gunObj.aim.ac[1]}</span>
                                <span>{gunObj.aim.mod[1]}</span>
                            </td>
                            <td>
                                <span>DC</span>
                            </td>
                            {gunObj.projectiles[0].dc.map((dcData, index)=>{
                                return <td key={index}>{dcData}</td>
                            })}
                        </tr>
                        {/* third row */}
                        <tr id="GunTableLineThree">
                            <td></td>
                            <td>
                                <span>{gunObj.aim.ac[2]}</span>
                                <span>{gunObj.aim.mod[2]}</span>
                            </td>
                        </tr>
                        {/* fourth row */}
                        <tr id="GunTableLineFour">
                            <td id="WeaponStatReload">
                                <span>RT</span>
                                <span>{gunObj.rt}</span>
                            </td>
                            <td>
                                <span>{gunObj.aim.ac[3]}</span>
                                <span>{gunObj.aim.mod[3]}</span>
                            </td>
                            <td>
                                <span>{gunObj.projectiles[1].type}</span>
                                <span>PEN</span>
                            </td>
                            {gunObj.projectiles[1].pen.map((penData, index)=>{
                                return penData.toString().length === 1 ?
                                <td key={index}>{penData.toFixed(1)}</td> :
                                <td key={index}>{penData}</td>
                            })}
                        </tr>
                        {/* fifth row */}
                        <tr id="GunTableLineFive">
                            <td id="WeaponStatROF">
                                <span>ROF</span>
                                <span>{gunObj.rof}</span>
                            </td>
                            <td>
                                <span>{gunObj.aim.ac[4]}</span>
                                <span>{gunObj.aim.mod[4]}</span>
                            </td>
                            <td>
                                <span>DC</span>
                            </td>
                            {gunObj.projectiles[1].dc.map((dcData, index)=>{
                                return <td key={index}>{dcData}</td>
                            })}
                        </tr>
                        {/* sixth row */}
                        <tr id="GunTableLineSix">
                            <td></td>
                            <td>
                                <span>{gunObj.aim.ac[5]}</span>
                                <span>{gunObj.aim.mod[5]}</span>
                            </td>
                        </tr>
                        {/* seventh row */}
                        <tr id="GunTableLineSeven">
                            <td id="WeaponStatCapacity">
                                <span>Cap</span>
                                <span>{gunObj.mag[0].cap}</span>
                            </td>
                            <td>
                                <span>{gunObj.aim.ac[6]}</span>
                                <span>{gunObj.aim.mod[6]}</span>
                            </td>
                            <td>
                                <span>{gunObj.projectiles[2].type}</span>
                                <span>PEN</span>
                            </td>
                            {gunObj.projectiles[2].pen.map((penData, index)=>{
                                return penData.toString().length === 1 ?
                                <td key={index}>{penData.toFixed(1)}</td> :
                                <td key={index}>{penData}</td>
                            })}
                        </tr>
                        {/* eighth row */}
                        <tr id="GunTableLineEight">
                            <td id="WeaponStatAW">
                                <span>AW</span>
                                <span>{gunObj.mag[0].weight}</span>
                            </td>
                            <td>
                                <span>{gunObj.aim.ac[7]}</span>
                                <span>{gunObj.aim.mod[7]}</span>
                            </td>
                            <td>
                                <span>DC</span>
                            </td>
                            {gunObj.projectiles[2].dc.map((dcData, index)=>{
                                return <td key={index}>{dcData}</td>
                            })}
                        </tr>
                        {/* ninth row */}
                        <tr id="GunTableLineNine">
                            <td>
                                <span>{gunObj.mag[0].type}</span>
                            </td>
                            <td>
                                <span>{gunObj.aim.ac[8]}</span>
                                <span>{gunObj.aim.mod[8]}</span>
                            </td>
                        </tr>
                        {/* tenth row */}
                        <tr id="GunTableLineTen">
                            <td id="WeaponStatKnockDown">
                                <span>KD</span>
                                <span>{gunObj.kd}</span>
                            </td>
                            <td>
                                <span>{gunObj.aim.ac[9]}</span>
                                <span>{gunObj.aim.mod[9]}</span>
                            </td>
                            <td>
                                <span>BA</span>
                            </td>
                            {gunObj.ba.map((dcData, index)=>{
                                return <td key={index}>{dcData}</td>
                            })}
                        </tr>
                        {/* eleventh row */}
                        <tr id="GunTableLineEleven">
                            <td id="WeaponStatSAB">
                                <span>SAB</span>
                                <span>{gunObj.sab}</span>
                            </td>
                            <td>
                                <span>{gunObj.aim.ac[10]}</span>
                                <span>{gunObj.aim.mod[10]}</span>
                            </td>
                            <td>
                                <span>TOF</span>
                            </td>
                            {gunObj.tof.map((dcData, index)=>{
                                return <td key={index}>{dcData}</td>
                            })}
                        </tr>
                    </tbody>

                </table>
            </div>
        )   
    }

}

export default WeaponsCardWeaponStats