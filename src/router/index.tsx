import { Route, Routes } from 'react-router-dom';
import { CartPage } from '../pages/CartPage';
import { Checkout } from '../pages/Checkout';
import { Dummy } from '../pages/Dummy';
import { LandingPage } from '../pages/LandingPage';
import { Login } from '../pages/Login';
import { ProductDetails } from '../pages/ProductDetails';
import { SingUp } from '../pages/SingUp';
import { Users } from '../pages/Users';

export function Routers() {
 return (
  <Routes>
   <Route path="/">
    <Route index element={<LandingPage />} />
    <Route path="cart" element={<CartPage />} />
    <Route path="checkout" element={<Checkout />} />
    <Route path="login" element={<Login />} />
    <Route path="singup" element={<SingUp />} />
    <Route path="produtos">
     <Route index element={<h1>Produtos</h1>} />
     <Route path=":id" element={<ProductDetails />} />
    </Route>
    <Route path="logout" element={<h1>logout</h1>} />
   </Route>
   <Route path="/dashboard">
    <Route path="users" element={<Users />} />
    <Route path="products" element={<Dummy />} />
   </Route>
   <Route path="/*" element={<h1>Pagina nao existe</h1>} />
  </Routes>
 );
}
