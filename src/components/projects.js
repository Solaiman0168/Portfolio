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
        <CardTitle className='title-img' style={{color: 'black', height: '180px', width: '350px', background: 'url(https://pbs.twimg.com/media/Dp0YXRhW4AAASaW.png)' }}>Project #1 (Running)</CardTitle>

        <CardText>
            <b>Warehouse Management System</b> is a Inventory Software, this software has integrated to many E-commerce market place. We have integrated WooCommerce, OnBuy, eBay, Amazon, Shopify, Royal Mail and DPD. This inventory software full admin panel frontend part I have designed it by Bootstrap, few places Vue JS, Javascript, jQuery.
            <p className='frontend-tech'><b>Frontend Technology:</b><br/>HTML, CSS, Bootstrap, Javascript, Jquery, Vue js</p>
        </CardText>

        <CardActions border style={{padding: '20px'}}>
            <a className="projects-dec" href="https://github.com/Solaiman0168/Warehouse-Management-System--WMS360-"  rel="noopener noreferrer" target="_blank">
            Github Link
            </a>
        </CardActions>

        <CardMenu style={{color: '#ccc'}}>
            <IconButton name="share" />
        </CardMenu>

      </Card>

      {/* Project 2 */}
      <Card shadow={5} className="card-content">
        <CardTitle className='title-img' style={{color: 'black', height: '180px', width: '350px', background: 'url(https://pbs.twimg.com/media/Dp0YXRhW4AAASaW.png)' }}>Project #2</CardTitle>

        <CardText>
          <b>Warehouse Management System Website demo</b> that was designed by Bootstrap framework.
          <p className='frontend-tech'><b>Frontend Technology:</b><br/>HTML, CSS, Bootstrap, Javascript, Jquery</p>
        </CardText>

        <CardActions border style={{padding: '20px'}}>
            {/* <Button colored>Github</Button> */}
            <a className="projects-dec" href=" https://github.com/Solaiman0168/WMS-UI"  rel="noopener noreferrer" target="_blank">
            Github Link
            </a>
        </CardActions>

        <CardMenu style={{color: '#ccc'}}>
            <IconButton name="share" />
        </CardMenu>

      </Card>

      {/* Project 3 */}
      <Card shadow={5} className="card-content">
        <CardTitle className='title-img' style={{color: 'black', height: '180px', width: '350px', background: 'url(https://pbs.twimg.com/media/Dp0YXRhW4AAASaW.png)' }}>Project #3</CardTitle>

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
      {/* Project 3 */}
      <Card shadow={5} className="card-content">
        <CardTitle className='title-img' style={{color: 'black', height: '180px', width: '350px', background: 'url(https://pbs.twimg.com/media/Dp0YXRhW4AAASaW.png)' }}>Project #4</CardTitle>

        <CardText>
            <b>Educare</b> is a free education website demo, I designed this website by the Bootstrap framework.
            <p className='frontend-tech'><b>Frontend Technology:</b><br/>HTML, CSS, Bootstrap, Javascript, Jquery</p>
        </CardText>

        <CardActions border style={{padding: '20px'}}>
            <a className="projects-dec" href="https://github.com/Solaiman0168/educare"  rel="noopener noreferrer" target="_blank">
                Github Link
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
            {/* <Card shadow={5} className="card-content">
              <CardTitle className='title-img' style={{color: 'white', height: '180px', width: '350px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png)' }}>React Project #1</CardTitle>

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

            </Card> */}

            {/* Project 2 */}
            <Card shadow={5} className="card-content">
              <CardTitle  className='title-img' style={{color: 'white', height: '180px', width: '350px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png)' }}>Project #1</CardTitle>

              <CardText>
               <b>Personal portfolio</b><br /><br />
               <p className='frontend-tech'><b>Frontend Technology:</b><br/>HTML, CSS, ReactJS</p>
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

            {/* Project 2 */}
            <Card shadow={5} className="card-content">
              <CardTitle  className='title-img' style={{color: 'white', height: '180px', width: '350px', background: 'url(https://res.cloudinary.com/practicaldev/image/fetch/s--P_juG974--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/http://timrijkse.nl/images/vue-full-guide.png)' }}>Project #1</CardTitle>

              <CardText>
               <b>Inventory Management System</b><br /><br />
               <p className='frontend-tech'><b>Frontend Technology:</b><br/>HTML, CSS, VueJS</p>
              </CardText>

              <CardActions border style={{padding: '20px'}}>
                  <a className="projects-dec" href="https://github.com/Solaiman0168/Inventory"  rel="noopener noreferrer" target="_blank">
                      Github link
                  </a>
              </CardActions>

              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>

            </Card>

          </div>
    )
  }
    else if (this.state.activeTab === 3) {
    return(
      <div className="projects-grid">

         {/* Project 1 */}
         <Card shadow={5}  className="card-content">
           <CardTitle  className='title-img' style={{color: 'white', height: '180px', width: '350px', background: 'url(https://www.freepngimg.com/thumb/php/4-2-php-logo-transparent.png)' }}>Project #1</CardTitle>

           <CardText>
           Kochikantha Bidyaniketon and college.
           <p className='frontend-tech'><b>Backend Technology:</b><br/>PHP, MySql</p>
           </CardText>

           <CardActions border style={{padding: '20px'}}>
               <a className="projects-dec" href="http://www.kochikantha.edu.bd/"  rel="noopener noreferrer" target="_blank">
                   Live
               </a>
           </CardActions>

           <CardMenu style={{color: 'black'}}>
               <IconButton name="share" />
           </CardMenu>

         </Card>
         {/* Project 2 */}
         {/* <Card shadow={5}  className="card-content">
           <CardTitle style={{color: 'white', height: '180px', width: '350px', background: 'url(https://www.freepngimg.com/thumb/php/4-2-php-logo-transparent.png) center / cover' }}>Project #2</CardTitle>

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
  } else if (this.state.activeTab === 4) {
    return (
      <div className="projects-grid"> 

         {/* Project 1 */}
         <Card shadow={5}  className="card-content">
           <CardTitle className='title-img' style={{color: 'black', height: '180px', width: '350px', background: 'url(https://www.juicymedia.co.uk/application/files/6115/1793/2313/Laravel_logo.png)' }}>Project #1 (Running)</CardTitle>

           <CardText>
           <b>Warehouse Management System</b> <br /> <br />
           <b>Description:</b> WMS360 is the ultimate solution for multichannel e-commerce business. Channel integration with WooCommerce, Amazon, eBay, OnBuy, Shopify, Royal Mail, DPD (Royal Mail & DPD are the British multinational postal service and courier service). This WMS software can use new client by creating new project via this link https://wms360.co.uk/plans/    First you have to choose your plan then clients can use WMS new project individually.<br /> <br />
           <b>Main features:</b> 1. Multichannel Inventory 2. Multichannel stock sync 3. Make stock adjustment 4. Automatically sync inventory to avoid overselling 5. Manage multichannel orders 6. Find orders with search & filters 7. Bulk CSV import & export 8. Pick and pack flawlessly by mobile app <br /> <br />
           <p className='frontend-tech'><b>Backend Technology:</b><br/>Laravel, MySQL</p>
           </CardText>

           <CardActions border style={{padding: '20px'}}>
               <a className="projects-dec" href="https://github.com/Solaiman0168/Warehouse-Management-System--WMS360-"  rel="noopener noreferrer" target="_blank">
                  Github link
               </a>
           </CardActions>

           <CardMenu style={{color: '#ccc'}}>
               <IconButton name="share" />
           </CardMenu>

         </Card>

         {/* Project 2 */}
         <Card shadow={5}  className="card-content">
           <CardTitle  className='title-img' style={{color: 'black', height: '180px', width: '350px', background: 'url(https://www.juicymedia.co.uk/application/files/6115/1793/2313/Laravel_logo.png)' }}>Project #2 (Running)</CardTitle>

           <CardText>
           <b>Inventory Management System</b><br /><br />
           <p className='frontend-tech'><b>Backend Technology:</b><br/>Laravel, Mysql</p>
           </CardText>

           <CardActions border style={{padding: '20px'}}>
               <a className="projects-dec" href="https://github.com/Solaiman0168/Inventory"  rel="noopener noreferrer" target="_blank">
                   Github link
               </a>
           </CardActions>

           <CardMenu style={{color: '#ccc'}}>
               <IconButton name="share" />
           </CardMenu>

         </Card>

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
            <Tab>Vue</Tab>
            <Tab>PHP</Tab>
            <Tab>Laravel</Tab>
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
