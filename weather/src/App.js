import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import Loading from './components/Loading';
import API from './api/WeatherApi';
import './App.css';

function App() {
  return (
    <>  
    {/* <Loading /> */}
    <Header />
    <Main />
    {/* <API /> */}
    
    
    </>
    
  );
}

export default App;
