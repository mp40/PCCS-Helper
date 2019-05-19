import React, { Component } from "react";
import './buttons.css'

class ButtonInfo extends Component {

  render() {
        return (
            <button
                className="button"
                style={{lineHeight:'70%', padding:"0.25em 0.4em"}}
                onClick={this.props.onClick}
            >
                ?
            </button>
        )
    }
}

export default ButtonInfo