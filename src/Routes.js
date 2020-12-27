import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import NavBar from './components/NavBarPage';

class Routes extends Component {
    render() {
        return(
            <Router>
                <NavBar />
                    <div>
                        <hr/>
                        <Route name="Home" exact path="/" component={HomePage} /> 
                        <Route name="Menu" path="/menu" component={MenuPage} /> 
                        <Route name="About" path="/about" component={AboutPage} />
                    </div>
            </Router>
        )
    }
}
export default Routes;

//ReactDOM.render(<Routes />); //is this right from slide 16
//I think this is needed when everything is in one file
