import React, { useState } from 'react';
import './App.css';

import Header from './Header/Header.js';

import Home from './HomePage/Home.js'
import MarketPlace from './MarketPlace/MarketPlace.js';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import HowToPlay from './HowToPlay/HowToPlay';
import Footer from './ Footer/Footer';

// importing my icon library

import initFontAwesome from './ Footer/initFontAwesome.js'
// importing crops page
import InfoPage from './InfoPage/InfoPage';
initFontAwesome();
// importing my icon library



function App() {

  
  return (
    <>
      <Router>

        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/infopage" element={< InfoPage/>} />
        </Routes>

        <Footer/>
    
      </Router>

     
      
    </>
  );
}

export default App;
