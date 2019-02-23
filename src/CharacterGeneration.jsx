import React, { Component } from "react";
import './CharacterGeneration.css'
import AttributeCard from "./AttributeCard";
import CombatCard from "./CombatCard";

class CreateChar extends Component {

  render() {
    return (
      <div>
        <AttributeCard
          {...this.props}
        />
        <CombatCard
          {...this.props}
        />  
      </div>
    );
  }
}

export default CreateChar;