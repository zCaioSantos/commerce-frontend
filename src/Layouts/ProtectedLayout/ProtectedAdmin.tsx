import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../services/context/Auth/hook';

export function ProtectedAdmin() {
 const { getUser } = useAuth();
 const access = ['admin'];

 if (!access.includes(getUser().perfil)) {
  return <Navigate to="/" />;
 }

 return <Outlet />;
}
