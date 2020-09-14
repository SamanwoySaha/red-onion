import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Banner></Banner>
      <Shop></Shop>
    </div>
  );
}

export default App;
