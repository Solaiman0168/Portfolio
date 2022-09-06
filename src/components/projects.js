import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor (props) {
    super(props)
    this.state= { activeTab: 0 };
  }

toggleCategories () {

  if(this.state.activeTab === 0){
    return(

      <div className="projects-grid">



      {/* Project 1 */}
      <Card shadow={5} className="card-content">
        <CardTitle style={{color: 'black', height: '180px', width: '350px', background: 'url(https://pbs.twimg.com/media/Dp0YXRhW4AAASaW.png) center / cover' }}>Bootstrap Project #1</CardTitle>

        <CardText>
          This is a Kochikantha Bidyaniketon college website that was designed by Bootstrap framework.
        </CardText>

        <CardActions border style={{padding: '20px'}}>
            {/* <Button colored>Github</Button> */}
            <a className="projects-dec" href="http://www.kochikantha.edu.bd/"  rel="noopener noreferrer" target="_blank">
                Live
            </a>
        </CardActions>

        <CardMenu style={{color: '#ccc'}}>
            <IconButton name="share" />
        </CardMenu>

      </Card>
      {/* Project 2 */}
      <Card shadow={5} className="card-content">
        <CardTitle style={{color: 'black', height: '180px', width: '350px', background: 'url(https://pbs.twimg.com/media/Dp0YXRhW4AAASaW.png) center / cover' }}>Bootstrap Project #2</CardTitle>

        <CardText>
            BDSoft IT solution is a software company, this website designed by the Bootstrap framework.
        </CardText>

        <CardActions border style={{padding: '20px'}}>
            <a className="projects-dec" href="http://bdsoft.biz/"  rel="noopener noreferrer" target="_blank">
                Live
            </a>
        </CardActions>

        <CardMenu style={{color: '#ccc'}}>
            <IconButton name="share" />
        </CardMenu>

      </Card>

    </div>


    )
  } else if (this.state.activeTab === 1) {
    return(


         <div className="projects-grid">

            {/* Project 1 */}
            <Card shadow={5} className="card-content">
              <CardTitle style={{color: 'white', height: '180px', width: '350px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>React Project #1</CardTitle>

              <CardText>
                  Personal reactjs portfolio in Github
              </CardText>

              <CardActions border style={{padding: '20px',}}>
                  <a className="projects-dec" href="https://github.com/Solaiman0168/Portfolio"  rel="noopener noreferrer" target="_blank">
                      Github
                  </a>
              </CardActions>

              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>

            </Card>
            {/* Project 2 */}
            <Card shadow={5} className="card-content">
              <CardTitle style={{color: 'white', height: '180px', width: '350px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>React Project #2</CardTitle>

              <CardText>
               React JS personal portfolio
              </CardText>

              <CardActions border style={{padding: '20px'}}>
                  <a className="projects-dec" href="https://solaimanportfolio.netlify.app/"  rel="noopener noreferrer" target="_blank">
                      Live
                  </a>
              </CardActions>

              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>

            </Card>

          </div>
    )
  }
    else if (this.state.activeTab === 2) {
    return(
      <div className="projects-grid">

         {/* Project 1 */}
         {/* <Card shadow={5} style={{width: '350px', height: '350px', margin: 'auto'}}>
           <CardTitle style={{color: 'white', height: '180px', width: '350px', background: 'url(https://www.freepngimg.com/thumb/php/4-2-php-logo-transparent.png) center / cover' }}>PHP Project #1</CardTitle>

           <CardText>
               This is a Kochikantha Bidyaniketon college website that was made by the Bootstrap framework and PHP server-side language with MySQL database.
           </CardText>

           <CardActions border style={{padding: '20px'}}>
               <a className="projects-dec" href="http://www.kochikantha.edu.bd/"  rel="noopener noreferrer" target="_blank">
                   Live
               </a>
           </CardActions>

           <CardMenu style={{color: 'black'}}>
               <IconButton name="share" />
           </CardMenu>

         </Card> */}
         {/* Project 2 */}
         {/* <Card shadow={5} style={{width: '350px', height: '350px', margin: 'auto'}}>
           <CardTitle style={{color: 'white', height: '180px', width: '350px', background: 'url(https://www.freepngimg.com/thumb/php/4-2-php-logo-transparent.png) center / cover' }}>PHP Project #2</CardTitle>

           <CardText>
             Mullick and brother's is a book seller big E-commerce website.
               Technical environment: HTML, CSS, Bootstrap, PHP and MySQL
           </CardText>

           <CardActions border style={{padding: '20px'}}>
               <a className="projects-dec" href="https://mullickandbrothers.com/"  rel="noopener noreferrer" target="_blank">
                  Live
               </a>
           </CardActions>

           <CardMenu style={{color: 'black'}}>
               <IconButton name="share" />
           </CardMenu>

         </Card> */}

       </div>
    )
  } else if (this.state.activeTab === 3) {
    return (
      <div className="projects-grid">

         {/* Project 1 */}
         {/* <Card shadow={5} style={{width: '350px', height: '350px', margin: 'auto'}}>
           <CardTitle style={{color: 'black', height: '180px', width: '350px', background: 'url(https://www.juicymedia.co.uk/application/files/6115/1793/2313/Laravel_logo.png) center / cover' }}>Laravel Project #1</CardTitle>

           <CardText>
             This is an E-commerce website that is used for multipurpose product.
           </CardText>

           <CardActions border style={{padding: '20px'}}>
               <a className="projects-dec" href="https://github.com/Solaiman0168/laravel-ecommerce-application"  rel="noopener noreferrer" target="_blank">
                   Github
               </a>
           </CardActions>

           <CardMenu style={{color: '#ccc'}}>
               <IconButton name="share" />
           </CardMenu>

         </Card> */}

         {/* Project 3 */}
         {/* <Card shadow={5} style={{width: '350px', height: '350px', margin: 'auto'}}>
           <CardTitle style={{color: 'black', height: '180px', width: '350px', background: 'url(https://www.juicymedia.co.uk/application/files/6115/1793/2313/Laravel_logo.png) center / cover' }}>Laravel Project #3</CardTitle>

           <CardText>
             It's a Warehouse Management System web application.
           </CardText>

           <CardActions border style={{padding: '20px'}}>
               <a className="projects-dec" href="http://www.woowms.com/"  rel="noopener noreferrer" target="_blank">
                  Live
               </a>
           </CardActions>

           <CardMenu style={{color: '#ccc'}}>
               <IconButton name="share" />
           </CardMenu>

         </Card> */}
       </div>
    )
  }
}

  render() {
    return (
      <div className="category-tabs">
         <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>Bootstrap</Tab>
            <Tab>React</Tab>
            {/* <Tab>PHP</Tab>
            <Tab>Laravel</Tab> */}
        </Tabs>


          <Grid>
              <Cell col={12}>
                  <div className="Content">{this.toggleCategories()}</div>
              </Cell>
          </Grid>


      </div>
    );
  }
}

export default Projects;
