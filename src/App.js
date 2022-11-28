import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <div className="container">
          <Routes>
            <Route
              path="/react-portfolio/"
              element={<AboutMe />}
            />
            <Route
              path="/react-portfolio/portfolio"
              element={<Portfolio />}
            />
            <Route
              path="/react-portfolio/contact"
              element={<Contact />}
            />
            <Route
              path="/react-portfolio/resume"
              element={<Resume />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
