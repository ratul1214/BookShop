import React, { Component } from 'react';
import Header from '../header';
import Booklist from '../booklist';
import Footer from '../footer';
import Routnav from '../routnav';
import Courasol from '../courasol';
import Autoincrmnt from '../autoincrmnt';

class Home extends Component {
    render() {
        return (
            <div>
                
              <Courasol/>
              <Booklist/>
              <Booklist/>
              <Booklist/>
              <Autoincrmnt/>
              <Footer/>  
            </div>
        );
    }
}

export default Home;