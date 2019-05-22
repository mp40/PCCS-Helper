import React, { Component } from "react";

import ButtonStandard from './buttons/ButtonStandard'
import ButtonInfo from './buttons/ButtonInfo'

class WeaponsModalSelection extends Component {

    render(){
        const firearmsArray = this.props.firearmsArray

        return (
            <div className="equipmentListCard">
                    <div className="equipmentListHeader">
                        Select firearms
                        <ButtonStandard
                            id="closeFirearmModal"
                            name={'Close List'}
                            onClick={this.props.closeShowFirearms.bind(this)}
                        />
                    </div>

                    <div className="equipmentListBody">
                        {firearmsArray.map((gunObj, index)=>{
                        return <div key={index} style={{display:'flex', width:'30%', paddingLeft:'.2rem', paddingRight:'.2rem'}}>
                        <ButtonInfo
                            id={`view${gunObj.name}`}
                            onClick={this.props.handleShowGunStats.bind(this, gunObj)}
                        />
                        <div className="equipmentEntry"
                            style={{width:'100%'}}
                            id={gunObj.name}
                            onClick={this.props.handleAddFirearm.bind(this, gunObj)}
                            >
                                <div>
                                    {gunObj.name}
                                </div>
                                <div>
                                    {`${gunObj.weight} lbs`}
                                </div>
                            </div>
                            </div>
                        })}
                    </div>
                </div>
        )
    }
}

export default WeaponsModalSelection