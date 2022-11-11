import { Routes, Route } from 'react-router-dom';
import { Basket } from '../pages/Basket';
import { Dummy } from '../pages/Dummy';
import { LandingPage } from '../pages/LandingPage';

export function Routers() {
 return (
  <Routes>
   <Route path="/">
    <Route index element={<LandingPage />} />
    <Route path="basket" element={<h1><Basket /></h1>} />
    <Route path="produtos">
     <Route index element={<h1>Produtos</h1>} />
     <Route path=":id" element={<h1>Detalhes do Produtos</h1>} />
    </Route>
    <Route path="logout" element={<h1>logout</h1>} />
   </Route>
   // TODO: Fazer rotas privatas
   <Route path="/dashboard">
    <Route path="users" element={<Dummy />} />
   </Route>
   <Route path="/*" element={<h1>Pagina nao existe</h1>} />
  </Routes>
 );
}
