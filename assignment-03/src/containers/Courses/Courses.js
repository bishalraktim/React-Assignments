import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
      const style = {
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        flexFlow: 'column',
        margin: 'auto',
        width: '30%',
        border: '1px solid #eee',
        boxShadow: '0 2px 3px #ccc',
        padding: '10px'
      }
      //console.log('props in courses.js: ', this.props);

        return (
            <div>
              <h1>Amazing Udemy Courses</h1>
              <section>
                  {
                      this.state.courses.map( course => {
                          //console.log('course id: ', course);
                          return (
                            <React.Fragment key={course.id}>
                              <Link
                                style={style}
                                to={this.props.match.url + '/' + course.id + '/' + course.title}>
                                <article>{course.title}</article>
                              </Link>
                            </React.Fragment>);
                      })
                  }
              </section>

              <Route path={this.props.match.url + '/:id/:title'} component={Course} />
            </div>
        );
    }
}

export default Courses;
