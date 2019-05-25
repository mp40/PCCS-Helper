import React, { Component } from "react";
import ButtonStandard from './buttons/ButtonStandard'
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
        const newCustomMag = {
            type: this.state.type, 
            weight: this.state.weight,
            cap: this.state.capacity,
            qty: 0,
            custom: true
        }
        this.handleAddCustomMag(newCustomMag)
    }


    render() {

        return (
            <div className="customMagazineForm">
                <div>Custom Magazine Details</div>
                <div style={{display:'flex', width:"100%", justifyContent: "space-between"}} >
                    <div style={{width:'50%'}}>Capacity</div>
                    <input
                        style={{width:'30%'}}
                        type="text"
                        autoComplete="off"
                        id='customMagCapacityInput'
                        value={this.state.capacity}
                        onChange={this.handleCapacity.bind(this)}
                    /> 
                </div>
                <div style={{display:'flex', width:"100%", justifyContent: "space-between"}} >
                    <div>Weight</div>
                    <input
                        style={{width:'30%'}}
                        type="text"
                        autoComplete="off"
                        id='customMagWeightInput'
                        value={this.state.weight}
                        onChange={this.handleWeight.bind(this)}
                    />
                </div>
                <div style={{display:'flex', width:"100%", justifyContent: "space-between"}} >
                    <div>Type</div>
                    <input
                        style={{width:'30%'}}
                        type="text"
                        autoComplete="off"
                        id='customMagTypeInput'
                        value={this.state.type}
                        onChange={this.handleType.bind(this)}
                    />
                </div>
                <ButtonStandard
                    name='Submit'
                    id="submitCustomMag"
                    onClick={this.handleSubmit.bind(this)}
                />
            </div>
        )   
    }

}

export default WeaponsCardCustomMag