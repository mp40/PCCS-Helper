import React, { Component } from "react";
import { connect } from 'react-redux';
import { modifyFirearmList } from '../actions'

import {rifles, pistols, smgs, mgs, sniperRifles, shotguns} from '../helpers/firearms';

class FirearmsSelectModal extends Component {

    //TODO refactor below method 
    handleAddFirearm = (gunObj) => {
        const newWeight = this.props.totalWeight + gunObj.weight;
        const attributeObj = this.props.characterStats;
        gunObj.qty = 1
        gunObj.mag.map((magObj)=>{
            magObj.qty = 0
            return magObj
        })
        const newFirearmsArray = [...this.props.gear.firearms, ...[gunObj]]

        this.props.modifyFirearmList(newWeight, newFirearmsArray, attributeObj)
    }

    render(){
        const firearmsArray = [...rifles, ...pistols, ...smgs, ...mgs, ...sniperRifles, ...shotguns]
        return (
            <div className='equipmentModalContainer'>
                <div className="equipmentListCard">
                    <div className="equipmentListHeader">
                        Select firearms
                        <button 
                            id="closeFirearmModal"
                            className="equipmentButton"
                            onClick={this.props.closeShowFirearms.bind(this)}
                        >
                            Close List
                        </button>
                    </div>

                    <div className="equipmentListBody">
                        {firearmsArray.map((gunObj, index)=>{
                        return <div className="equipmentEntry"
                            key={index}
                            id={gunObj.name}
                            onClick={this.handleAddFirearm.bind(this, gunObj)}
                            >
                                <div>
                                    {gunObj.name}
                                </div>
                                <div>
                                    {`${gunObj.weight} lbs`}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({ 
        totalWeight: state.totalWeight,
        characterStats: state.characterStats,
        gear: state.gear
       });
}

export default connect(mapStateToProps,{modifyFirearmList})(FirearmsSelectModal)