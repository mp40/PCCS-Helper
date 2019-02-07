import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class AttributeButton extends React.Component {
  state = {
    anchorEl: null,
  };

  // handleClick = event => {
  //   this.setState({ anchorEl: event.currentTarget });
  // };

  // handleClose = () => {
  //   this.setState({ anchorEl: null });
  // };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>18</MenuItem>
          <MenuItem onClick={this.handleClose}>17</MenuItem>
          <MenuItem onClick={this.handleClose}>16</MenuItem>
          <MenuItem onClick={this.handleClose}>15</MenuItem>
          <MenuItem onClick={this.handleClose}>14</MenuItem>
          <MenuItem onClick={this.handleClose}>13</MenuItem>
          <MenuItem onClick={this.handleClose}>12</MenuItem>
          <MenuItem onClick={this.handleClose}>11</MenuItem>
          <MenuItem onClick={this.handleClose}>10</MenuItem>
          <MenuItem onClick={this.handleClose}>9</MenuItem>
          <MenuItem onClick={this.handleClose}>8</MenuItem>
          <MenuItem onClick={this.handleClose}>7</MenuItem>
          <MenuItem onClick={this.handleClose}>6</MenuItem>
          <MenuItem onClick={this.handleClose}>5</MenuItem>
          <MenuItem onClick={this.handleClose}>4</MenuItem>
          <MenuItem onClick={this.handleClose}>3</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default AttributeButton;