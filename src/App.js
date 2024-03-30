import Navbar from './Components/Navbar/Navbar.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop.js'
import ShopCategory from './Pages/ShopCategory.js'
import Product from './Pages/Product.js'
import Login from './Pages/Login.js'
import Cart from './Pages/Cart.js'
import Footer from './Footer/Footer.js'
import banner_men from './Components/Assets/banner_mens.png'
import banner_women from './Components/Assets/banner_women.png'
import kids from './Components/Assets/banner_kids.png'



function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={banner_men} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={banner_women} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids}  category="kid"/>}/>
        <Route path='/Product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='login' element={<Login/>}/>  
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
