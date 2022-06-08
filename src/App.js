import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import { animals } from './data.js';

function App() {
  return (
    <div className="App">
      <Header greeting='farmer!' />
      <Main animals={animals}/>
      <Footer email='rigby335@hotmail.com'/>
    </div>
  );
}

export default App;
