import React from 'react';
import { useState } from "react";
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom';

function App() {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" style={{ display: 'block' }} title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">SOLAIMAN HOSSAIN</Link>} scroll>
        <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
            <Navigation  className={isNavExpanded ? "mbl-navigation" : "mdl-navigation"}>
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
