import React, { Component } from "react";

import './WeaponsCard.css'

class WeaponsCardCustomMag extends Component {
    constructor(props){
        super(props)
        this.state = {
            capacity: '',
            weight: '',
            type: ''
        }
    }

    handleCapacity(event){
        const newCapacity = Number(event.target.value)
        this.setState({capacity: newCapacity})
    }

    handleWeight(event){
        const newWeight = Number(event.target.value)
        this.setState({weight: newWeight})
    }


    render() {

        return (
            <div className="customMagazineForm">
                <div>Custom Magazine Details</div>
                <div style={{display:'flex'}} >
                    <div>Capacity</div>
                    <input
                        type="text"
                        autoComplete="off"
                        id='customMagCapacityInput'
                        value={this.state.capacity}
                        onChange={this.handleCapacity.bind(this)}
                    /> 
                </div>
                <div style={{display:'flex'}} >
                    <div>Weight</div>
                    <input
                        type="text"
                        autoComplete="off"
                        id='customMagWeightInput'
                        value={this.state.weight}
                        onChange={this.handleWeight.bind(this)}
                    />
                </div>
            </div>
        )   
    }

}

export default WeaponsCardCustomMag