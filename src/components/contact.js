import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
          <Grid className="contact-grid">
              <Cell col={6}>
                  <h4>Solaiman Hossain</h4>
                  <img
                      src="https://scontent-sin2-1.xx.fbcdn.net/v/t31.0-8/s960x960/18192552_1190356217742238_593717763505231523_o.jpg?_nc_cat=106&_nc_ohc=2YbF7rUMM5UAQnJ8qz6nMSUy9Hzav1188oJ9lgsmzb9cAZZy1QMS38owA&_nc_ht=scontent-sin2-1.xx&oh=13e91a367d72b71cfd7a0469548c0071&oe=5E891CE8"
                      alt="avatar"
                      style={{ height: '200px', width: '200px' }}
                    />
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', textAlign: 'justify' }}>Graduated from BSc in Computer Science, Lincoln University, Malaysia. I am a Web Developer with profound knowledge of HTML/HTML5, CSS/CSS3, Bootstrap, JavaScript, React JS, Vue JS, AJAX, jQuery, jQuery UI, PHP, Laravel, MySQL, Apache, and other similar systems and ability to effectively design, maintain and manage enterprise level solutions. </p>
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
