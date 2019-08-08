import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
              <div style={{ textAlign: 'center' }}></div>
              <img
              src="https://scontent.fdac1-1.fna.fbcdn.net/v/t1.0-9/13102632_880462572064939_1271326224549439508_n.jpg?_nc_cat=104&_nc_eui2=AeGPqCgilAZzKd1yO-DV9lRjTts7FnB5oe0BxyxfI6MlOPY3unMnnkF1gsFS6if_GHLj2zJFnMKUspLkHWaeRzp8YKF6CG-ABF8IUSkCiPw_JtD-JF7Jh2OClGwm3dLxH30&_nc_oc=AQkyn2sRq5jsGjcmMukK-syHA7wCBf65ExMn_Ubf_mJ6eHM4tQYqpJIU9v54P0ae4eQ&_nc_ht=scontent.fdac1-1.fna&oh=a605c5d313bb1cf9d28fabaaea7741b2&oe=5DD299CB"
              alt="avatar"
              style={{height: '200px'}}
              />

              <h2 style={{paddingTop: '2em'}}>Solaiman Hossain</h2>
              <h4 style={{color: 'grey'}}>Web Developer</h4>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <p>Graduated from BSc in Computer Science, Lincoln University, Malaysia. I am a Web Developer with profound knowledge of HTML/HTML5, CSS/CSS3, Bootstrap, JavaScript, React JS, Express JS, AJAX, jQuery, jQuery UI, PHP, Laravel, MySQL, Apache, and other similar systems and ability to effectively design, maintain and manage enterprise level solutions.</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <h5>Address</h5>
              <p>Merul, D.I.T Project, Badda, Dhaka, Bangladesh</p>
              <h5>Phone</h5>
              <p>+8801633912173</p>
              <h5>Email</h5>
              <p>solaiman0168@gmail.com</p>
              <h5>Web</h5>
              <p>https://solaimanhossain.000webhostapp.com/</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

          </Cell>

          <Cell className="resume-right-col" col={8}>

            <h2>Education</h2>

            <Education
              startYear={2014}
              endYear={2017}
              schoolName="Lincoln University, Malaysia"
              schoolDescription="BSc in Computer Science * CGPA = 3.68"
               />

               <Education
                 startYear={2010}
                 endYear={2012}
                 schoolName="University Laboratory School and College"
                 schoolDescription="Higher Secondary Certificate * GPA = 4.40"
                  />


               <Education
                 startYear={2005}
                 endYear={2010}
                 schoolName="Manikganj Govt High School"
                 schoolDescription="Secondary School Certificate * GPA = 5.00"
                  />

                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

              <Experience
                startYear={2018}
                endYear={2019}
                jobName="Web Developer"
                companyName="BDSoft IT Solutions"
                jobDescription="
                1. Design implement web applications, prototypes, user interfaces, and websites for clients
                2. Configure customize and integrate open source software oss for client
                3. Maintain and support existing system and websites and realize it is just as important challenging as building new apps
                4. Analyze clients need to develop the appropriate functionality, while not overbuilding - Translate
                 Specifications from analysts graphic designers into working applications
                5. Provide technical training support to clients when necessary
                6. Engage in problem definition solution implementation according to client needs
                7. Convert and integrate data and content for use in databases websites
                8. Make suggestions that improve programming techniques, applications client deliverables"
                />

                <Experience
                  startYear={2017}
                  endYear={2017}
                  jobName="Software Developer Intern"
                  companyName="Zinios Sdn Bhd (Malaysia)"
                  jobDescription="4 Months of Internship (May 2017 - August 2017)"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />


                <h2>Skills</h2>

                  <Skills
                    skill="HTML/CSS"
                    progress={100}
                    />
                    <Skills
                      skill="Bootstrap"
                      progress={100}
                      />
                      <Skills
                        skill="javascript"
                        progress={80}
                        />
                        <Skills
                          skill="React"
                          progress={90}
                          />
                        <Skills
                          skill="React Native"
                          progress={80}
                          />
                          <Skills
                            skill="NodeJS"
                            progress={80}
                            />
                            <Skills
                              skill="ExpressJS"
                              progress={80}
                              />
                              <Skills
                                skill="MongoDB"
                                progress={80}
                                />
                                <Skills
                                  skill="Laravel"
                                  progress={90}
                                  />
                                  <Skills
                                    skill="MySQL"
                                    progress={90}
                                    />
                                    <Skills
                                      skill="Python"
                                      progress={60}
                                      />



          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
