import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { selectIsAuth } from '../redux/slices/authSlice';
import { privateRoutes, publicRoutes } from '../routes/routes';
import { MAIN_ROUTE, LOGIN_ROUTE } from '../utils/consts';

const AppRouter = () => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}
      <Route path="*" element={<Navigate replace to={MAIN_ROUTE} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => {
        return <Route path={path} key={path} element={<Component />} />;
      })}
      <Route path="*" element={<Navigate replace to={LOGIN_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
