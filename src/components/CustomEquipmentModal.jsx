import React, { Component } from "react";

import './EquipmentDropdown.css'

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
        <div className='equipmentModalContainer'>
            <div className="equipmentListCard">
                <div className="equipmentListHeader">
                    Add Equipment To List
                </div> 
                <button onClick={this.props.toggleCustomEquipment.bind(this)}>
                    Cancel
                </button>
                <div>Equipment Name</div>
                <input 
                    type="text"
                    id='equipNameInput' 
                    className="equipInput" 
                    value={this.state.equipmentName} 
                    onChange={this.handleChange.bind(this, 'name')}/>
                <div>Equipment Weight in lbs</div>
                <input 
                    type="text"
                    id='equipWeightInput' 
                    className="equipInput" 
                    value={this.state.equipmentWeight} 
                    onChange={this.handleChange.bind(this, 'weight')}/>
                <button
                    id='submitCustomEquipButton' 
                    onClick={this.submitEquipment.bind(this)}>
                    Submit
                </button>
                {this.state.errorMsg ?
                <div>Please Enter Valid Equipment Name and Weight</div> :
                 null  
                }
            </div>
        </div>
    )
  }
}

export default CustomEquipmentModal;