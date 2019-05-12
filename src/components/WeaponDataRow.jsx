import React, { Component } from "react";

export class WeaponsDataRow extends Component {
    
    render() {
        const tableLine = this.props.tableLine
        
        return (
            <tr id={`GunTableLine${this.props.index}`}>
                <td id={`WeaponStat${tableLine.dataType.name}`}>
                    <span>{tableLine.dataType.short}</span>
                    <span>{tableLine.dataType.data}</span>
                </td>
                <td>
                    <span>{tableLine.aim[0]}</span>
                    <span>{tableLine.aim[1]}</span>
                </td>
                <td>
                    <span>{tableLine.tag[0]}</span>
                    <span>{tableLine.tag[1]}</span>
                </td>
                {tableLine.array.map((data, index)=>{
                    if(tableLine.tag[1] === 'PEN'){
                        data = data.toFixed(1)
                    }
                    return <td key={index}>{data}</td>
                })}
            </tr>
        )
    }
}

export default WeaponsDataRow
