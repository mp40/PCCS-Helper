import React, { Component } from "react";
import ButtonStandard from './buttons/ButtonStandard'
// import './WeaponsCard.css'

class WeaponsCardModifyWeight extends Component {
    constructor(props){
        super(props)
        this.state = {
            modWeightNote: '',
            modWeightNumber: '',
        }
        this.handleModifyFirearmWeight  = this.props.handleModifyFirearmWeight
    }

    handleWeightNote(event){
        this.setState({modWeightNote: event.target.value})
    }

    handleWeightNumber(event){
        const weight = Number(event.target.value)
        this.setState({modWeightNumber: weight})
    }

    handleSubmit(){
        const modNote = {
            note: this.state.modWeightNote,
            weightMod: this.state.modWeightNumber
        }
        this.handleModifyFirearmWeight(modNote)
    }

    render() {

        return (
            <div className="modifyWeightForm">
                <div>Modify Weapon Weight</div>
                <div style={{display:'flex', width:"100%", justifyContent: "space-between"}} >
                    <div style={{width:'50%'}}>Note</div>
                    <input
                        style={{width:'30%'}}
                        type="text"
                        autoComplete="off"
                        id='modifyWeightNoteInput'
                        value={this.state.capacity}
                        onChange={this.handleWeightNote.bind(this)}
                    /> 
                </div>
                <div style={{display:'flex', width:"100%", justifyContent: "space-between"}} >
                    <div>Weight</div>
                    <input
                        style={{width:'30%'}}
                        type="text"
                        autoComplete="off"
                        id='modifyWeightValueInput'
                        value={this.state.weight}
                        onChange={this.handleWeightNumber.bind(this)}
                    />
                </div>
                <ButtonStandard
                    name='Submit'
                    id="submitModifiedWeight"
                    onClick={this.handleSubmit.bind(this)}
                />
            </div>
        )   
    }

}

export default WeaponsCardModifyWeight