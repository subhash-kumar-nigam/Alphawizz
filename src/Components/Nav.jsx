import React from 'react';
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { catagory } from '../DATA/data';


const Nav = () => {
  
 
  return (


    <div>
       <div className=''>
      
      <nav className='flex items-center justify-items-center  sm:gap-0 sm:p-0   list-none gap-12 border border-blue-500 p-2   bg-teal-500 text-white  '>
      
        <li className='ms-auto flex font-bold me-4'>
          <span className=' me-1 text-2xl'><FiMenu/></span>
         <span> <Link to="/">See All</Link></span>
         <div className='ms-5'>|</div>
          </li>
        {
          catagory.map((product)=>{
            return(
              <li key={product.id} className='lg:ml-auto  hover:underline decoration-white font-bold ms-7'>
                <Link to={`/nav/${product.id}`}>{product.Catagory}</Link>
                </li>
            )
          })
        }

        {/* <div className="border-l-2 border-white-500 h-7"></div> */}

       {/* <li className='lg:ml-auto  hover:underline decoration-white font-bold '><Link>Clothing</Link></li>
        <li className='lg:ml-auto  hover:underline decoration-white font-bold '><Link to="/electronices">Electronics</Link></li>
        <li className='lg:ml-auto  hover:underline decoration-white font-bold '><Link to="/kichen">Home & Kitchen</Link></li>
        <li className='lg:ml-auto  hover:underline decoration-white font-bold '><Link to="beauti">Beauty & Personal care</Link></li>
        <li className='lg:ml-auto  hover:underline decoration-white font-bold '><Link to="/toys">Toys & Games</Link></li>
        <li className='lg:ml-auto  hover:underline decoration-white font-bold '><Link to="/gro">Grocary & Gourmet Food</Link></li>
        <li className='lg:ml-auto  me-4 hover:underline decoration-white font-bold '><Link to="books">Books</Link></li>  */}
        
      </nav>
      
     
    </div>
    
    {/* <ResponsiveMenu  open={open}/> */}
    </div>
  );
}

export default Nav;
