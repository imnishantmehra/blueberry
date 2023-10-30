import React from 'react'
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/Auth0Provider";
import HomeScreen from './Components/MainComponents/HomeScreen';
import DashboardScreen from './Components/MainComponents/DashboardScreen';
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Auth0ProviderWithHistory>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/dashboard" element={<ProtectedRoute component={DashboardScreen} />} />
          </Routes>
        </BrowserRouter>
      </Auth0ProviderWithHistory>
    </div>
  );
}

export default App;
