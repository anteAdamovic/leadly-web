import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Home } from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/about" element={<div>ABOUT</div>}>
        </Route>
        <Route path="/users" element={<div>USERS</div>}>
        </Route>
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
