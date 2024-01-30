import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import men_baner from './Components/Assets/banner_mens.png'
import women_baner from './Components/Assets/banner_women.png'
import kids_baner from './Components/Assets/banner_kids.png'



function App() {
  return (
    <div >
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/men' element={<ShopCategory banner = {men_baner} category="men"/>} />
          <Route path='/women' element={<ShopCategory banner = {women_baner} category="women"/>} />
          <Route path='/kids' element={<ShopCategory banner = {kids_baner} category="kid"/>} /> 
          <Route path='/product' element={<Product />} >
            <Route path=':productID' element={<Product />} /> 
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
