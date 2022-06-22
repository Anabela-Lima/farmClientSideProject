import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Home from './HomePage/Home.js'
import MarketPlace from './MarketPlace/MarketPlace.js';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import HowToPlay from './HowToPlay/HowToPlay';
import Footer from './ Footer/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [farmsList, setFarmsList] = useState([]);

  useEffect( () => {
    getFarmData();
  });

  const getFarmData = async () => {

  axios.get('http://127.0.0.1:8080/farms/farms')
  .then(res => {
    const farmsList1 = res.data;
    setFarmsList(farmsList1);
  })
  .catch(err => console.log(err))

  }

  return (
    <>
      <Router>

        <Header />
        <Routes>

          <Route path="/" element={<Home farmsList={farmsList} setFarmsList={setFarmsList} />} />
          <Route path="/marketplace" element={<MarketPlace farmsList={farmsList} />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
        </Routes>

        <Footer/>
    
      </Router>
      
    </>
  );
}

export default App;
