import React from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { HiArrowPath } from "react-icons/hi2";
import { FaCaravan } from "react-icons/fa6";



// border border-neutral-200

const Foot = () => {
  return (
    <div className='overflow-x-clip'>
       
            <div className=" text-center bg-teal-500 ">
        <div className="row ">
          <div className="col  p-8">
              <div className='flex'>
              <span className='h-14 w-36 ms-10'><FaCaravan className="text-5xl text-white" /></span>
              <div  className='ms-5'>
            <h1 className='text-white font-bold'>Fast Slipping</h1>
            <h2 className='mt-2 text-white'>Fast slipping at your door step</h2>
            </div>
          </div>
          </div>
          <div className="col p-8">
          <div className='flex'>
              <span className='h-14 w-36'><HiArrowPath className="text-5xl text-white" /></span>
              <div className='ms-5  '>
            <h1 className='text-white font-bold'>Free Return</h1>
            <h2 className='mt-2 text-white'>Free return if product are damages</h2>
            </div>
          </div>
          </div>
          <div className="col  p-8">
          <div className='flex'>
              <span className='h-14 w-36'><FaPhoneVolume className="text-4xl text-white" /></span>
              <div className='ms-12  '>
            <h1 className='text-white text-1xl font-bold'>Support 24X7</h1>
            <h2 className='mt-2  text-white'>24X7 and 365 days support in available</h2>
            </div>
          </div>
          </div>
          <div className="col p-8">
          <div className='flex ms-20 '>
              <span className=''><GoArrowRight className="text-4xl text-white font-bold" /></span>
            <h1 className='ms-4 mt-2 font-bold text-white'>Seller Login</h1>
            
          </div>
          </div>
        </div>
      </div>
          
    </div>
  );
}

export default Foot;

