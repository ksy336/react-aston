import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store-types';

type RequireAuthProp = {
  children: React.ReactNode;
}

const RequireAuth = ({children}: RequireAuthProp) => {
  const {login} = useSelector((state: RootState) => state.user);
  const location = useLocation();

  if (!login) {
    return <Navigate to="/signin" state={{ from: location }} />
  }
  return children;
};

export {RequireAuth};