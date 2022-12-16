import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Homepage />
    </React.Fragment>

  );
}

export default App;
