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
            
              <div style={{ textAlign: 'center' }}>
                <img 
                src="https://i.ibb.co/pvGRKC7/SOLAIMAN.jpg" 
                alt="avatar"
                style={{height: 'auto'}}
                />
              </div>
              

              <h2 className='text-center'>Solaiman Hossain</h2>
              {/* <h4 style={{color: 'grey'}}>Full Stack Developer</h4> */}
              <h4 className='text-center' style={{color: 'grey'}}>Frontend Developer</h4>
              <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
              {/* <p>Graduated from BSc in Computer Science, Lincoln University, Malaysia. I am a Frontend Developer with profound knowledge of HTML/HTML5, CSS/CSS3, Bootstrap, Tailwind, JavaScript, React JS, Vue JS, AJAX, jQuery, jQuery UI, PHP, Laravel, MySQL, Apache, and other similar systems and ability to effectively design, maintain and manage enterprise level solutions.</p> */}
              <p className='text-center'>Graduated from BSc in Computer Science, Lincoln University, Malaysia. I am a Frontend Developer with profound knowledge of HTML/HTML5, CSS/CSS3, Bootstrap, Tailwind, JavaScript, React JS, Vue JS, AJAX, jQuery, jQuery UI and other similar systems and ability to effectively design, maintain and manage enterprise level solutions.</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
              <div className='text-center'>
                <h5>Address</h5>
                <p>Mirpur 12, Dhaka, Bangladesh</p>
                <h5>Phone</h5>
                <p>+8801633912173</p>
                <h5>Email</h5>
                <p>solaiman0168@gmail.com</p>
                <h5>Web</h5>
                <p>https://solaimanportfolio.netlify.app/</p>
                <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
              </div>
          

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
                      // jobName="Full Stack Developer"
                      jobName="Frontend Developer"
                      companyName="Combosoft LTD"
                      jobDescription="
                    1. Design implement web applications, prototypes, user interfaces, and websites for clients
                    2. Configure customize and integrate open source software oss for client
                    3. Maintain and support existing system and websites and realize it is just as important challenging as building new apps
                    4. Analyze clients need to develop the appropriate functionality, while not overbuilding - Translate
                     Specifications from analysts graphic designers into working applications
                    "
                  />

                  <Experience
                    durationTime="July 2018 - October 2019"
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
                          skill="SASS"
                          progress={100}
                        />
                        <Skills
                          skill="Bootstrap"
                          progress={100}
                          />
                          <Skills
                            skill="Tailwind"
                            progress={90}
                          />
                          <Skills
                              skill="Javascript"
                              progress={90}
                          />
                          <Skills
                              skill="React"
                              progress={80}
                          />
                          <Skills
                            skill="VueJS"
                            progress={80}
                            />
                          <Skills
                              skill="Jquery"
                              progress={90}
                          />
                            <Skills
                              skill="Ajax"
                              progress={90}
                              />
                                {/* <Skills
                                  skill="PHP"
                                  progress={90}
                                  />
                                  <Skills
                                      skill="Laravel"
                                      progress={90}
                                  />
                                  <Skills
                                    skill="MySQL"
                                    progress={100}
                                    />
                                    <Skills
                                      skill="MongoDB"
                                      progress={80}
                                      /> */}

              </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
