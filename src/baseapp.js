import React, { Component } from 'react';
import Header from './header';
import Routnav from './routnav';
import {BrowserRouter} from 'react-router-dom'

class Baseapp extends Component {
    render() {
        return (
            <div>
               <BrowserRouter>
              <Header/>
              <Routnav/>
              </BrowserRouter>  
            </div>
        );
    }
}

export default Baseapp;