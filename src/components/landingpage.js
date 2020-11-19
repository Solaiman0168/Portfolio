import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div className="landing-page" style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://scontent-sin2-1.xx.fbcdn.net/v/t31.0-8/s960x960/18192552_1190356217742238_593717763505231523_o.jpg?_nc_cat=106&_nc_ohc=2YbF7rUMM5UAQnJ8qz6nMSUy9Hzav1188oJ9lgsmzb9cAZZy1QMS38owA&_nc_ht=scontent-sin2-1.xx&oh=13e91a367d72b71cfd7a0469548c0071&oe=5E891CE8"
            alt="avatar"
            className="avatar-img"
            />

            <div className="banner-text">
              <h1> Full Stack Developer </h1>

              <hr/>

              <p> HTML/CSS | Bootstrap | Javascript | React | VueJS | Laravel | MySQL | MongoDB </p>
              <div className="social-links">
                  { /* Linkedin */ }
                  <a href="https://www.linkedin.com/in/solaiman-hossain-536ab9136/"  rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>

                  { /* Github */ }
                  <a href="https://github.com/Solaiman0168"  rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>

                  { /* Stack-overflow */ }
                  <a href="https://stackoverflow.com/users/9775390/solaiman-hossain"  rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-stack-overflow" aria-hidden="true" />
                  </a>

                  { /* Facebook  */ }
                  <a href="https://web.facebook.com/solaiman.hossain.16"  rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
