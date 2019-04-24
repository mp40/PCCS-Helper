import React, { Component } from "react"; 
import {uniformWeights} from '../helpers/uniformAndArmourTypes'

class ClothingCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showUniformSelect: false
            // showUniformSelect: true //todo change back to false
        }
    }

    toggleSelectUniform = ()=>{
        this.setState({showUniformSelect: true})
    }

    handleChangeUniform(event){
        console.log('hgj',event.target.value)
        // this.props.changeUniform(event.target.value)
        // console.log(this.state)
        

    }

    render() {
  
      const currentUniform = this.props.gear.uniform
      const currentWeight = uniformWeights[currentUniform]

      if(!this.state.showUniformSelect){
        return (
            <table className="uniformTableContainer">
                <thead>
                    <tr className="uniformTableHeader">
                        <th className="uniformHeading">Uniform</th>
                        <th className="uniformValHeading">lbs</th>
                    </tr>
                    <tr
                      className="uniformStats"
                      onClick={this.toggleSelectUniform}
                    >
                        <td id="currentUniform">{currentUniform}</td>
                        <td id="uniformWeight" style={{textAlign: 'center'}}>{currentWeight}</td>
                    </tr>
                </thead>
            </table>
            )
      }
      
      if(this.state.showUniformSelect) {
        return (
            <form className="uniformTableContainer">
                <label>Select Uniform
                    <select onChange={this.handleChangeUniform}>
                        <option>Tropical</option>
                        <option>Normal</option>
                        <option>Winter</option>
                    </select>
                </label>
            </form>
        )

        // return (
        //     <form className="uniformTableContainer">
        //         <div>Select Uniform</div>
        //         <input type="radio" value="Tropical" checked={currentUniform === 'Tropical'} onChange={this.handleChangeUniform}></input>
        //         <span style={{fontSize:"smaller"}}>Tropical</span>
        //         <br/>
        //         <input type="radio" value="Normal" checked={currentUniform === 'Normal'} onChange={this.handleChangeUniform}></input>
        //         <span style={{fontSize:"smaller"}}>Normal</span>
        //         <br/>
        //         <input type="radio" value="Winter" checked={currentUniform === 'Winter'} onChange={this.handleChangeUniform}></input>
        //         <span style={{fontSize:"smaller"}}>Winter</span>
        //     </form>
            
        // )
      }   
    }
  }
  
  export default ClothingCard