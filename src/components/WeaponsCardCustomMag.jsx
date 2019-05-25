import React, { Component } from "react";
import ButtonStandard from './buttons/ButtonStandard'
import './WeaponsCard.css'

class WeaponsCardCustomMag extends Component {
    constructor(props){
        super(props)
        this.state = {
            capacity: '',
            weight: '',
            type: '',
            warning: false
        }
        this.handleAddCustomMag = this.props.handleAddCustomMag
    }

    handleCapacity(event){
        this.setState({capacity: event.target.value})
    }

    handleWeight(event){
        this.setState({weight: event.target.value})
    }

    handleType(event){
        this.setState({type: event.target.value})
    }

    handleSubmit(){
        if(!Number(this.state.weight)){
            this.setState({warning: true})
            return
        }
        if(!Number(this.state.capacity) || this.state.capacity % 1 !== 0){
            this.setState({warning: true})
            return
        }
        if(this.state.type.length < 2){
            this.setState({warning: true})
            return
        }

        const newCustomMag = {
            type: this.state.type, 
            weight: Number(this.state.weight),
            cap: Number(this.state.capacity),
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
                {this.state.warning ?
                    <div style={{color:'red', fontWeight:'bold'}}>Please Enter Valid Data</div> :
                    null}
            </div>
        )   
    }

}

export default WeaponsCardCustomMag