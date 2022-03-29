import React from "react";
import ReactDOM from "react-dom";
import Doing from "./components/Doing";
import Done from "./components/Done";
import Form from "./components/Form";
import Task from "./components/Task";
import TaskComponent from "./components/TaskComponent";
import "./index.scss";
import "./responsiv.scss";

class Index extends React.Component {
  state = {
	task: [],
	doing: [],
	done: [],
	trash: []
  };

  goToNext = ({ target }) => {
	const id = +target.parentElement.id
	this.state.task.forEach((item, index) => {if (item.id === id) {this.setState({ doing: [...this.state.doing , ...this.state.task.splice(index, 1)]})}});
	this.state.doing.forEach((item, index) => {if (item.id === id) {this.setState({ done: [...this.state.done , ...this.state.doing.splice(index , 1)]})}});
  };

  goToPrevious = ({ target }) => {
	const id = +target.parentElement.id
	this.state.done.forEach((item, index) => {if (item.id === id) {this.setState({ doing: [...this.state.doing , ...this.state.done.splice(index , 1)]})}});
	this.state.doing.forEach((item, index) => {if (item.id === id) {this.setState({ task: [...this.state.task , ...this.state.doing.splice(index , 1)]})}});
  };

  goToTrash = ({target}) => {
	const id = +target.parentElement.parentElement.id

	this.state.task.forEach((item, index) => {
		if (item.id === id) {
			if (window.confirm(`delete task ?`)) {this.setState({ trash: [...this.state.trash , ...this.state.task.splice(index , 1)] })}
		}
	});

	this.state.done.forEach((item, index) => {
		if (item.id === id) {
			if (window.confirm(`Task checked ?`)) {this.setState({ trash: [...this.state.trash , ...this.state.done.splice(index , 1)] })}
		}
	});

  }

  functionIn = ({ target }) => {
	if (target.checked) {
	  const id = +target.parentElement.id
	  this.state.doing.forEach((item, index) => {	if (item.id === id) {this.setState({ done: [...this.state.done , ...this.state.doing.splice(index , 1)] })}})
	  this.state.task.forEach((item, index) => {	if (item.id === id) {this.setState({ done: [...this.state.done , ...this.state.task.splice(index , 1)]})}})
	}
  };

componentDidMount() {
	this.setState(JSON.parse(localStorage.getItem('stateLS')));
}

componentDidUpdate(){
	localStorage.setItem('stateLS', JSON.stringify(this.state));
}

  render() {
	return (
	  <div className="main">
		<Form
		  addInfoTast={(value) => {
			// const arr = this.state.task.concat(value);
			this.setState({ task: [...this.state.task , value] });
		  }}
		/>

		<Task>
		  {this.state.task.map((item, index) => (
			<TaskComponent
			  liClass="bgBlue"
			  id={item.id}
			  key={index}
			  title={item.title}
			  description={item.description}
			  date={item.date}
			  functionEnd1={this.goToTrash}
			  functionIn={this.functionIn}
			  functionNext={this.goToNext}
			  display='block'
			  display1='none'
			  checked={false}
			  />
			  ))}
		</Task>

		<Doing>
		  {this.state.doing.map((item, index) => (
			  <TaskComponent
			  liClass="bgYellow"
			  id={item.id}
			  key={index}
			  title={item.title}
			  description={item.description}
			  date={item.date}
			  functionEnd={this.goToPrevious}
			  functionIn={this.functionIn}
			  functionNext={this.goToNext}
			  checked={false}
			  />
			  ))}
		</Doing>

		<Done>
		  {this.state.done.map((item, index) => (
			  <TaskComponent
			  liClass="bgGreen"
			  key={index}
			  id={item.id}
			  title={item.title}
			  description={item.description}
			  date={item.date}
			  functionEnd={this.goToPrevious}
			  functionIn={this.functionIn}
			  functionEnd1={this.goToTrash}
			  disabled={true}
			  checked={true}
			  displayNext='none'
			  displayNext2='block'
			  />
			  ))}
		</Done>
	  </div>
	);
}
}

ReactDOM.render(<Index />, document.getElementById("root"));