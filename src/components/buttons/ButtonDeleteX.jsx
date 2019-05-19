import React, { Component } from "react";
import './buttons.css'

class ButtonDeleteX extends Component {

  render() {
        return (
            <button
                className="button"
                onClick={this.props.onClick}
            >
                X
            </button>
        )
    }
}

export default ButtonDeleteX