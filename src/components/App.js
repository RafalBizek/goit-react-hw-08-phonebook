import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { ContactsPage } from 'pages/ContactsPage';
import { Layout } from 'pages/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/actions';
import { useAuthUser } from 'hooks/useAuthUser';
import { PrivateRoute } from 'layoutRoutes/PrivateRoute';
import { RestrictRoute } from 'layoutRoutes/RestrictRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuthUser();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Loading....</div>;
  }

  return (
    <Routes>
      <Route path="https://github.com/RafalBizek/goit-react-hw-08-phonebook" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictRoute redirectTo="https://github.com/RafalBizek/goit-react-hw-08-phonebook/contacts">
              <RegisterPage />
            </RestrictRoute>
          }
        />
        <Route
          path="login"
          element={
            <RestrictRoute redirectTo="https://github.com/RafalBizek/goit-react-hw-08-phonebook/">
              <LoginPage />
            </RestrictRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute
              redirectTo="https://github.com/RafalBizek/goit-react-hw-08-phonebook/login"
              component={ContactsPage}
            >
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
