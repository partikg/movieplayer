import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AddMovie from './pages/Movie/AddMovie';
import ViewMovie from './pages/Movie/ViewMovie';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <div className="flex">
      {location.pathname !== "/" && location.pathname !== "/Register" && <Sidebar />}
      <div className="flex-1">
        {location.pathname !== "/" && location.pathname !== "/Register" && <Header />}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movie/add" element={<AddMovie />} />
            <Route path="/movie/view" element={<ViewMovie />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App
