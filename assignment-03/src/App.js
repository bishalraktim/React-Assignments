import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Redirect, Switch} from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Course from './containers/Course/Course';

class App extends Component {

  render () {
    const styles = {
      listStyle: 'none',
      display: 'flex'
    }

    const style = {
      textDecoration: 'none',
      color: 'black',
      margin: '0 50px'
    }
    //console.log('props-App.js', this.props);

    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <ul style={styles}>
              <li>
                <Link to='/courses' style={style}>Courses</Link>
              </li>

              <li>
                <Link to='/users' style={style}>Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/users' component={Users} />
            <Route path='/courses' component={Courses} />
            <Redirect from='/' to='/courses' component={Courses} exact />
            <Redirect from='/all-courses' to='/courses' component={Courses} />
            <Route render={() => <h1><center>Page Not Found!</center></h1>} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
