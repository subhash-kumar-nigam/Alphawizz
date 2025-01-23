import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Nav from '../Nav';
import Footer from '../Footer';


const Terms = () => {
  return (
    <div>
        <Navbar/>
        <Nav/>
       <div className=''>
      
        <div className='border border-black bg-teal-600 flex'>
        <h1 className='text-1xl font-bold my-10 mx-10'>TERMS & CONDITIONS</h1>
        <div className='flex list-none ms-[1100px] mt-10'>
        <Link to="/"><li>Home</li></Link>
        <li>/</li>
        <Link to="/about"><li className=''>About Us</li></Link>
        </div>
        </div>
      <h1 className='text-3xl font-bold items-center ms-[600px] mt-16'>Terms & Condition</h1>
      <p  className="ms-20">Terms And Conditions </p>
      <p className='mb-14 ms-20'>Alpha Silver is Multi-vendor Application from which user can purchase the products of Ecommerce according to their requirement</p>
     
    </div>
    <Footer/>
    </div>
  );
}

export default Terms;
