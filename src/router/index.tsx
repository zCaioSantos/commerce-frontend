import { Route, Routes } from 'react-router-dom';
import { ProtectedAdmin } from '../Layouts/ProtectedLayout/ProtectedAdmin';
import { ProtectedEstoquista } from '../Layouts/ProtectedLayout/ProtectedEstoquista';
import { ProtectedRoute } from '../Layouts/ProtectedLayout/ProtectedRoute';

import { CartPage } from '../pages/CartPage';
import { Checkout } from '../pages/Checkout';
import { Dummy } from '../pages/Dummy';
import { LandingPage } from '../pages/LandingPage';
import { Login } from '../pages/Login';
import { ProductDetails } from '../pages/ProductDetails';
import { Profile } from '../pages/Profile';
import { SingUp } from '../pages/SingUp';
import { Users } from '../pages/Users';

export function Routers() {
 return (
  <Routes>
   <Route path="/">
    <Route index element={<LandingPage />} />
    <Route path="login" element={<Login />} />
    <Route path="singup" element={<SingUp />} />
    <Route path="cart" element={<CartPage />} />
    <Route path="*" element={<h1>Pagina nao existe</h1>} />
    <Route path="produtos">
     <Route index element={<h1>Produtos</h1>} />
     <Route path=":id" element={<ProductDetails />} />
    </Route>
   </Route>
   <Route path="/" element={<ProtectedRoute />}>
    <Route path="checkout" element={<Checkout />} />
    <Route path="profile" element={<Profile />} />

    <Route path="dashboard">
     <Route element={<ProtectedAdmin />}>
      <Route path="users" element={<Users />} />
     </Route>
     <Route element={<ProtectedEstoquista />}>
      <Route path="products" element={<Dummy />} />
     </Route>
    </Route>
   </Route>
  </Routes>
 );
}
