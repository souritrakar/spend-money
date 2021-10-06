

import './App.css';
import React  from "react"
import { BrowserRouter as Router, HashRouter, Route} from "react-router-dom";
import About from './components/About';
import SpendMoney from './components/SpendMoney';
import ContextProvider from './components/ContextProvider';


function App() {


  return (
    <ContextProvider>
    <HashRouter>
    <div className="App">
  
    <Route exact path="/" exact component={SpendMoney} />
    <Route path="/about" component={About} />
  
    </div>
  </HashRouter>
  </ContextProvider>
  );
}

export default App;
