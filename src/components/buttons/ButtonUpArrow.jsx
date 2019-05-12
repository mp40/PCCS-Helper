import React, { Component } from "react";
 
class ButtonUpArrow extends Component {

  render() {
        return (
            <button 
                className="equipmentButton"
                onClick={this.props.onClick}
                >
                  {String.fromCharCode(8593)}
            </button>
        )
    }
}

export default ButtonUpArrow
