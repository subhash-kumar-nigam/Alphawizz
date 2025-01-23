import React from 'react';
import { Products } from '../DATA/items';
import { Link } from 'react-router-dom';
// import { FaRupeeSign } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { ToastContainer, toast } from 'react-toastify';

const Product = () => {
 
  
 
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
   
    <div id='Products' className='my-7 ms-5'>
    <div className='flex'>
    <div className=''>
  <h1 className='font-semibold h-5 text-3xl'>New Products</h1>
  <p className='text-xl pt-2'>special</p>
  </div>
  <div className='ms-[1200px] mt-12 font-bold text-teal-400'>
    <Link to='/productall'><button>View All</button></Link>
  </div>
  </div>
  </div>
  <hr />
    <Carousel responsive={responsive} >
        {
            Products.map((product) => {
                return (
                    <div className='border border-yellow-50  pe-10 pb mt-6 mb-6 ps-12' key={product.id}>
                        <div className='flex'>
                        <h1 className='border border-teal-300 bg-teal-300 mt-2 rounded-e-lg'>15%off</h1>
                        <Link> <div className='mt-2  text-2xl ms-40'><h1 className=''><CiHeart /></h1></div></Link>
                        </div>
                    <div className=' flex ms-5 '>
                       
                         
                         <Link to={`/product/${product.id}`}> <img src={product?.image} alt="" className='h-44  mt-2 ' /></Link>
                         
                          </div>
                          <div className=''>
                               <h1 className='ms-[80px] mb-2 me-10 text-2xl  hover:text-teal-400'>{product?.title}</h1>
                             
                              <h2 className='ms-[90px] mb me-10'>₹{product.price}</h2>
                              </div>
                              <div className='flex border border-teal-400 bg-teal-400 p-1 pe-8  ms-[8px] m-2 rounded-md font-bold'>
                              <Link to=""> <button  > <div className='flex'>
                       <h1 className='text-2xl ps-4 text-white'><FaCartPlus /></h1>
                     <p className='ps-2 text-white'>Add To Cart</p>
                       </div></button> </Link>
                      </div> 
                    </div>
                )
            })
        }




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

export default Product;
