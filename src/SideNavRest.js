import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {Tab,Row,Col,Nav,NavItem} from 'react-bootstrap';
import Result from './Result';
import Result1 from './Result1';
import Result2 from './Result2';
import './sideBar.css';

export default class SideNavRest extends Component{
render(){
return(
<Tab.Container id="left-tabs-example" defaultActiveKey="toprated" className="sideBar">
  <Row className="clearfix">
    <Col sm={2} className="px-2">
      <Nav bsStyle="pills" stacked style={{fontSize:'1.6em',fontFamily:"'Viga',sans-serif"}}>
        <NavItem eventKey="toprated">Top Rated</NavItem>
        <NavItem eventKey="biryani">Biryani</NavItem>
        <NavItem eventKey="desserts">Desserts</NavItem>
        <NavItem eventKey="kebab">Kebab Festival</NavItem>
        <NavItem eventKey="starter">Starters</NavItem>
        <NavItem eventKey="maincourse">Main Course</NavItem>
        <NavItem eventKey="combo">Combos</NavItem>
        <NavItem eventKey="meal">Meals</NavItem>
      </Nav>
    </Col>
    <Col sm={10}>
      <Tab.Content animation>
        <Tab.Pane eventKey="toprated"><Result/></Tab.Pane>
        <Tab.Pane eventKey="biryani"><Result1/></Tab.Pane>
        <Tab.Pane eventKey="desserts"><Result2/></Tab.Pane>
        <Tab.Pane eventKey="kebab"><Result/></Tab.Pane>
        <Tab.Pane eventKey="starter"><Result1/></Tab.Pane>
        <Tab.Pane eventKey="maincourse"><Result2/></Tab.Pane>
        <Tab.Pane eventKey="combo"><Result/></Tab.Pane>
        <Tab.Pane eventKey="meal"><Result1/></Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
);
}
}
