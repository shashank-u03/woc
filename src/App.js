import './App.css';
import React from 'react'
import NET from "vanta/dist/vanta.net.min";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Events from './components/Events';
import ContactUs from './components/ContactUs'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Timeline from './stages';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


class App extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xff0c19,
      backgroundColor: 0xa0a0b
    })
  }


  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }


    render(){
    return(
    <BrowserRouter basename='woc'>
      <ScrollToTop />
      <div id="parent" ref={this.vantaRef} className='min-h-screen'>
      <Navbar className="z-2"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Events />} />
        <Route path="/register" element={<ContactUs />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
    )
  }
}

export default App;

