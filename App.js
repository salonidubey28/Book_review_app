import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust path as needed
import HomePage from './components/HomePage';
import BookDetailsPage from './components/BookDetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
