import React, { Component, Fragment } from "react";

class TextInput extends Component {

  render() {
    const title = this.props.title
      const handleChange= this.props.handleChange
      const value = this.props.value

    return (
            <Fragment>
                <div>{title}</div>
                <input 
                    type="text"
                    autoComplete="off"
                    className="TextInput" 
                    value={value}
                    onChange={handleChange}/>
            </Fragment>
    )
  }
}

export default TextInput