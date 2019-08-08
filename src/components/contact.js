import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Button  } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
          <Grid className="contact-grid">
              <Cell col={6}>
                  <h4>Solaiman Hossain</h4>
                  <img
                      src="https://scontent.fdac1-1.fna.fbcdn.net/v/t1.0-9/13102632_880462572064939_1271326224549439508_n.jpg?_nc_cat=104&_nc_eui2=AeGPqCgilAZzKd1yO-DV9lRjTts7FnB5oe0BxyxfI6MlOPY3unMnnkF1gsFS6if_GHLj2zJFnMKUspLkHWaeRzp8YKF6CG-ABF8IUSkCiPw_JtD-JF7Jh2OClGwm3dLxH30&_nc_oc=AQkyn2sRq5jsGjcmMukK-syHA7wCBf65ExMn_Ubf_mJ6eHM4tQYqpJIU9v54P0ae4eQ&_nc_ht=scontent.fdac1-1.fna&oh=a605c5d313bb1cf9d28fabaaea7741b2&oe=5DD299CB"
                      alt="avatar"
                      style={{ height: '200px', width: '200px' }}
                    />
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', textAlign: 'justify' }}>Graduated from BSc in Computer Science, Lincoln University, Malaysia. I am a Web Developer with profound knowledge of HTML/HTML5, CSS/CSS3, Bootstrap, JavaScript, React JS, Express JS, AJAX, jQuery, jQuery UI, PHP, Laravel, MySQL, Apache, and other similar systems and ability to effectively design, maintain and manage enterprise level solutions. </p>
              </Cell>
              <Cell col={6}>

                <h4> Contact Me </h4>
                <hr/>

                <div className="contact-list">
                <List>
                    <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                          +8801633912173
                      </ListItemContent>
                    </ListItem>

                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        solaiman0168@gmail.com
                      </ListItemContent>
                    </ListItem>


                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-skype" aria-hidden="true"/>
                          Skype ID: solaiman0168
                      </ListItemContent>
                    </ListItem>

                </List>
                </div>

               </Cell>
          </Grid>
      </div>
    );
  }
}

export default Contact;
