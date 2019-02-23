import React, { Component } from "react";
import './CharacterGeneration.css'

class CreateChar extends Component {
  
  render() {
    // const { classes } = this.props;
    return (
      <div>
        <div className="tableContainer">
        <table className="attributeContainer">
        <tbody>
          <tr>
            <th className="attHeading">Attribute</th>
            <th className="attValHeading">Value</th>
          </tr>
          <tr className="attributeRow">
            <td className="attName">Strength</td>
            <td>{this.props.str}</td>
          </tr>
          <tr className="attributeRow">
            <td className="attName">Intelligence</td>
            <td>{this.props.int}</td>
          </tr>
          <tr className="attributeRow">
            <td className="attName">Health</td>
            <td>{this.props.hlt}</td>
          </tr>
          <tr className="attributeRow">
            <td className="attName">Willpower</td>
            <td>{this.props.wil}</td>
          </tr>
          <tr className="attributeRow">
            <td className="attName">Agility</td>
            <td>{this.props.agi}</td>
          </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default CreateChar;