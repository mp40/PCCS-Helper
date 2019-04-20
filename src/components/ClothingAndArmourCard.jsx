import React, { Component } from "react"; 
import {uniformWeights} from '../helpers/uniformAndArmourTypes'
import './ClothingAndArmourCard.css';

class ClothingAndArmourCard extends Component {

  render() {

    const currentUniform = this.props.gear.uniform
    const currentWeight = uniformWeights[currentUniform]
    return (
        <div>
            <div className="tableContainer">
                <div className="uniformHeader">
                    <div>Uniform</div>
                    <div>lbs</div>
                </div>
                <div className="uniformContainer">
                    <div id="currentUniform">{currentUniform}</div>
                    <div id="uniformWeight">{currentWeight}</div>
                </div>
                <div className="helmetHeader">
                    <div>Helmet</div>
                    <div className="helmetStatHeading">PF</div>
                    <div className="helmetStatHeading">BPF</div>
                    <div className="helmetStatHeading">AC</div>
                    <div className="helmetStatHeading">lbs</div>
                </div>
                <div className="uniformContainer">
                    <div id="currentHelmet">Placeholder</div>
                    <div id="helmetWeight">PlcHld</div>
                </div>
                <div className="helmetHeader">
                    <div>Armour</div>
                    <div className="helmetStatHeading">PF</div>
                    <div className="helmetStatHeading">BPF</div>
                    <div className="helmetStatHeading">AC</div>
                    <div className="helmetStatHeading">lbs</div>
                </div>
                <div className="uniformContainer">
                    <div id="currentHelmet">Placeholder</div>
                    <div id="helmetWeight">PlcHld</div>
                </div>
            </div>
        </div>
        )
    }
}

export default ClothingAndArmourCard