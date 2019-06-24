import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import NavigationBar from './components/NavigationBar'
import { Link } from 'react-router-dom'
// import PDFViewer from './components/PDFviewer'

function App() {
  return (
    <div className="App">
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                 <a href="https://docs.google.com/document/d/1afTp2aHgYrZoI5IR_QO6A8d-NFEAsHHpXcOkHMe6BUU/edit?usp=sharing" target="_blank">Resume</a>
                 <Link to="/aboutme">About Me</Link>
                 <Link to="/projects">Projects</Link>
                 <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer >
            <Navigation>
              <Link to="/">Home</Link>
              <a href="https://docs.google.com/document/d/1afTp2aHgYrZoI5IR_QO6A8d-NFEAsHHpXcOkHMe6BUU/edit?usp=sharing" target="_blank">Resume</a>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <NavigationBar />
            {/* <PDFViewer /> */}
        </Content>
    </Layout>
      </div>
    </div>
  );
}

export default App;