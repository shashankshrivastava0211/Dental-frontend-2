import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();  
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

