import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://scontent.fdac1-1.fna.fbcdn.net/v/t1.0-9/13102632_880462572064939_1271326224549439508_n.jpg?_nc_cat=104&_nc_eui2=AeGPqCgilAZzKd1yO-DV9lRjTts7FnB5oe0BxyxfI6MlOPY3unMnnkF1gsFS6if_GHLj2zJFnMKUspLkHWaeRzp8YKF6CG-ABF8IUSkCiPw_JtD-JF7Jh2OClGwm3dLxH30&_nc_oc=AQkyn2sRq5jsGjcmMukK-syHA7wCBf65ExMn_Ubf_mJ6eHM4tQYqpJIU9v54P0ae4eQ&_nc_ht=scontent.fdac1-1.fna&oh=a605c5d313bb1cf9d28fabaaea7741b2&oe=5DD299CB"
            alt="avatar"
            className="avatar-img"
            />

            <div className="banner-text">
              <h1> Full Stack Web Developer </h1>

              <hr/>

              <p> HTML/CSS | Bootstrap | Javascript | React | React Native | NodeJS | Express | MongoDB </p>
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
