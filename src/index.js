import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header'
import Booklist from './booklist';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import CountUp from 'react-countup';
import ScrollEvent from 'react-onscroll';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Home from './pages/home';
import Baseapp from './baseapp';


const HeaderApp = () =>{
    return <div>
        <h1>
            
            <Header/>
        </h1>
    </div>
}
const Booklist1 = () =>{
    return <div>
        <h1>
        <ScrollAnimation animateIn='fadeIn'
        duration= '5'
        >
            <Booklist/>
        </ScrollAnimation>
           
          
        <ScrollAnimation animateIn='fadeIn'
        duration= '5'
        >
            <Booklist/>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn'
        duration= '5'
        >
            <Booklist/>
        </ScrollAnimation>
       
        </h1>
    </div>
}
const Footerapp = () =>{
    return <div>
        <h1>
            <Footer/>
        </h1>
    </div>
}

ReactDOM.render(<Baseapp/>,document.querySelector('#header'));


