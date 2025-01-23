import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { List } from '../../DATA/items';



const MaterialAll = () => {
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
   
      <div>
    
     <div className='border border-yellow-50 bg-teal-200 flex'>
            <h1 className='text-1xl font-bold my-8 mx-8'>OFFER PRODUCTS</h1>
            <div className='flex list-none ms-[1100px] mt-7 '>
            <Link to="/"><li>Home</li></Link>
            <li>/</li>
            <Link to="/product"><li className=''>Product</li></Link>
            
            </div>
            </div>
  <div className="container text-center ">
   
<div className="row border border-yellow-50 container">
<div>

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
<li><Link className="dropdown-item" to="/seller">Relevanse</Link></li>
<li><Link className="dropdown-item" to="/seller">Top Rates</Link></li>
<li><Link className="dropdown-item" to="/seller">Newest First</Link></li>
<li><Link className="dropdown-item" to="/seller">Oldest First</Link></li>
</ul>
</div>
    </li>
    
    <li  className='ms-[520px] mt-10'>
    <div className="dropdown border border-yellow-50 px-10 py-2 mb-2 ms-96">
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


 
 
</div>
</div>
{/* <Footer/> */}
</div>
<div className=''>

        
  <div>
    <Carousel responsive={responsive} >
       
      
    {
            List.map((item) => {
                return (
                    <div className='border border-yellow-50  pe-10 pb mt-6 mb-6 ps-12' key={item.id}>
                         <div className='flex'>
                        <h1 className='border border-teal-300 bg-teal-300 mt-2 rounded-e-lg'>15%off</h1>
                        <Link> <div className='mt-2  text-2xl ms-40'><h1 className=''><CiHeart /></h1></div></Link>
                                                                        </div>
                       
                    <div className=' flex ms-5'>
                         
                         <Link to={`/materialallsingle/${item.id}`}> <img src={item?.image} alt="" className='h-44  mt-2 ' /></Link>
                        
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
          
     
      
  
  </Carousel>
  </div>
  </div>


  </>
  );
}

export default MaterialAll;
