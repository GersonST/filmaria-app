import React, { Component } from 'react';
import './style.css';
import Routes from './routes';

//Url da ApI: https://sujeitoprogramador.com/r-api/?api=filmes/

class App extends Component{
  render(){
    return(
      <div className="app">
        <Routes/>
      </div>
    );
  }
}


export default App;
