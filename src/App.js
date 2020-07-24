import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Col,Container,Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
          <div className="header">
            <h1> B </h1>
          </div>
          <Container fluid={true} style={{'margin-top': '100px'}}>
            <Row>
              <Col md={8}>
                <div className="intro">
                  <p><img style={{float: 'right',width:'250px',height:'250px'}} src='coding__isometric.svg'/>Hi Iam <span>Balajee</span>, <br/>
                  A Software engineer who is interested in working on new technologies.
                  Currently working on Hadoop platform in building batch and real time data pipelines.
                  My previous experience include building a product from scratch in a startup as an individual contributor.</p>
                </div>
              </Col>
              <Col md={4}>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col md={{offset: 6,span: 6}}>
                <div className="skillSet">
                  <img src={'data_process.svg'} style={{float: 'left',width:'250px',height:'250px'}}/>
                    Backend Skills:
                    <img alt="java" src="java.png" title="java"/>
                    <img alt="python" src="python.svg" title="python"/>
                    <img alt="django" src="django.svg" title="django"/>
                    <img alt="mysql" src="mysql.png" title="mysql"/><br />
                    Front-end Skills:
                    <img src="react.png" title="react"/>
                    <img alt="ember" src="ember.svg" title="ember"/>
                    <img alt="angular" src="angular.svg" title="angular"/><br />
                    DataEngineering: 
                    <img src="hadoop.svg" title="hadoop"/>
                    <img src="kafka.jpg" title="kafka"/>
                    <img src="bash.png" title="bash"/>
                    <img alt="python" src="python.svg" title="python"/>
                    <img alt="sqoop" src="sqoop.png" title="sqoop"/><br />                    
                </div>
              </Col>
            </Row>
            <br />
            <Row className="timeline-row">
              <Col md={12}>
                <div className="timeline">
                  <p className="timeline-start"> Now</p>
                  <Container className="timeline-container left">
                    <p className="content">                  
                      <h3>2020</h3>
                      <p className="role"> Senior Software Engineer at Freshworks</p>
                      <p className="works"> Worked in building batch and real-time pipelines</p>
                      <div className="frameworks">
                        <img alt="kudu" src="kudu.png" title="kudu"/>
                        <img src="kafka.jpg" title="kafka"/>
                        <img src="hadoop.svg" title="hadoop"/>
                        <img src="react.png" title="react"/>
                        <img src="java.svg" title="java"/>
                      </div>
                    </p>
                  </Container>
                  <Container className="timeline-container right">
                    <p className="content">
                      <h3>2018</h3>
                      <p className="role"> Software Engineer @ Freshworks</p>
                      <p className="works"> Worked in modifying the Front-end of Cloudera Hue, Apache Zeppelin to improve the User Experience</p>
                      <div className="frameworks">
                          <img alt="ember" src="ember.svg" title="ember"/>
                          <img src="javascript.svg" title="javascript"/>
                          <img src="django.svg" title="django"/>
                          <img src="python.svg" title="react"/>
                          <img src="java.svg" title="java"/>
                      </div>
                    </p>
                  </Container>
                  <Container className="timeline-container left">
                    <p className="content">
                      <h3>2017</h3>
                      <p> Software Engineer @ Detect Technologies </p>
                      <p> Built a product(WebApp for monitoring the leakages from pipelines/cylingers in factories) from scratch using Django and angular2</p>
                      <div className="frameworks">
                          <img alt="ember" src="angular.svg" title="ember"/>
                          <img src="javascript.svg" title="javascript"/>
                          <img src="html.png" title="html"/>
                          <img src="css.png" title="css"/>
                          <img src="python.svg" title="python"/>
                          <img src="django.svg" title="django"/>
                      </div>
                    </p>
                  </Container>
                </div>
              </Col>
            </Row>
            <Row>  
              <div className="blogs">
                <div className="blog"></div>
              </div>
            </Row>  
          </Container>
          <div className="footer">            
            <span>&#169; Balajee</span>
          </div>
    </div>
  );
}

export default App;
