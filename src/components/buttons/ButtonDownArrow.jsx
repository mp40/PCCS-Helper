import React, { Component } from "react";
 
class ButtonDownArrow extends Component {

  render() {
        return (
            <button 
                className="equipmentButton"
                onClick={this.props.onClick}
                >
                {String.fromCharCode(8595)}
            </button>
        )
    }
}

export default ButtonDownArrow