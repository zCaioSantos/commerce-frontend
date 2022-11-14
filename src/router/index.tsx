import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { ProductDetails } from '../pages/ProductDetails';
import { Users } from '../pages/Users';

export function Routers() {
 return (
  <Routes>
   <Route path="/">
    <Route index element={<LandingPage />} />
    <Route path="produtos">
     <Route index element={<h1>Produtos</h1>} />
     <Route path=":id" element={<ProductDetails />} />
    </Route>
    <Route path="logout" element={<h1>logout</h1>} />
   </Route>
   // TODO: Fazer rotas privatas
   <Route path="/dashboard">
    <Route path="users" element={<Users />} />
   </Route>
   <Route path="/*" element={<h1>Pagina nao existe</h1>} />
  </Routes>
 );
}
