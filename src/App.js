import { Route, Routes } from 'react-router-dom';

import Homepage from './components/Homepage';
import Header from './components/Header';
import Allbeers from './components/Allbeers';
import Beer from './components/Beer';

import './App.css'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path='/beers' element={<div><Header/><Allbeers/></div>} />
        <Route path='/beers/:_id' element={<div><Header/><Beer/></div>} />
        <Route path="*" element={ <h1>Error</h1> } />
      </Routes>
    </div>
  );
}

export default App;
