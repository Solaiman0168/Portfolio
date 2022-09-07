import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';

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
        <CardTitle style={{color: 'black', height: '180px', width: '350px', background: 'url(https://pbs.twimg.com/media/Dp0YXRhW4AAASaW.png) center / cover' }}>Project #1</CardTitle>

        <CardText>
          This is a <b>Kochikantha Bidyaniketon college</b> website that was designed by Bootstrap framework.
          <p className='frontend-tech'><b>Frontend Technology:</b><br/>HTML, CSS, Bootstrap, Javascript, Jquery</p>
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
        <CardTitle style={{color: 'black', height: '180px', width: '350px', background: 'url(https://pbs.twimg.com/media/Dp0YXRhW4AAASaW.png) center / cover' }}>Project #2</CardTitle>

        <CardText>
            <b>BDSoft IT solutions</b> is a Web application company, I designed this website by the Bootstrap framework.
            <p className='frontend-tech'><b>Frontend Technology:</b><br/>HTML, CSS, Bootstrap, Javascript, Jquery</p>
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

      {/* Project 3 */}
      <Card shadow={5} className="card-content">
        <CardTitle style={{color: 'black', height: '180px', width: '350px', background: 'url(https://pbs.twimg.com/media/Dp0YXRhW4AAASaW.png) center / cover' }}>Project #3</CardTitle>

        <CardText>
            <b>Warehouse Management System</b> is a Inventory Software, this software has integrated to many E-commerce market place. We have integrated WooCommerce, OnBuy, eBay, Amazon, Shopify, Royal Mail and DPD. This inventory software full admin panel frontend part I have designed it by Bootstrap, few places Vue JS, Javascript, jQuery.
            <p className='frontend-tech'><b>Frontend Technology:</b><br/>HTML, CSS, Bootstrap, Javascript, Jquery, Vue js</p>
        </CardText>

        <CardActions border style={{padding: '20px'}}>
            <a className="projects-dec" href="https://wms360.co.uk/"  rel="noopener noreferrer" target="_blank">
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
