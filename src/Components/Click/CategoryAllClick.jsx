import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { catagory } from '../../DATA/data';
import { useEffect } from 'react';
import Navbar from '../Navbar';
import Nav from '../Nav';
import Footer from '../Footer';



const CategoryAllClick = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({})
  useEffect(() => {
    const filter = catagory.filter((product)=>product.id == id)
    setProduct(filter[0])
    // console.log(filter)
  }, [id])
  

   return (
    <div>
      <Navbar/>
      <Nav/>
       <div className='border border-black bg-teal-600 flex'>
        <h1 className='text-3xl font-bold my-10 mx-10'>{product?.heading1}</h1>
        <div className='flex list-none ms-[1100px] mt-10'>
        <Link to="/"><li>Home</li></Link>
        <li>/</li>
        <Link to="/catogary"><li className=''>Catogary</li></Link>
        <li>/</li>
        <Link to="/productall"><li className=''>Products</li></Link>
        </div>
        </div>

<div className="container">
        <div className='border border-slate-300'>
          <h1 className='mt-14 ms-7 font-semibold text-3xl mb-6'>{product?.heading2}</h1>
          <div className="container">
          <div className='border border-slate-300 flex mb-10'>
            <div>
           <Link to={`/page/${product.id}`}>  <img src={product?.img1} alt="" className='h-32 w-32  border-teal-600 rounded-full ms-8 me-20 border-3' /></Link>
            <Link to="/"> <h5 className='ms-5'>{product?.name1}</h5></Link>
            </div>
            <div>
           <Link to={`/page/${product.id}`}> <img src={product?.img2} alt="" className='h-32 w-32 border-3 border-teal-600 rounded-full me-20'/></Link>
           <Link to="/"> <h5 className='ms-4'>{product?.name2}</h5></Link>
            </div>
            
          </div>
          </div>
        </div>
        </div>
        
        <Footer/>
    </div>
  );
}

export default CategoryAllClick;
