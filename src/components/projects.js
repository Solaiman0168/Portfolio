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
      <Card shadow={5} style={{width: '350px', height: '350px', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '180px', width: '350px', background: 'url(https://pbs.twimg.com/media/Dp0YXRhW4AAASaW.png) center / cover' }}>Bootstrap Project #1</CardTitle>

        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>

        <CardActions border style={{padding: '20px'}}>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
        </CardActions>

        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>

      </Card>
      {/* Project 2 */}
      <Card shadow={5} style={{width: '350px', height: '350px', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '180px', width: '350px', background: 'url(https://pbs.twimg.com/media/Dp0YXRhW4AAASaW.png) center / cover' }}>Bootstrap Project #2</CardTitle>

        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>

        <CardActions border style={{padding: '20px'}}>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
        </CardActions>

        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>

      </Card>
      {/* Project 3 */}
      <Card shadow={5} style={{width: '350px', height: '350px', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '180px', width: '350px', background: 'url(https://pbs.twimg.com/media/Dp0YXRhW4AAASaW.png) center / cover' }}>Bootstrap Project #3</CardTitle>

        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>

        <CardActions border style={{padding: '20px'}}>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
        </CardActions>

        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>

      </Card>
      </div>


    )
  } else if (this.state.activeTab === 1) {
    return(
      <div><h1>This is React</h1></div>
    )
  }
    else if (this.state.activeTab === 2) {
    return(
      <div><h1>This is PHP</h1></div>
    )
  } else if (this.state.activeTab === 3) {
    return (
      <div><h1>This is Laravel</h1></div>
    )
  }
}

  render() {
    return (
      <div className="category-tabs">
         <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>Bootstrap</Tab>
            <Tab>React</Tab>
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
