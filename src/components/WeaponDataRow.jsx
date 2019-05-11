import React, { Component } from "react";

export class WeaponsDataRow extends Component {
    
    render() {
        const gunObj = this.props.gunObj
        const dataType = this.props.dataType
        const index = this.props.index
        const tag = this.props.tag
        const array = this.props.array

        return (
            <tr id={`GunTableLine${index}`}>
                <td id={`WeaponStat${dataType.name}`}>
                    <span>{dataType.short}</span>
                    <span>{dataType.data}</span>
                </td>
                <td>
                    <span>{gunObj.aim.ac[index]}</span>
                    <span>{gunObj.aim.mod[index]}</span>
                </td>
                <td>
                    <span>{tag[0]}</span>
                    <span>{tag[1]}</span>
                </td>
                {array.map((data, index)=>{
                    if(tag[1] === 'PEN'){
                        data = data.toFixed(1)
                    }
                    return <td key={index}>{data}</td>
                })}
            </tr>
        )
    }
}

export default WeaponsDataRow
