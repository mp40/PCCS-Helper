import React, { Component } from "react";
 
class ButtonStandard extends Component {

  render() {
        return (
            <button 
                className="equipmentButton" 
                onClick={this.props.onClick}
            >
                    {this.props.name}
            </button>        
        )
    }
}

export default ButtonStandard