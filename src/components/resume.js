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
              src="https://scontent-sin2-1.xx.fbcdn.net/v/t31.0-8/s960x960/18192552_1190356217742238_593717763505231523_o.jpg?_nc_cat=106&_nc_ohc=2YbF7rUMM5UAQnJ8qz6nMSUy9Hzav1188oJ9lgsmzb9cAZZy1QMS38owA&_nc_ht=scontent-sin2-1.xx&oh=13e91a367d72b71cfd7a0469548c0071&oe=5E891CE8"
              alt="avatar"
              style={{height: '200px'}}
              />

              <h2 style={{paddingTop: '2em'}}>Solaiman Hossain</h2>
              <h4 style={{color: 'grey'}}>Web Developer</h4>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <p>Graduated from BSc in Computer Science, Lincoln University, Malaysia. I am a Web Developer with profound knowledge of HTML/HTML5, CSS/CSS3, Bootstrap, JavaScript, React JS, Vue JS, AJAX, jQuery, jQuery UI, PHP, Laravel, MySQL, Apache, and other similar systems and ability to effectively design, maintain and manage enterprise level solutions.</p>
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
                        durationTime="2014-2017"
                      schoolName="Lincoln University, Malaysia"
                      schoolDescription="BSc in Computer Science * CGPA = 3.68"
                       />

                       <Education
                           durationTime="2010-2012"
                         schoolName="University Laboratory School and College"
                         schoolDescription="Higher Secondary Certificate * GPA = 4.40"
                          />


                       <Education
                           durationTime="2005-2010"
                         schoolName="Manikganj Govt High School"
                         schoolDescription="Secondary School Certificate * GPA = 5.00"
                          />

                    <hr style={{borderTop: '3px solid #e22947'}} />

                  <h2>Experience</h2>

                  <Experience
                      durationTime="November 2019 - Present"
                      jobName="Full Stack Developer"
                      companyName="Combosoft"
                      jobDescription="
                    1. Design implement web applications, prototypes, user interfaces, and websites for clients
                    2. Configure customize and integrate open source software oss for client
                    3. Maintain and support existing system and websites and realize it is just as important challenging as building new apps
                    4. Analyze clients need to develop the appropriate functionality, while not overbuilding - Translate
                     Specifications from analysts graphic designers into working applications
                    "
                  />

                  <Experience
                      durationTime="December 2017 - October 2019"
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
                        durationTime="May 2017 - July 2017"
                      jobName="Software Developer Intern"
                      companyName="Zinios Sdn Bhd (Malaysia)"
                      jobDescription="4 Months of Internship "
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
                            skill="VueJS"
                            progress={80}
                            />
                            <Skills
                              skill="Ajax"
                              progress={80}
                              />
                              <Skills
                                skill="Laravel"
                                progress={90}
                                />
                                <Skills
                                  skill="PHP"
                                  progress={90}
                                  />
                                  <Skills
                                    skill="MySQL"
                                    progress={100}
                                    />
                                    <Skills
                                      skill="MongoDB"
                                      progress={80}
                                      />
                                    <Skills
                                        skill="Javascript"
                                        progress={90}
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
