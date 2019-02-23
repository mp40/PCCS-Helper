import React, { Component } from "react";
import './CharacterGeneration.css'
import AttributeCard from "./AttributeCard";

class CreateChar extends Component {

  render() {
    return (
      <div>
        <AttributeCard
          {...this.props}
        />
        <div className="tableContainer">
          <div className="attributeContainer">

          </div>
        </div>
      </div>
    );
  }
}

export default CreateChar;