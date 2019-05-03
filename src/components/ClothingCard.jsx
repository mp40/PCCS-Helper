import React, { Component } from "react"; 
import {connect} from 'react-redux';
import {changeUniform} from '../actions'
import {uniformWeights} from '../helpers/uniformAndArmourTypes'

import './ClothingCard.css'

class ClothingCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showUniformSelect: false
        }
    }

    toggleSelectUniform = ()=>{
        this.setState({showUniformSelect: true})
    }

    handleChangeUniform = (event) =>{
        const newUniform = event.target.value
        const newWeight = this.props.totalWeight - (uniformWeights[this.props.gear.uniform] - uniformWeights[newUniform])
        const attributeObj = this.props.characterStats
        this.props.changeUniform(newUniform, newWeight, attributeObj)
        this.setState({showUniformSelect: false})

    }

    render() {
      const currentUniform = this.props.gear.uniform
      const currentUniformWeight = uniformWeights[currentUniform]  

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
                        <td id="uniformWeight" style={{textAlign: 'center'}}>{currentUniformWeight}</td>
                    </tr>
                </thead>
            </table>
            )
      }
      
      if(this.state.showUniformSelect) {
        return (
            <table className="uniformTableContainer">
                <thead>
                    <tr className="uniformTableHeader">
                        <th className="uniformHeading">Uniform</th>
                        <th className="uniformValHeading">lbs</th>
                    </tr>

                    <tr>
                    <div>
                         <select id="uniformDropdownSelector" onChange={this.handleChangeUniform}>
                             <option>Select Uniform</option>
                             <option>Normal</option>
                             <option>Tropical</option>
                             <option>Winter</option>
                         </select>
                     </div>
                    </tr>
                </thead>
            </table>
        )
      }



    //   if(this.state.showUniformSelect) {
    //     return (
    //         <form className="uniformTableContainer">
    //             {/* <label>Select Uniform */}
    //                 <div>
    //                     <select id="uniformDropdownSelector" onChange={this.handleChangeUniform}>
    //                         <option>Select Uniform</option>
    //                         <option>Normal</option>
    //                         <option>Tropical</option>
    //                         <option>Winter</option>
    //                     </select>
    //                 </div>
    //             {/* </label> */}
    //         </form>
    //     )
    //   }   
    }
  }

  const mapStateToProps = (state) => {
      return ({
          totalWeight: state.totalWeight,
          characterStats: state.characterStats,
          gear: state.gear
      })
  }
  
  export default connect(mapStateToProps,{changeUniform})(ClothingCard)