import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Cards from './components/Cards';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Memories from './components/pages/Memories';
import Story from './components/pages/Story';
import Tokens from './components/pages/Tokens';
import Nashe from './components/pages/Nashe';
import Dates from './components/pages/Dates';
import Bts from './components/pages/Bts';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/memories' component={Memories} />
        <Route path='/ourstory' component={Story} />
        <Route path='/tokens' component={Tokens} />
        <Route path='/nashe' component={Nashe} />
        <Route path='/dates' component={Dates} />
        <Route path='/bts' component={Bts} />
      </Switch>
      <Footer/>
    </Router>
  </>
  );
}

export default App;
