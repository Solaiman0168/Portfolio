import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div className="landing-page" style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://i.ibb.co/pvGRKC7/SOLAIMAN.jpg"
            alt="Solaiman"
            className="avatar-img"
            />

            <div className="banner-text">
              <h1> Software Engineer </h1>
              {/* <h1> Frontend Developer </h1> */}

              <hr/>

              {/* <p> HTML/CSS | Bootstrap | Javascript | React | VueJS | Laravel | MySQL | MongoDB </p> */}
              <p> HTML/CSS | Bootstrap | Zurb Foundation | Tailwind | Javascript | ReactJS | VueJS | Laravel | MySQL  </p>
              <div className="social-links">
                  { /* Linkedin */ }
                  {/* <a href="https://www.linkedin.com/in/solaiman-hossain-536ab9136/"  rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a> */}

                  { /* Github */ }
                  {/* <a href="https://github.com/Solaiman0168"  rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a> */}

                  { /* Stack-overflow */ }
                  {/* <a href="https://stackoverflow.com/users/9775390/solaiman-hossain"  rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-stack-overflow" aria-hidden="true" />
                  </a> */}

                  { /* Facebook  */ }
                  {/* <a href="https://web.facebook.com/solaiman.hossain.16"  rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a> */}

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
