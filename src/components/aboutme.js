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
