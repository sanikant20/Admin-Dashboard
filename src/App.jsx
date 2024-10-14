import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Login from "./auth/Login";
import Register from "./auth/Register";

import SidebarNavbar from "./components/SidebarNavbar";
import Dashboard from "./components/dashboard/DashboardCard";

import BookList from "./components/books/BookList";
import BookAdd from "./components/books/BookAdd";
import BookEdit from "./components/books/BookEdit";

import GenresList from "./components/geners/GenresList";
import GenresAdd from "./components/geners/GenresAdd";
import GenresEdit from "./components/geners/GenresEdit";

import UserList from "./components/users/UserList";
import UserDetails from "./components/users/UserDetails";
const App = () => {
  return (
    <Router>
      {/* Routes for login and register (without Sidebar) */}
      <Routes>
        <Route path="*" element={<PageNotFound />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Routes for Dashboard with Sidebar */}
        <Route
          path="/"
          element={
            <div className="d-flex flex-column flex-lg-row vh-100">
              <SidebarNavbar />
              <div className="flex-grow-1 p-4 overflow-auto">
                <Dashboard />
              </div>
            </div>
          }
        />

        {/* Routes for Books with Sidebar */}
        <Route
          path="/books"
          element={
            <div className="d-flex flex-column flex-lg-row vh-100">
              <SidebarNavbar />
              <div className="flex-grow-1 p-4 overflow-auto">
                <BookList />
              </div>
            </div>
          }
        />
        <Route
          path="/books/add"
          element={
            <div className="d-flex flex-column flex-lg-row vh-100">
              <SidebarNavbar />
              <div className="flex-grow-1 p-4 overflow-auto">
                <BookAdd />
              </div>
            </div>
          }
        />
        <Route
          path="/books/edit/:id"
          element={
            <div className="d-flex flex-column flex-lg-row vh-100">
              <SidebarNavbar />
              <div className="flex-grow-1 p-4 overflow-auto">
                <BookEdit />
              </div>
            </div>
          }
        />

        {/* Routes for Genres with Sidebar */}
        <Route
          path="/genres"
          element={
            <div className="d-flex flex-column flex-lg-row vh-100">
              <SidebarNavbar />
              <div className="flex-grow-1 p-4 overflow-auto">
                <GenresList />
              </div>
            </div>
          }
        />
        <Route
          path="/genres/add"
          element={
            <div className="d-flex flex-column flex-lg-row vh-100">
              <SidebarNavbar />
              <div className="flex-grow-1 p-4 overflow-auto">
                <GenresAdd />
              </div>
            </div>
          }
        />
        <Route
          path="/genres/edit/:id"
          element={
            <div className="d-flex flex-column flex-lg-row vh-100">
              <SidebarNavbar />
              <div className="flex-grow-1 p-4 overflow-auto">
                <GenresEdit />
              </div>
            </div>
          }
        />

        {/* Routes for Users */}
        <Route path="/users"
          element={
            <div className="d-flex flex-column flex-lg-row vh-100">
              <SidebarNavbar />
              <div className="flex-grow-1 p-4 overflow-auto">
                <UserList />
              </div>
            </div>
          }
        />
        <Route
          path="/users/details/:id"
          element={
            <div className="d-flex flex-column flex-lg-row vh-100">
              <SidebarNavbar />
              <div className="flex-grow-1 p-4 overflow-auto">
                <UserDetails />
              </div>
            </div>
          }
        />

      </Routes>
    </Router>
  );
};

export default App;
