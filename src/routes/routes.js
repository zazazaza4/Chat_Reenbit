import Main from '../pages/Main/Main';
import Login from '../pages/Login/Login';
import { MAIN_ROUTE, LOGIN_ROUTE } from '../utils/consts';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
];
