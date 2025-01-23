import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Products } from '../../DATA/items';
import { useState } from 'react';
import { useEffect } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { AiOutlineStar } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Product from '../Product';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Nav from '../Nav';




const ProductSinglePage = () => {


    const [count, setCount] = useState(1);


  const handleClick3 = event => {
    setCount(count + 1);
  };
  
  const handleClick2 = event => {
    setCount(count - 1);
  };



  
  const input1 = useRef(null);

  const handleClick1 = () => {
    input1.current.focus();
  }; 



    const { id } = useParams();
    
    const [product, setProduct] = useState({})

    useEffect(() => {
    const filterproduct = Products.filter((product)=>product.id == id )
   setProduct(filterproduct[0])
    }, [id])
    


  return (
    <div>
        <Navbar/>
        <Nav/>
    
    {/* <img src={product.image} alt="" /> */}
    <div className='border border-yellow-50 bg-teal-200 flex'>
                        <h1 className='text-3xl font-bold my-8 mx-8'>{product.name}</h1>
                        <div className='flex list-none ms-[1100px] mt-7'>
                        <Link to="/"><li>Home</li></Link>
                        <li>/</li>
                        
                        <Link to="/catogary"><li className=''>Categary</li></Link>
                        
                        </div>
                        </div>
      <nav className='flex mt-12'>
        <main className='flex'>
            <Link><h1 className='text-5xl me-16 mt-28 ms-16'><SlArrowLeft/></h1></Link>
            <Link><img src={product.image} alt="" className=''/></Link>
          
            <Link><h1 className='text-5xl ms-16 mt-28'><SlArrowRight/></h1></Link>
        </main>
       {/* <div className='mt-96 '> <img src="Images/j1.jpg" alt="" /></div> */}
        <main>
            <h1 className='font-bold text-2xl mb-6 ms-12'>{product.name} </h1>
            <p className='ms-12  mb-6'>{product.name}</p>
            <hr />
            <div className='flex mt-3 ms-2 '>
            <div className='text-2xl '><AiOutlineStar/></div>
            <div className='text-2xl '><AiOutlineStar/></div>
            <div className='text-2xl '><AiOutlineStar/></div>
            <div className='text-2xl '><AiOutlineStar/></div>
            <div className='text-2xl '><AiOutlineStar/></div>
            </div>
            <div className='ms-2'>( 0 Reviews )</div>
            <div className='ms-2 mt-4 text-2xl'>  ₹ 1,000.00  <sup className='text-red-600'> <strike> ₹1,500 </strike> </sup></div>
            <div className="input-group flex-nowrap">
             
             <div className='flex ms-1 mt-5' >
              <input id="liveAlertPlaceholder" ref={input1} type="number" className="form-control" placeholder="ZipCode" aria-label="Username" aria-describedby="addon-wrapping"/>
              <div id="liveAlertPlaceholder"></div>
              <button type="button" onClick={handleClick1} className="border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white ps-12 pe-12" id="liveAlertBtn">Check Availability</button>
              {/* <Link><button onClick={handleClick1}  className='border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white ps-12 pe-12'>Check Availability</button></Link> */}
              </div>
            </div>
        </main>
     </nav>
     <nav className='flex'>
        <main>
           <img src={product.image} alt="" />
        </main>
        <main >
               <div className='border border-yellow-50 ms-72 mt-4 flex me-40 p-2 '>
               <Link><button onClick={handleClick2} className=' '>-</button></Link>
               <Link><h1 className='ps-5 '>{count}</h1></Link>
               <Link><button onClick={handleClick3} className='ps-5 '>+</button></Link>

              
               </div>
               <div className='flex ms-72 mt-3  '>
               <div className='flex border border-teal-500 text-teal-500 hover:text-white hover:bg-teal-500 p-2 rounded-lg me-1'>
               
                <div>
                  


                {/* <!-- Button trigger modal --> */}
<button type="button" className="" data-bs-toggle="modal" data-bs-target="#exampleModal">
<div className='flex'>
<FaCartArrowDown className='pt-2 text-1xl'/>
Add to card
</div>
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">hellw</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-black">
        Please Login First Use Cart
      </div>
      <div className="modal-footer">
       
      </div>
    </div>
  </div>
</div>




                </div>
                </div>
                <div className='flex border border-red-500 text-red-500 hover:text-white hover:bg-red-500 p-2 rounded-lg'>
               
                <button type="button" className="" data-bs-toggle="modal" data-bs-target="#exampleModal">
<div className='flex'>
<CiHeart className='pt-1 text-2xl pe-2'/>
Add to Fav
</div>
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">hellw</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-black">
        Please Login First Use Cart & Add Fav 
      </div>
    
    </div>
  </div>
</div>

              
                </div>
                </div>
                <div className='flex ms-72 mt-2'>
                  <h1 className='me-1'>Seller</h1>
                  <Link to="/raj"><h1 className='text-blue-600'> Raj Babbar</h1></Link>
                </div>

                <div className='flex ms-72 mt-2'>
                  <h1 className='me-1'>Tags</h1>
                  <Link to="/productall"><h1 className='border border-black bg-black text-white rounded-lg'> product</h1></Link>
                </div>
                
               
        </main>
        
     </nav>
     {/* <nav>
     <main className='flex mt-16 mb-4'>
          <Link className='/a1'> <h1 className='me-[450px] ms-44 hover:text-blue-600'>Description </h1></Link>
          <Link to="/a2"><h1 className='me-[450px] hover:text-blue-600'>Reviews</h1></Link>
          <Link><h1 className='me-[40px] '>Sold By<hr className='text-teal-500 '/></h1></Link>
        </main>
        <hr />
       
       <main className='flex '>
        <div>
        <img src="Images/ra.jpeg" alt="" className='h-56 ms-24 mb-12 mt-4 '/>
        </div>
        <div className='mt-4 ms-5'>
            <h1>Raj Store </h1>
            <h1>Raj Babbar</h1>
            <Link to="/raj"><h1 className='border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white mt-3 p-2 px-3 font-semibold rounded-lg'>Products</h1></Link>
        </div>
       </main>
     </nav> */}
       
  <Product/>
  <Footer/>

    </div>
  );
}

export default ProductSinglePage;
