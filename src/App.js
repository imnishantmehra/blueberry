import React from 'react'
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './Components/MainComponents/HomeScreen';
import DashboardScreen from './Components/MainComponents/DashboardScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
             <Route path='/' element={<HomeScreen/>} />
             <Route path='/dashboard' element={<DashboardScreen/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
