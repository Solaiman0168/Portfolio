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
              <h4 className='text-center' style={{color: 'grey'}}>Software Engineer</h4>
              <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
              <p className='text-center'>I graduated with BSc in Computer Science, from Lincoln University, Malaysia. I am a Software Engineer with profound knowledge of HTML/HTML5, CSS/CSS3, Bootstrap, Zurb Foundation, Tailwind, JavaScript, React JS, Vue JS, AJAX, jQuery, PHP(LARAVEL Framework) and the ability to design, maintain and manage enterprise level solutions effectively.</p>
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
                        durationTime="2014-2018"
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
                      
                      jobName="Software Engineer"
                      companyName="Combosoft Ltd"
                      durationTime="March 2020 - Present"
                      areaOfExpertise="Area of expertise:"
                      areaOfExpertiseDescription="HTML, CSS, SASS, Bootstrap, Zurb Foundation, Javascript, jQuery, Ajax, Vue Js, Laravel framework"
                      projects="Projects:"
                      projectsDescription="Warehouse Management System (Running), Warehouse Management System Website demo, eBay Templates, Email Templates."
                      dutiesResponsibilities="Duties/Responsibilities:"

                    jobDescription="
                      1.	Frontend Design & Customization
                      2.	Backend
                      3.	RESTful API development 
                    "
                  />

                  <Experience
                    durationTime="September 2019 – February 2020"
                    jobName="Web Developer"
                    companyName="BDSoft IT Solutions"
                    areaOfExpertise="Area of expertise:"
                    areaOfExpertiseDescription="HTML, CSS, Bootstrap, Javascript, jQuery, PHP"
                    projects="Projects:"
                    projectsDescription="Kochikantha Bidyaniketon and College, Edu care."
                    dutiesResponsibilities="Duties/Responsibilities:"
                    jobDescription="
                    1. Design implement for websites
                    2. Configure customize and integrate open source website for clients
                    3. Backend "
                    />

                    <hr style={{borderTop: '3px solid #e22947'}} />


                    <h2>Skills</h2>

                      <Skills
                        skill="HTML/CSS"
                        progress={100}
                        />
                         <Skills
                          skill="SASS"
                          progress={90}
                        />
                        <Skills
                          skill="Bootstrap"
                          progress={100}
                          />
                          <Skills
                            skill="Zurb Foundation"
                            progress={90}
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
                              skill="ReactJS"
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
                                  <Skills
                                      skill="Laravel"
                                      progress={90}
                                  />
                                  <Skills
                                    skill="MySQL"
                                    progress={90}
                                    />
                                    

              </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
