import React from 'react'
import data from './components/back/Data.js/Data';
import Header from './components/front/Header/Header';
import Routes from './components/front/Routes/Routes';
import {BrowserRouter as  Router } from "react-router-dom";

 const App = () => {

  const {productos}= data;
    return (
    <div>
      <Router>
        <Header/>
        <Routes productos= {productos} />
      </Router>


    </div>
  );
};

export default App