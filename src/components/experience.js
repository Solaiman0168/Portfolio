import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.durationTime}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <h6 style={{marginTop:'0px'}}>{this.props.companyName}</h6>
          <h6 style={{marginTop:'0px', marginBottom: '0px'}}>{this.props.areaOfExpertise}</h6><hr />
          <p>{this.props.areaOfExpertiseDescription}</p>
          <h6 style={{marginTop:'0px', marginBottom: '0px'}}>{this.props.projects}</h6><hr />
          <p>{this.props.projectsDescription}</p>
          <h6 style={{marginTop:'0px', marginBottom: '0px'}}>{this.props.dutiesResponsibilities}</h6><hr />
          <p>{this.props.jobDescription}</p>
          
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
