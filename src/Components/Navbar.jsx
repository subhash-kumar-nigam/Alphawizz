import React, { useCallback } from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';
// import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
// import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { All } from '../DATA/items';








const Navbar = ({setData}) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")

  const handlesubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

 

  // let arr = [];
// console.log(arr.length); 

  

    // const [products, setProducts] = useState([])
    // const [error, setError] = useState(false)
    // const [loading, setLoading] = useState(false)
    // const [search, setSearch] = useState('')
   
//     useEffect(() => {
//         const controller = new AbortController()
//         ;(async () => {
//             try {
//                 setLoading(true)
//                 setError(false)
//                 const response = await axios.get('/api/products?search=' + search, {
//                     signal: controller.signal
//                 })
//                 console.log(response.data);
//                 setProducts(response.data)
//                 setLoading(false)
//             }catch (error) {
//                 if (axios.isCancle(error)){
//                     log('request cancled', error.message)
//                     return
//                 }
//                 setError(true)
//                 setLoading(false)

//             }
//         })()

//         return () => {
//             controller.abort()
//         }
//     }, [search]
// )
  return (
    <div>
          <div>
        <header id="Home" className=" my-2">
      <div className="  flex items-center ms-auto ">
      <div className="h-5 w-36 ms-2 mb-5">
        <img src="Images/newlogo22.png " alt="" className="w-full " />
      </div>
        <div className="ms-12">

      <form className='search-bar  md:block'  onSubmit={handlesubmit}>
        <label className="relative block"> 
            <input
                className="caret-zinc-400 pl-3 ml-6 py-2 px-24 border border-zinc-300 rounded-lg pe-80"
                placeholder="Search for products" type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />

            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                    height="30" viewBox="0 0 30 30">
                    <path
                        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                    </path>
                </svg>
            </span> 
         </label>
    </form>


    </div>
     
      <nav className="flex list-none gap-4 ml-auto font-semibold me-12 ">
        <Link to="/Login" className="border border-green p-1 hover:bg-teal-500 rounded-md px-2 hover:text-white text-teal-500">login</Link>
        <li className="mt-1 text-teal-500 text-2xl"><CiHeart/></li>
        <Link to="/cart" className="mt-1  text-teal-500 text-2xl flex">
               <div> <FaCartArrowDown/> </div></Link>
             
      </nav>
      </div>
    </header>
    
    </div>
         {/* <input type="text" placeholder='search' value={search}  onChange={(e) => setSearch(e.target.value)} name="" id="" />
        {loading && (<h1>Loading....</h1>)}
        {error && (<h1>something went wrong</h1>)}
      <h2>number : {products.length}</h2>  */}
      
    </div>
  );
}

export default Navbar;
