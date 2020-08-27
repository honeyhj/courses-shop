import React from 'react';
import logo from './components/img/index.jpg';
import './App.css';
import Shop from './components/Shop/Shop';
import img from './components/img/pexels-dominika-roseclay-912410.jpg'

function App() {
  return (
    <div className="app ">
      <h1 className="text-center py-5">Welcome to Course Tutorials</h1>
      <div>
        <Shop></Shop>
      </div>
    </div>
  );
}

export default App;
