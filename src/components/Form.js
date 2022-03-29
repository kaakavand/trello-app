import React, { Component } from "react";
import Styles from "./Form.module.scss";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

class Form extends Component {
  state = {
    title: "",
    description: "",
    date: "",
    id: Number(localStorage.getItem('id')) 
  };

  getInputValueTitle = ({ target }) => {
    this.setState({ title: target.value });
  };
  getInputValueDescription = ({ target }) => {
    this.setState({ description: target.value });
  };
  getInputValueDate = ({ target }) => {
    this.setState({ date: target.value });
  };
  
  addIdState = () => {
    if (localStorage.getItem('id') === null) {

      localStorage.setItem('id', 1);
      this.setState({ id: Number(localStorage.getItem('id')) });

    } else if (this.state.id >= 1) {
      let num = Number(localStorage.getItem('id')) + 1
      this.setState({ id: num });
      localStorage.setItem('id', num);
    }
  }

  addState = (e) => {
    e.preventDefault();
    if (this.state.title && this.state.description && this.state.date) {
      this.addIdState()
      this.props.addInfoTast(this.state);
      console.log(this.state);
      this.setState({ title: "" });
      this.setState({ description: "" });
      this.setState({ date: "" });
    }
  };

  render() {
    return (
      <div className={Styles.formBox}>
        <form autocomplete="off">
          <h2 className={Styles.titleForm}>Add Task</h2>
          <input
            type="text"
            placeholder="title :"
            className={Styles.title}
            id="title"
            onChange={this.getInputValueTitle}
            value={this.state.title}
            />
          <input
            type="text"
            placeholder="description :"
            className={Styles.description}
            id="description"
            onChange={this.getInputValueDescription}
            value={this.state.description}
          />
          <input
            type="date"
            placeholder="date :"
            className={Styles.date}
            id="date"
            onChange={this.getInputValueDate}
          />
          <button className={Styles.submit} type="submit" onClick={this.addState}>
            Submit
          </button>
        </form>
        <div className={Styles.social}>
          <div className={Styles.socialLink}>
            <a href="#"><i><FaGithub/></i></a>
            <a href="#"><i><FaLinkedin/></i></a>
            <a href="#"><i><FaInstagram/></i></a>
          </div>
          <a className={Styles.gmail} href="kaakavand@gmail.com">kaakavand@gmail.com</a>
        </div>
      </div>
    );
  }
}

export default Form;
