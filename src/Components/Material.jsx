import React from 'react';
import { Productall } from '../DATA/items';
import { Link } from 'react-router-dom';
// import { FaRupeeSign } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Material = () => {
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
    
  <hr />
    <Carousel responsive={responsive} >
        {
            Productall.map((item) => {
                return (
                    <div className='border border-yellow-50  pe-10 pb mt-6 mb-6 ps-12' key={item.id}>
                         <div className='flex'>
                        <h1 className='border border-teal-300 bg-teal-300 mt-2 rounded-e-lg'>15%off</h1>
                        <Link> <div className='mt-2  text-2xl ms-40'><h1 className=''><CiHeart /></h1></div></Link>
                                                                        </div>
                       
                    <div className=' flex ms-5'>
                         
                         <Link to={`/materialsingle/${item.id}`}> <img src={item?.image} alt="" className='h-44  mt-2 ' /></Link>
                        
                          </div>
                          <div className=''>
                               <h1 className='ms-[60px] mb-2 me- text-2xl  hover:text-teal-400'>{item?.name}</h1>
                             
                              <h2 className='ms-[90px] mb me-10'>₹{item.price}</h2>
                              </div>
                              <div className='flex border border-teal-400 bg-teal-400 p-1 pe-8  ms-[8px] m-2 rounded-md font-bold'>
                                <div className='flex'>
                       <Link><h1 className='text-2xl ps-4 text-white'><FaCartPlus /></h1></Link>
                       <Link><p className='ps-1 text-white'>Add To Cart</p></Link>
                       </div>
                      </div> 
                    </div>
                )
            })
           
        }
         <div className='border border-b-4 ps-20 mt-4'>
                  
                  <div className='mt-40 mb-24'>
                   <h1 className='me-12 font-bold text-2xl'>Offer</h1>
                   <h4 className='me-12'>Special Offer</h4>
                   <Link to="/materialone"><button className='me-12 font-bold text-teal-400'>View All</button></Link>
                   
                   </div>
                 </div>




    {/* {
        Products?.map((item) => {
            return (
               
            )
        })
    } */}
    </Carousel>
    </>
  );
}

export default Material;
