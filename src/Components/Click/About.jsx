import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Nav from '../Nav';
import Footer from '../Footer';


const About = () => {
  return (
    <div>
        <Navbar/>
        <Nav/>
       <div className=''>
      
        <div className='border border-black bg-teal-600 flex'>
        <h1 className='text-1xl font-bold my-10 mx-10'>ABOUT US</h1>
        <div className='flex list-none ms-[1100px] mt-10'>
        <Link to="/"><li>Home</li></Link>
        <li>/</li>
        <Link to="/about"><li className=''>About Us</li></Link>
        </div>
        </div>
      <h1 className='text-3xl font-bold items-center ms-[600px] mt-16'>About Us</h1>
      <p  className="ms-20">Terms And Conditions </p>
      <p className='mb-14 ms-20'>Alpha Silver is online store and wholesale dealer in India dealing in all Home Appliances With over 10,000 products and over a 1000 brands in our catalogue you will find everything you are looking for Right from TV, Washing Machine, Refrigerator, AC, Air Coolers, Audio Devices(Headphones/Speakers), Gas Stoves, Electric Stoves Etc.., Choose from a wide range of options in every category, exclusively handpicked to help you find the best quality available at the lowest prices. We will Deliver with In 24 hours. In case of any queries or further details feel free to write to Us on support@alphasilver.in</p>
     
    </div>
    <Footer/>
    </div>
  );
}

export default About;
