import React, { Component } from "react";
import './buttons.css'
 
class ButtonStandard extends Component {

  render() {
        return (
            <button 
                className="button" 
                onClick={this.props.onClick}
            >
                    {this.props.name}
            </button>        
        )
    }
}

export default ButtonStandard