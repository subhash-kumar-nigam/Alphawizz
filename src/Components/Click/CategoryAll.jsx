import React from 'react';
import { Link } from 'react-router-dom';
import { catagory } from '../../DATA/data';

import Navbar from '../Navbar';
import Nav from '../Nav';
import Footer from '../Footer';
// import {  } from '../../DATA/data';

const CategoryAll = () => {

 

  return (
    <div>
        <Navbar/>
        <Nav/>
      
       <h1 className='font-bold text-3xl ms-[650px] mt-14 mb-10'>CATEGARY</h1>
       <hr />
         <div className='container-fluid px-5'>
          <div className='row'>
        {       catagory.map((product) => {
                    return (
                        <div className='col-2  ' key={product.id}>
                      <Link to={`/click/${product.id}`}> <img src={product?.img} alt=""  className="rounded-full max-w-32 h-32 w-32 border-3 border-teal-500  mt-16"/></Link>
                      <Link to="/"> <h1 className='me-20 ms-6 mb-28'>{product?.title}</h1></Link> 
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

export default CategoryAll;


