import React, { Component } from "react";

import './CustomEquipmentModal.css'

class CustomEquipmentModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            equipmentName: '',
            equipmentWeight: '',
            errorMsg: false
        }
    }

    handleChange(keyToChange, event){
        if(keyToChange === 'name') {
            this.setState({equipmentName: event.target.value})            
        }
        if(keyToChange === 'weight') {
            this.setState({equipmentWeight: event.target.value})            
        }
    }

    submitEquipment(){
        const name = this.state.equipmentName
        const weight = this.state.equipmentWeight * 1

        const isValidInput = (
            name.length > 0 && 
            weight > 0 && 
            typeof name === 'string' && 
            typeof weight === 'number'
            )

        if (isValidInput === false) {
            this.setState({errorMsg: true})
            return
        }

        const equipObj = {
            name: name,
            weight: weight,
            tags: ['Custom']
        }

        this.props.addEquipment(equipObj)

        this.props.toggleCustomEquipment()
    }

  render() {

    return (
        <div className='customEquipmentModalContainer'>
            <div className="customEquipmentListCard">
                <div className="customContainer">

                    <div className="subContainer">
                        <div className="customEquipmentListHeader">
                            Add Equipment To List
                        </div> 
                        <button 
                            className="equipmentButton" 
                            style={{marginTop: '.5rem'}}
                            onClick={this.props.toggleCustomEquipment.bind(this)}
                            >
                            Cancel
                        </button>
                    </div>

                    <div className="subContainer">
                        <div>Equipment Name</div>
                        <input 
                            type="text"
                            id='equipNameInput' 
                            className="equipInput" 
                            value={this.state.equipmentName} 
                            onChange={this.handleChange.bind(this, 'name')}/>
                    </div>
                    
                    <div className="subContainer">
                        <div>Equipment Weight (lbs)</div>
                        <input 
                            type="text"
                            id='equipWeightInput' 
                            className="equipInput" 
                            value={this.state.equipmentWeight} 
                            onChange={this.handleChange.bind(this, 'weight')}/>
                    </div>

                    <button
                        id='submitCustomEquipButton'
                        className="equipmentButton" 
                        onClick={this.submitEquipment.bind(this)}>
                        Submit
                    </button>
                    
                    {this.state.errorMsg ?
                    <div style={{color:'red'}}>Please Enter Valid Equipment Name and Weight</div> :
                     null  
                    }

                </div>    
            </div>
        </div>
    )
  }
}

export default CustomEquipmentModal;