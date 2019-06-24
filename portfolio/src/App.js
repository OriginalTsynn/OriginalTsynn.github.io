import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import NavigationBar from './components/NavigationBar'
import { Link } from 'react-router-dom'



function App() {
  return (

<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Nathan Rotach" scroll>
            <Navigation>
                 <Link to="/">Home</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <a href="https://docs.google.com/document/d/1afTp2aHgYrZoI5IR_QO6A8d-NFEAsHHpXcOkHMe6BUU/edit?usp=sharing" target="_blank">Resume</a>
                  <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Nathan Rotach">
            <Navigation>
               <Link to="/">Home</Link>
               <Link to="/aboutme">About Me</Link>
               <Link to="/projects">Projects</Link>
               <a href="https://docs.google.com/document/d/1afTp2aHgYrZoI5IR_QO6A8d-NFEAsHHpXcOkHMe6BUU/edit?usp=sharing" target="_blank">Resume</a>
               <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
                   <NavigationBar />


        </Content>
    </Layout>
    {/* // <div className="demo-big-content">
    // <Layout>
    //     <Header className="header-color" scroll>
    //         <Navigation>
    //             <Link to="/">Home</Link>
    //              <Link to="/aboutme">About Me</Link>
    //              <Link to="/projects">Projects</Link>
    //              <a href="https://docs.google.com/document/d/1afTp2aHgYrZoI5IR_QO6A8d-NFEAsHHpXcOkHMe6BUU/edit?usp=sharing" target="_blank">Resume</a>
    //              <Link to="/contact">Contact</Link>
    //         </Navigation>
    //     </Header>
    //     <Drawer >
    //         <Navigation>
    //           <Link to="/">Home</Link>
    //           <Link to="/aboutme">About Me</Link>
    //           <Link to="/projects">Projects</Link>
    //           <a href="https://docs.google.com/document/d/1afTp2aHgYrZoI5IR_QO6A8d-NFEAsHHpXcOkHMe6BUU/edit?usp=sharing" target="_blank">Resume</a>
    //           <Link to="/contact">Contact</Link>
    //         </Navigation>
    //     </Drawer>
    //     <Content>
    //         <div className="page-content" />
    //         <NavigationBar />
    //     </Content>
    // </Layout>
    // </div> */}
</div>

  );
}

export default App;
