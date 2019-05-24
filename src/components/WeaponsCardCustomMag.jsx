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
        this.handleAddCustomMag = this.props.handleAddCustomMag
    }

    handleCapacity(event){
        const newCapacity = Number(event.target.value)
        this.setState({capacity: newCapacity})
    }

    handleWeight(event){
        const newWeight = Number(event.target.value)
        this.setState({weight: newWeight})
    }

    handleType(event){
        this.setState({type: event.target.value})
    }

    handleSubmit(){
        console.log('hi')
        const newCustomMag = {
            type: this.state.type, 
            weight: this.state.weight,
            cap: this.state.capacity,
            qty: 0,
            custom: true
        }
        console.log(this.props)
        this.handleAddCustomMag(newCustomMag)
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
                <div style={{display:'flex'}} >
                    <div>Type</div>
                    <input
                        type="text"
                        autoComplete="off"
                        id='customMagTypeInput'
                        value={this.state.type}
                        onChange={this.handleType.bind(this)}
                    />
                </div>
                <button
                    id="submitCustomMag"
                    onClick={this.handleSubmit.bind(this)}
                >
                    Submit
                </button>
            </div>
        )   
    }

}

export default WeaponsCardCustomMag