import React from 'react';
import { Navigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); 
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
