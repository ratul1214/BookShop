import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from './pages/home';
import Booksearch from './pages/booksearch';
import Bookdetails from './pages/bookdetails';



class Routnav extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/booksearch' component={Booksearch} />
                <Route exact path='/bookdetails'component={Bookdetails}  />

                
            </div>
        );
    }
}

export default Routnav;