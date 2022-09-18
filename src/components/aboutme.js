import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return (
      <div className="about-body">
        <Grid>
          <Cell col={2}></Cell>
          <Cell col={8}>
            <center>  <h3>ABOUT ME</h3> </center>
             <hr />
              {/* <p> Full Stack Developer using MongoDB, Express, React, Node.js (MERN) with an emphasis on Frontend web development and mobile using React & React Native. Experienced in building CRUD applications, RESTful APIs using Node.js and express, User Auth and oAuth with PassportJS and Firebase. Common libraries of use: Axios, Redux, Mongoose, Lodash, Express, body-parser, socket.io, react-router, redux- thunk. Common use of UI libraries: Bootstrap 4, React-Bootstrap, MaterializeCSS, Material-UI, Elemental-UI and Native-Base for React Native. </p> */}
              <p className="about-text">Software Engineer using HTML, CSS, SASS, Bootstrap, JavaScript, Jquery, ReactJS, VueJS, Laravel, MySQL with an emphasis on web application development.
                  Common use of UI libraries: Bootstrap, React-Bootstrap, React-mdl, Bootstrap Vue, Jquery, Jquery-UI. </p>
          </Cell>
          <Cell col={2}></Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
