import React, { Component } from "react";

class Doing extends Component {
  render() {
    return (
      <div className="doing">
        <h2 className="doingTitile">Doing</h2>
        {this.props.children}
      </div>
    );
  }
}

export default Doing;
