import React, { Component } from "react";

import ButtonStandard from './buttons/ButtonStandard'

class WeaponsModalSelection extends Component {

    render(){
        const firearmsArray = this.props.firearmsArray
        // const closeShowFirearms = this.props.closeShowFirearms.bind(this)

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
                        <button
                            id={`view${gunObj.name}`}
                            onClick={this.props.handleShowGunStats.bind(this, gunObj)}
                        >
                            i
                        </button>
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