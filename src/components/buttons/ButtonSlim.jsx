import React, { Component } from "react";
import './buttons.css'
 
class ButtonSlim extends Component {

  render() {
        return (
            <button 
                className="buttonSlim" 
                onClick={this.props.onClick}
            >
                    {this.props.name}
            </button>        
        )
    }
}

export default ButtonSlim