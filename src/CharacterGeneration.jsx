import React, { Component } from "react";
import AttributeCard from "./AttributeCard";
import CombatCard from "./CombatCard";
import './CharacterGeneration.css'
import ActionsCard from "./ActionsCard";

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
        <ActionsCard
          {...this.props}
        />
      </div>    
    );
  }
}

export default CreateChar;