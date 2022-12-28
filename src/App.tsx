import React from 'react';
import logo from './logo.svg';
import {Button} from '../src/components/button/Button'
import './App.css';
import '../src/assets/styles/jjomponent.scss'

function App() {
  return (
    <div style={{display:'flex',placeContent:'space-around',alignContent:'center', width:'100%', height:"100vh" , background:'lightgray', alignItems:'center'}}>
      <Button>HI</Button>    
      <Button href="www.naver.com">HI</Button>    
      <Button theme='ghost'>HI</Button>    
      <Button theme="success">HI</Button>    
      <Button theme="error">HI</Button>    
    </div>
  );
}

export default App;
