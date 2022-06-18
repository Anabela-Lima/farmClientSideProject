import './App.css';
import Header from './Header/Header.js';
import FarmContainer from './HomePage/containers/FarmContainer.js';

// import { BrowserRouter as Router, Routes, Route}
//     from 'react-router-dom';
// import MarketPlace from './MarketPlace/MarketPlace';

import PlaySound from './components/Sound/sound';



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
    </>
  );
}

export default App;
