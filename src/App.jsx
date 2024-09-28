import {Route,Routes} from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App
