import './App.css';


import Header from './Header/Header.js';
import Home from './HomePage/Home.js'
import MarketPlace from './MarketPlace/MarketPlace.js';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';



function App() {
  return (
    <>
      <Router>

        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<MarketPlace />} />

        </Routes>
        

      </Router>
      
    </>
  );
}

export default App;
