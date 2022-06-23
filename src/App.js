import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Home from './HomePage/Home.js'
import MarketPlace from './MarketPlace/MarketPlace.js';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import HowToPlay from './HowToPlay/HowToPlay';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from "./BackUpFooter/Footer";
import InfoPage from "./InfoPage/InfoPage";
import HelpPage from "./HelpPage/HelpPage"


function App() {

  const [farmsList, setFarmsList] = useState([]);

  useEffect( () => {

    async function getFarmData() {

      await axios.get('http://127.0.0.1:8080/farms/farms')
      .then(res => {
        const farmsList1 = res.data;
        setFarmsList(farmsList1);
      })
      .catch(err => console.log(err))

    }

    getFarmData();
});


  return (
    <>
      <Router>

        <Header />
        <Routes>

          <Route path="/" element={<Home farmsList={farmsList} setFarmsList={setFarmsList} />} />
          <Route path="/marketplace" element={<MarketPlace farmsList={farmsList} />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/infopage" element={<InfoPage />}/>
          <Route path="/help" element={<HelpPage />} />
        </Routes>

        <Footer />
    
      </Router>
      
    </>
  );
}

export default App;
