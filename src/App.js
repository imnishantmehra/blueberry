import React from 'react'
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './Components/MainComponents/HomeScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
             <Route path='/' element={<HomeScreen/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
