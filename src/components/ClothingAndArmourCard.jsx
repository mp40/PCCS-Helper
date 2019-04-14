import React, { Component } from "react"; 

const uniforms = require('../helpers/uniformAndArmourTypes.js')

class ClothingAndArmourCard extends Component {

  render() {

    const currentUniform = this.props.gear.uniform
    const currentWeight = uniforms[currentUniform]

    return (
        <div>
            <div className="tableContainer">
                Uniform
                <div>{currentUniform}</div>
                <div>{currentWeight}</div>
            </div>
        </div>
        )
    }
}

export default ClothingAndArmourCard