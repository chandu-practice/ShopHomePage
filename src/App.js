import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Section from './Components/Section';

function App() {
  let [cart,setCart]= useState(0);

  return (
    <>
      <Navbar cart={cart}/>
      <Header/>
      <Section setCart={setCart}/>
      <Footer/>
    </>
    
  )
}

export default App;
