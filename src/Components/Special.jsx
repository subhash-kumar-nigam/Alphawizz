import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Special = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 2000, min: 1000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1000, min: 524 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 524, min: 164 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 164, min: 0 },
          items: 1
        }
      };
  return (
    <>
  {/* <Navbar/>
  <Nav/> */}
   <div id='Products' className='my-7 ms-5'>
    <div className='flex'>
    <div className=''>
  <h1 className='font-semibold h-5 text-3xl'>New One</h1>
  <p className='text-xl pt-2'>Special Offer</p>
  </div>
  <div className='ms-[1200px] mt-12 font-bold text-teal-400'>
    <Link to='/specialall'><button>View All</button></Link>
  </div>
  </div>
  </div>
  <hr />
  <Carousel responsive={responsive} >
 
  
 
  
  
       <div className='border border-yellow-50  pe-10 pb mt-6 mb-6 ps-12'>
           <div className='flex'>
                                <h1 className='border border-teal-300 bg-teal-300 mt-2 rounded-e-lg'>15%off</h1>
                                <Link> <div className='mt-2  text-2xl ms-40'><h1 className=''><CiHeart /></h1></div></Link>
                                                                                </div>
        
        <div className=' flex'>
              {/* <span className='pt-2   '>0%Off</span> */}
             <Link to="/special"> <img src="Images/sp.jpg " alt="" className='h-44  mt-2 ' /></Link>
             {/* <Link> <div className='mt-2  text-2xl '><h1 className=''><CiHeart /></h1></div></Link> */}
              </div>
              <div className=''>
                   <h1 className='ms-[60px] mb-2 me-10 font-bold hover:text-teal-400'>Sheet</h1>
                   <strike className='ms-[50px] mb-2 me-10'> ₹ 1500</strike>
                  <h2 className='ms-[50px] mb me-10'>₹ 1400</h2>
                  </div>
                  <div className='flex border border-teal-400 bg-teal-400 p-1 pe-12  ms-[8px] m-2 rounded-md font-bold'>
                    <div className='flex text-white'>
           <Link><h1 className='text-2xl ps-4'><FaCartPlus /></h1></Link>
           <Link><p className='ps-1 me-'>Add To Card</p></Link>
           </div>
          </div> 
        </div>


</Carousel>;
  
  </>
  );
}

export default Special;
