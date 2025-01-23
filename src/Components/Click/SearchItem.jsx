import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { All } from '../../DATA/items';
import { useEffect } from 'react';
import ProductAll from './ProductAll';


const SearchItem = () => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
   const filtered = () => {
    // const data = All.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
    const filteredProducts = All.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
  console.log(filteredProducts)
  setFilterData(filteredProducts);
  console.log("All products:", All);
   }
   filtered();
  }, [term])
  

  return (
    <div>
   
 

<ProductAll All={filterData}/>
     
    </div>
  );
}

export default SearchItem;



