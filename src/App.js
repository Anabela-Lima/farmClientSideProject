import './App.css';
import Header from './web-pages/Header/Header.js';
import FarmContainer from './web-pages/HomePage/containers/FarmContainer.js';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import MarketPlace from './MarketPlace/MarketPlace';

import PlaySound from './web-pages/components/Sound/sound';



function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Marketplace" element={<MarketPlace />} />
    </Routes>
  </Router>,

     <Header />
     <PlaySound />
     <FarmContainer />
     {/* <Footer /> */}
    </>
  );
}

export default App;
