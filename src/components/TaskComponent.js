import React, { Component } from "react";
import { FaTrashAlt } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';


class TaskComponent extends Component {
  render() {
    return (
      <li className={this.props.liClass}>
        <p className="pTitle">{this.props.title}</p>
        <p className="pDescription">{this.props.description}</p>
        <p className="pDate">{this.props.date}</p>
        <div className="nextInput" id={this.props.id}>
          <button className="end" onClick={this.props.functionEnd} style={{display : this.props.display1}}>-</button>
          <button className="end2" onClick={this.props.functionEnd1} style={{display : this.props.display}}><i id={this.props.id} className="trash"><FaTrashAlt/></i></button>

          <input className="doneBtn" type="checkbox" onChange={this.props.functionIn} disabled={this.props.disabled} checked={this.props.checked}/>
          
          <button className="nex" onClick={this.props.functionNext} style={{display : this.props.displayNext}}>+</button>
          <button className="nex2" onClick={this.props.functionEnd1} style={{display : this.props.displayNext2}}><i id={this.props.id} className="checkTick"><FaCheck/></i></button>
        </div>
      </li>
    );
  }
}

export default TaskComponent;
