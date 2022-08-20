import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes/routes';
import { MAIN_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

const AppRouter = () => {
  const [isUser, setIsUser] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;

  const checkSignInUser = () => {
    const result = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUser(true);
      }
    });

    return result;
  };

  useEffect(() => {
    checkSignInUser();
  }, []);

  return isUser ? (
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
