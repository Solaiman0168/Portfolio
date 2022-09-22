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

              <p> HTML/CSS | Bootstrap | Zurb Foundation | Tailwind | Javascript | ReactJS | VueJS | Laravel | MySQL  </p>
              <div className="social-links">

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
