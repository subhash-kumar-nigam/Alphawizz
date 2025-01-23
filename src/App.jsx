import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SpecialAll from "./Components/SpecialAll";
import ProductAll from "./Components/Click/ProductAll";

import CategoryAll from "./Components/Click/CategoryAll";
import MaterialOne from "./Components/Click/MaterialAll";
import ProductSinglePage from "./Components/Click/ProductSinglePage";
import ProductAllSinglePage from "./Components/Click/ProductAllSinglePage";
import MaterialSingle from "./Components/Click/MaterialSingle";
import MaterialAllSingle from "./Components/Click/MaterialAllSingle";
import SpecialPage from "./Components/Click/SpecialPage";
import SearchItem from "./Components/Click/SearchItem";

import Cart from "./Components/Click/Cart";
import Product from "./Components/Product";
import Navbar from "./Components/Navbar";
import CategoryClick from "./Components/Click/CategoryClick";
import CategoryAllClick from "./Components/Click/CategoryAllClick";
import CategoryPage from "./Components/Click/CategoryPage";
import Terms from "./Components/Click/Terms";
import Policy from "./Components/Click/Policy";
import About from "./Components/Click/About";
import { useState } from "react";
import { catagory } from "./DATA/data";
import Nav from "./Components/Nav";
import { All, Products } from "./DATA/items";
import NavDetail from "./Components/Click/NavDetail";






export default function App() {
   const [data , setData] = useState([...All])
   
return (
   <>
 
<BrowserRouter>

<Routes>

<Route path="/" element={<Home   />}></Route>
<Route path="/pro" element={<Product     />}></Route>
<Route path="" element={<Navbar setData={setData} />}></Route>
<Route path="" element={<Nav  />}></Route>


<Route path="/specialall" element={<SpecialAll/>}></Route>
<Route path="/productall" element={<ProductAll  All={data}  />}></Route>
<Route path="/catogary" element={<CategoryAll/>}></Route>
<Route path="/special" element={<SpecialPage/>}></Route>
<Route path="/materialone" element={<MaterialOne/>}></Route>
<Route path="/product/:id" element={<ProductSinglePage/>}></Route>
<Route path="/productall/:id" element={<ProductAllSinglePage  />}></Route>
<Route path="/materialsingle/:id" element={<MaterialSingle/>}></Route>
<Route path="/materialallsingle/:id" element={<MaterialAllSingle/>}></Route>
<Route path="/search/:term" element={<SearchItem/>}></Route>
{/* <Route path="/search/:term" element={<SearchItem/>}></Route> */}

<Route path="/cart" element={<Cart  />}></Route>
<Route path="/categoryclick/:id" element={<CategoryClick/>}></Route>
<Route path="/nav/:id" element={<NavDetail/>}></Route>
<Route path="/click/:id" element={<CategoryAllClick/>}></Route>
<Route path="/page/:id" element={<CategoryPage/>}></Route>
<Route path="/term" element={<Terms/>}></Route>
<Route path="/policy" element={<Policy/>}></Route>
<Route path="/about" element={<About/>}></Route>




</Routes>
</BrowserRouter>
</>

);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);