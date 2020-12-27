import React, {Component} from 'react'; //if you don't import component here then you can extend React.component
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render(){
        return(
            <div className="nav">
                <Link to="/">Home</Link> | 
                <Link to="/menu"> Menu</Link> | 
                <Link to="/about"> About</Link>
            </div>
        )
    }
}

export default NavBar;