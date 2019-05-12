import React, { Component } from "react";
 
class ButtonDeleteX extends Component {

  render() {
        return (
            <button
                className="equipmentButton"
                onClick={this.props.onClick}
            >
                X
            </button>
        )
    }
}

export default ButtonDeleteX