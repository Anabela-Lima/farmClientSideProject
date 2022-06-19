import React from 'react';

// importing my icon library
import initFontAwesome from './components/initFontAwesome.js'
import './App.css';
import Header from './Header/Header.js';
import FarmContainer from './HomePage/containers/FarmContainer.js';

// import { BrowserRouter as Router, Routes, Route}
//     from 'react-router-dom';
// import MarketPlace from './MarketPlace/MarketPlace';

import PlaySound from './components/Sound/sound';
import Footer from './components/ Footer/Footer';

initFontAwesome();





function App() {
  return (
    <>
      {/* <Router>

        <Routes>
          <Route path="./MarketPlace/MarketPlace.js" element={<MarketPlace />} />
        </Routes>
        
      </Router> */}

     <Header />
     <PlaySound />
     <FarmContainer />
     {/* <Footer /> */}
    <Footer/>
    
    
    
    </>
  );
}

export default App;
