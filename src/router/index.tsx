import { Routes, Route } from 'react-router-dom';
import { Dummy } from '../pages/Dummy';

export function Routers() {
 return (
  <Routes>
   <Route path="/home" element={<Dummy />} />
   <Route path="/users" element={<Dummy />} />
   <Route path="/products" element={<Dummy />} />
   <Route path="/logout" element={<h1>logout</h1>} />
  </Routes>
 );
}
