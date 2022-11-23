import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../services/context/Auth/hook';

export function ProtectedEstoquista() {
 const { getUser } = useAuth();
 const access = ['admin', 'estoquista'];

 if (!access.includes(getUser().perfil)) {
  return <Navigate to="/" />;
 }

 return <Outlet />;
}
