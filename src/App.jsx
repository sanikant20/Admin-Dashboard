import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Login from "./auth/Login";
import Register from "./auth/Register";

import Layout from "./auth/Layout";
import PrivateRoute from "./auth/PrivateRoute";

import Dashboard from "./components/dashboard/DashboardCard";

import BookList from "./components/books/BookList";
import BookAdd from "./components/books/BookAdd";
import BookEdit from "./components/books/BookEdit";

import GenresList from "./components/geners/GenresList";
import GenresAdd from "./components/geners/GenresAdd";
import GenresEdit from "./components/geners/GenresEdit";

import UserList from "./components/users/UserList";
import UserDetails from "./components/users/UserDetails";

import OrdersList from "./components/orders/OrdersList";
import OrderDetails from "./components/orders/OrderDetails";

import ProfileMain from "./components/profile/ProfileMain";
import ChangePassword from "./components/profile/ChangePassword";
import ProfileEdit from "./components/profile/ProfileEdit";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />

        {/* Protected routes with layout */}
        <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route path="/" element={<Dashboard />} />

          {/* Book routes */}
          <Route path="/books" element={<BookList />} />
          <Route path="/books/add" element={<BookAdd />} />
          <Route path="/books/edit/:id" element={<BookEdit />} />

          {/* Genres routes */}
          <Route path="/genres" element={<GenresList />} />
          <Route path="/genres/add" element={<GenresAdd />} />
          <Route path="/genres/edit/:id" element={<GenresEdit />} />

          {/* Users routes */}
          <Route path="/users" element={<UserList />} />
          <Route path="/users/details/:id" element={<UserDetails />} />

          {/* Orders routes */}
          <Route path="/orders" element={<OrdersList />} />
          <Route path="/orders/view/:id" element={<OrderDetails />} />

          {/* Profile routes */}
          <Route path="/profile" element={<ProfileMain />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/profile/change-password" element={<ChangePassword />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
