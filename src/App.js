// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import StatePage from './StatePage';
import StateDetails from './StateDetails';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Product Import Dashboard</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/states">States</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/states" element={<StatePage />} />
            <Route path="/state/:id" element={<StateDetails />} />
            <Route path="/products" element={<ProductDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
