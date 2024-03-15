import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Shop from './Components/Pages/Shop';
import ShopCategory from './Components/Pages/ShopCategory';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import LoginSignUp from './Components/Pages/LoginSignUp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category='mens' />} />
        <Route path="/womens" element={<ShopCategory category='women' />} />
        <Route path="/kids" element={<ShopCategory category='kids' />} />
        <Route path='/product' element={<Product />} />
        <Route path=':productId' element={<Product />} />
        <Route path='cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignUp />} />
      </Routes>
    </div>
  );
}

export default App
