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
                    </tbody>

                </table>
            </div>
        )   
    }

}

export default WeaponsCardWeaponStats