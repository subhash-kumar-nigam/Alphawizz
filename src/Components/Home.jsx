import React, { useState } from 'react';
import Navbar from './Navbar';
import Nav from './Nav';
import Slider from './Slider';
import Category from './Category';
import Product from './Product';
import Download from './Download';
import Footer from './Footer';

import Foot from './Foot';
import Special from './Special';
import Material from './Material';





const Home = () => {


  


  
  return (
    <div>
      <Navbar />
      <Nav/>
      <Slider/>
      <Category/>
      <Product />
      
      <Material/>
      <Special/>
      <Download/>
      <Foot/>
      <Footer/>
     
     
    </div>
  );
}

export default Home;
