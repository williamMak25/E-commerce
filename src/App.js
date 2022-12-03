
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/cart/cart';
import Category from './component/categories/categories';
import Header from './component/header/header';
import Home from './component/homePage/home';
import ItemDetail from './component/itemDetail/itemDetail';
import Login from './component/loginpage/login';
import Signup from './component/signup/signup';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/products/:id' element={<ItemDetail/>}/>
      <Route path='/category/:type' element={<Category/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
