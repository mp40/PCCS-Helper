import React, { Component } from "react";
import './buttons.css'
 
class ButtonUpArrow extends Component {

  render() {
        return (
            <button 
                className="button"
                onClick={this.props.onClick}
                >
                  {String.fromCharCode(8593)}
            </button>
        )
    }
}

export default ButtonUpArrow
