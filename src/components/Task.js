import React, { Component } from "react";

class Task extends Component {
  thi;

  state = {
    task: this.props.dataFromParent,
  };

  render() {
    return (
      <div className="task">
        <h2 className="taskTitile">Task</h2>
        {this.props.children}
      </div>
    );
  }
}

export default Task;
