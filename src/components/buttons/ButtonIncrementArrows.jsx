import React, { Component, Fragment } from "react";
import ButtonUpArrow from './ButtonUpArrow'
import ButtonDownArrow from './ButtonDownArrow'
 
class ButtonIncrementArrows extends Component {

  render() {
        return (
            <Fragment>
                <ButtonUpArrow
                id={this.props.idUp}
                onClick={this.props.onClickUp}
                />
                <ButtonDownArrow
                id={this.props.idDown}
                    onClick={this.props.onClickDown}
                />
            </Fragment>
        )
    }
}

export default ButtonIncrementArrows