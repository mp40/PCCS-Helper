import React, { Component } from "react";
import './buttons.css'
 
class ButtonSelector extends Component {

  render() {
        return (
            <button 
                className="select" 
                onClick={this.props.onClick}
            >
                    {this.props.name}
            </button>        
        )
    }
}

export default ButtonSelector

