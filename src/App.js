import { Context } from './context';
import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Home from './HomePage/Home.js'
import MarketPlace from './MarketPlace/MarketPlace.js';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import HowToPlay from './HowToPlay/HowToPlay';

import HelpPage from './HelpPage/HelpPage';
import Footer from './ Footer/Footer';

// importing my icon library

import initFontAwesome from './ Footer/initFontAwesome.js'
// importing crops page
import InfoPage from './InfoPage/InfoPage';
initFontAwesome();
// importing my icon library



function App() {

  const [context, setContext] = useState('');
  
  return (
    <>
      <Router>
        <Context.Provider value = {[context, setContext]}>
          <Header />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<MarketPlace />} />
          
            <Route path="/how-to-play" element={<HowToPlay />} />
            <Route path="/help.asp" element={<HelpPage/>}/>
          </Routes>

          <Footer />
        </Context.Provider>

      </Router>



     
      
    </>
  );
}

export default App;
