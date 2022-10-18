import { Routes, Route } from 'react-router-dom';
import {} from '../pages';
import { Dummy } from '../pages/Dummy';

export function Routers() {
 return (
  <Routes>
   <Route path="/tests" element={<Dummy />} />
   <Route path="/sair" element={<h1>Sair</h1>} />
  </Routes>
 );
}
