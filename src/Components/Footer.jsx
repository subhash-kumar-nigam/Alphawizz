import React from 'react';
// import { FaCaravan } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

// import { HiArrowPath } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      
      <div className='border-stone-300 bg-current p-1'>
      <div className="container text-center">
 
    <div className="col">
      <div className='flex'>
        <div className=' ms-16 mt-20 mb-20'>
          <img src="Images/newlogo22.png" alt="" className='h-24 w-30'  />
        </div>
        <div className=''>
        <h1 className='ms-28 mt-20 text-2xl font-bold text-white'>Get to know Us</h1>
        <h1 className='ms-auto text-teal-500 mb-4'>________</h1>
        <div className='flex text-white list-none ms-44 my-4'>
          <div className='ms-12'>
          <Link to="/"> <li className='me-40'>Home</li></Link>
          <Link to="/productall" ><li className='me-36'>Product</li></Link>
          <Link to="register"><li className='me-36'>Register</li></Link>
          <Link to="/contact"> <li className='me-32'>Contact Us</li></Link>
          </div>
          <div >
          <Link to="/catogary"> <li>Category</li></Link>
          <Link to="/Login"> <li className='me-4'>Login</li></Link>
          <Link to="/about"><li>About Us</li></Link>
          <Link to="/pro"><li className='me-4'>Sellers</li></Link>
          </div>
        </div>
        </div>
        <div className='ms-1'>
          <h1 className='text-white ms-28 mt-20 text-2xl font-bold'>Connect with Us</h1>
          <div className='text-white flex list-none ms-44 mt-3 gap-2 '>
            <li className='border border-white p-3 rounded-full bg-blue-400 '><a href="https://www.facebook.com/"><FaFacebook /></a></li>
            <li className='border border-white p-3 rounded-full bg-sky-500'><a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D&mx=2"><FiTwitter /></a></li>
            <li className='border border-white p-3 rounded-full bg-blue-600'><a href="https://www.instagram.com/"><FaInstagram /></a></li>
            <li className='border border-white p-3 rounded-full bg-red-600'><a href="https://www.youtube.com/"><FaYoutubeSquare /></a></li>
          </div>
          <div className='flex h-52 w-64 ms-44 mt-2 gap-3'>
           <li><img src="Images/header1.png" alt="" /></li>
           <li><img src="Images/header2.png" alt="" /></li>
           </div>
        </div>
       
      </div>
    </div>
  </div>
</div>
<div>

</div>
<hr />
 <div className='flex gap-72 p-6 border border-black bg-current '>

  <div className='ms-20 text-white'>
    <h3>Copyright@2024,All Right Reserved Alpha Platinum Private Limited</h3>
  </div>
  <div className='flex list-none gap-7 text-white'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/term">Terms & Condition</Link></li>
    <li><Link to="/policy">Privacy Policy</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/Login">Contact Us</Link></li>
  </div>
 </div>
  </div>
    
  );
}

export default Footer;
