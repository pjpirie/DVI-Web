import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content__Container">
          <Switch>
            <Route path="/DVI-Web/" exact component={Landing} />
            <Route path="/DVI-Web/about" component={About} />
            <Route path="/DVI-Web/contact" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
