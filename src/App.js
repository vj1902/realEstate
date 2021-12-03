
import './App.css';
import Card1 from './components/Card1';
import Details from './components/Details';

import Header from './components/Header';
import Recomd from './components/Recomd';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from 'react-router-dom';
import React from 'react';
import Pop from './components/Pop';

const Home = () => (
    <React.Fragment>
      <Header />
      <Card1 />
      <Recomd />
    </React.Fragment>
);
function App() {

  return (
    <div className="App">
      <div>

        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Details/:id" element={<Details />} />
           
          </Routes>
        </Router>



      </div>
    </div>
  );
}

export default App;
