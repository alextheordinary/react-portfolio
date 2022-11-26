import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Navigation />
      <Footer />
    </div>
    </Router>
  );
};

export default App;
