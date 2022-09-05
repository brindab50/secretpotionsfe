import './App.css';
import Header from './components/Header';
// import { withRouter, Route, Switch } from 'react-router-dom'
import ProductContainer from './Container.js/ProductContainer';
import React from 'react';




class App extends React.Component{ 


  render(){

    return(
      <div> 
        <Header />
        <ProductContainer /> 
        
      </div>
    )
  }
};

export default App 