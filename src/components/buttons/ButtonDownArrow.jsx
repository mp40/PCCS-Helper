import React, { Component } from "react";
import './buttons.css'
 
class ButtonDownArrow extends Component {

  render() {
        return (
            <button 
                className="button"
                onClick={this.props.onClick}
                >
                {String.fromCharCode(8595)}
            </button>
        )
    }
}

export default ButtonDownArrow