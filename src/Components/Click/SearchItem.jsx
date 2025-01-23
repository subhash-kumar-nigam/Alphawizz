// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { All } from '../../DATA/items';
// import { useEffect } from 'react';
// import ProductAll from './ProductAll';


// const SearchItem = () => {
//   const { term } = useParams();
//   const [filterData, setFilterData] = useState([]);

//   useEffect(() => {
//    const filtered = () => {
//     // const data = All.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
//     const filteredProducts = All.filter((p) =>
//       p.title.toLowerCase().includes(term.toLowerCase())
//     );
//   console.log(filteredProducts)
//   setFilterData(filteredProducts);
//   console.log("All products:", All);
//    }
//    filtered();
//   }, [term])
  

//   return (
//     <div>
   
 

// <ProductAll All={filterData}/>
     
//     </div>
//   );
// }

// export default SearchItem;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { All } from '../../DATA/items';
import ProductAll from './ProductAll';

const SearchItem = () => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    // Check if 'term' exists and is not empty
    if (term) {
      const filteredProducts = All.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );
      console.log('Filtered products:', filteredProducts);
      setFilterData(filteredProducts);
    } else {
      // If no term, show all products
      setFilterData(All);
    }

    console.log('All products:', All);
  }, [term]);

  return (
    <div>
      <ProductAll All={filterData} />
    </div>
  );
}

export default SearchItem;

