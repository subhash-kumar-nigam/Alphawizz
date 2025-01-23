import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { data, Link } from 'react-router-dom';
import { catagory } from '../DATA/data';



const Category = () => {

//    const data =  {
//     id: 4,
//     img: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Stationery_.jpeg",
//     name: "Beauty & Personal Care"
// }





    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 2000, min: 1000 },
            items: 7
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
   <h1 className='text-center m-5 font-semibold text-4xl '>Catogary</h1>
   <Carousel responsive={responsive}>

     
      {
        catagory?.map((product)=>{
            return(
                <span key={product.id}>
                <Link to={`/categoryclick/${product.id}`}><img src={product?.img} alt="" className='rounded-full  ms-5 max-w-32 h-32 w-32 border border-teal-500'  /></Link>
                <Link><h1 className='ms-12 '>{product.title}</h1></Link>
             </span>
            
            )
        })
      }


 
    </Carousel> 
  
   </>
  );
}

export default Category;


//className='rounded-full h-12 border border-teal-500'

 {/* <img src={catagory?.img} alt=""  className='rounded-full h-28 border border-teal-500' />
                <h1 className='ms-4'>{catagory?.name}</h1> */}