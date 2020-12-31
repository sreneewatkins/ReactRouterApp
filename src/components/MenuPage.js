import React, {Component} from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Menu component

class Menu extends Component {
    render(){
      return(
        <div>
          <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
            <Tab eventKey="appetizers" title="Appetizers">
              <p>Lorem Ipsum Menu Apps</p>
            </Tab>
            <Tab eventKey="entrees" title="Entrees">
              <p>Lorem Ipsum Menu Entrees</p>
            </Tab>
            <Tab eventKey="desserts" title="Desserts">
              <p>Lorem Ipsum Yummy Desserts</p>
            </Tab>
          </Tabs>
          <h1>Menu</h1>
          <p>Check out our amazing 24/7 menu:
            <ul>
              <li>Lazy Loading</li>
              <li>Dynamic Route Matching</li>
              <li>Location Transition Handling</li>
            </ul>
          </p>
          <h1>Appetizers</h1>
            <ul>
              <li>Baked Brussel Sprouts</li>
              <li>Baked Asparagus</li>
              <li>Edamame</li>
            </ul>
          <h1>Entrees</h1>
          <h1>Desserts</h1>
        </div>
      );
    }
  }

  export default Menu;