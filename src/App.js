import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">SOLAIMAN HOSSAIN</Link>} scroll>
            <Navigation>
                <Link to="/resume"><b>RESUME</b></Link>
                <Link to="/aboutme"><b>ABOUT ME</b></Link>
                <Link to="/projects"><b>PROJECTS</b></Link>
                <Link to="/contact"><b>CONTACT</b></Link>
            </Navigation>
        </Header>

        {/*  -----------------
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
        <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </Navigation>
        </Drawer> ------------ */}
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
