import React, { Component } from 'react';
import classes from './Course.module.css'

class Course extends Component {

  componentDidMount(){
    this.updateComponent();
  }

  componentDidUpdate(){
    this.updateComponent();
  }

  updateComponent(){
    console.log('key in course.js: ', this.props.location.key);
  }

  render () {
    let display = (
      <div>
        <h1>{this.props.match.params.title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );

    if(this.props.location.key === undefined){
      display = <div className={classes.display}>Page not found! Please try again!</div>;
    }

    return (
      <div>
        {display}
      </div>
    );
  }
}

export default Course;
