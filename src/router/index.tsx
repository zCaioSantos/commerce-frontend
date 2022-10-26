import { Routes, Route } from 'react-router-dom';
import { Dummy } from '../pages/Dummy';
import { LandingPage } from '../pages/LandingPage';

export function Routers() {
 return (
  <Routes>
   <Route path="/home" element={<Dummy />} />
   <Route path="/users" element={<Dummy />} />
   <Route path="/products" element={<Dummy />} />
   <Route path="/logout" element={<h1>logout</h1>} />

   <Route path="/" element={<LandingPage />} />
  </Routes>
 );
}
