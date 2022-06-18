import './App.css';
import Header from './components/Header/Header';
import FarmContainer from './containers/FarmContainer';
import PlaySound from './components/Sound/sound';



function App() {
  return (
    <>
     <Header />
     <PlaySound />
     <FarmContainer />
    </>
  );
}

export default App;
