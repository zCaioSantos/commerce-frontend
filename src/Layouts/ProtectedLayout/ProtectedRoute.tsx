import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../services/context/Auth/hook';

export function ProtectedRoute() {
 const { getUser } = useAuth();

 if (!getUser().id) {
  return <Navigate to="/login" />;
 }

 return <Outlet />;
}
