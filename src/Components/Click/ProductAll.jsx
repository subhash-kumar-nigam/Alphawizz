import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { All } from '../../DATA/items';
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Navbar from '../Navbar';
import Nav from '../Nav';
import Footer from '../Footer';


const ProductAll = ({ All }) => {
 
  return (
    <div>
        <Navbar/>
        <Nav/>
         <div className='border border-yellow-50 bg-teal-200 flex'>
                            <h1 className='text-1xl font-bold my-8 mx-8'>NEW PRODUCT PRODUCTS</h1>
                            <div className='flex list-none ms-[1100px] mt-7'>
                            <Link to="/"><li>Home</li></Link>
                            <li>/</li>
                            <Link to="/seller"><li className=''>Seller</li></Link>
                            
                            </div>
                            </div>
                               <div>
                                    <div className='list-none flex'>
                                    <li><h4 className='ms-12 mt-10 '>Sort-By:</h4></li>
                                    <li className='ms-10 mt-10'>
                                    <div className="dropdown border border-yellow-50 px-10 py-2 mb-2 hover:border-teal-500">
                              <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Top Rates
                              </a>
                            
                              <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/high">Relevanse</Link></li>
                                <li><Link className="dropdown-item" to="/top">Top Rates</Link></li>
                                <li><Link className="dropdown-item" to="/range">Newest First</Link></li>
                                <li><Link className="dropdown-item" to="/medium">Oldest First</Link></li>
                                 <li><Link className="dropdown-item" to="/low">Price Low To High</Link></li>
                                  <li><Link className="dropdown-item" to="/high">Price High To Kow</Link></li>
                              </ul>
                            </div>
                                    </li>
                                   
                                    
                                    <li  className='ms-[520px] mt-10'>
                                    <div className="dropdown border border-yellow-50 px-10 py-2 mb-2">
                              <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Show: 
                              </a>
                            
                              <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/seller">12</Link></li>
                                <li><Link className="dropdown-item" to="/seller">16</Link></li>
                                <li><Link className="dropdown-item" to="/seller">20</Link></li>
                                <li><Link className="dropdown-item" to="/seller">24</Link></li>
                              </ul>
                            </div>
                                    </li>
                                    </div>
                         
                              </div>        
                                              <div className='container-fluid px-5'>
                                <div className='row'>
                                    {/* <div className='col-3 border'>
                                             
                                    </div> */}
                                      {
                     All.map((product) => {
                    return (
                        <div className='col-3 border ' key={product.id}>
                      <div className='border border-yellow-50  pe-10 pb mt-6 mb-6 ps-12' >
                        <div className='flex'>
                        <h1 className='border border-teal-300 bg-teal-300 mt-2 rounded-e-lg'>15%off</h1>
                        <Link> <div className='mt-2  text-2xl ms-40'><h1 className=''><CiHeart /></h1></div></Link>
                        </div>
                    <div className=' flex ms-5 '>
                       
                         
                         <Link to={`/productall/${product.id}`}> <img src={product?.image} alt="" className='h-44  mt-2 ' /></Link>
                         
                          </div>
                          <div className=''>
                               <h1 className='ms-[80px] mb-2 me-10 text-2xl  hover:text-teal-400'>{product?.title}</h1>
                             
                              <h2 className='ms-[90px] mb me-10'>₹{product.price}</h2>
                              </div>
                              <div className='flex border border-teal-400 bg-teal-400 p-1 pe-8  ms-[8px] m-2 rounded-md font-bold'>
                                <div className='flex'>
                       <Link><h1 className='text-2xl ps-4 text-white'><FaCartPlus /></h1></Link>
                       <Link  ><button  className='ps-1 text-white'>Add To Cart</button></Link>
                       </div>
                      </div> 
                      </div> 
                    </div>
                )
            })
        }

                                </div>

                              </div>
                              <Footer/>
    </div>
  );
}

export default ProductAll;
