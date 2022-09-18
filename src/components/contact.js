import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
          <Grid className="contact-grid">
              {/* <Cell col={6}>
                  <h4>Solaiman Hossain</h4>
                  <img
                      src="https://i.ibb.co/pvGRKC7/SOLAIMAN.jpg"
                      alt="Solaiman"
                      style={{ height: '200px', width: '200px' }}
                    />
                    <p className='contact-info'>
                      Graduated from BSc in Computer Science, Lincoln University, Malaysia. I am a Frontend Developer with profound knowledge of HTML/HTML5, CSS/CSS3, Bootstrap, JavaScript, React JS, Vue JS, AJAX, jQuery, jQuery UI and other similar systems and ability to effectively design, maintain and manage enterprise level solutions.
                    </p>
              </Cell> */}
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
                          Skype Name: live:.cid.30c44b01a3cb55f0
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
