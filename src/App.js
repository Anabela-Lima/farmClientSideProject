import './App.css';
import Header from './Header/Header.js';
import FarmContainer from './HomePage/containers/FarmContainer.js';
// import { BrowserRouter as Router, Routes, Route}
//     from 'react-router-dom';
// import MarketPlace from './MarketPlace/MarketPlace';


function App() {
  return (
    <>
      {/* <Router>

        <Routes>
          <Route path="./MarketPlace/MarketPlace.js" element={<MarketPlace />} />
        </Routes>
        
      </Router> */}

      <Header />
      <FarmContainer />
    </>
  );
}

export default App;
