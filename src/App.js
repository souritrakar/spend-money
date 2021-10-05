

import './App.css';


import React , {useState, useEffect} from "react"
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from './components/About';
import SpendMoney from './components/SpendMoney';
import ContextProvider from './components/ContextProvider';
import { containerClasses } from '@mui/material';


function App() {


  return (
    <ContextProvider>
    <Router>
    <div className="App">
  
    <Route path="/" exact component={SpendMoney} />
    <Route path="/about" component={About} />
  
    </div>
  </Router>
  </ContextProvider>
  );
}

export default App;
