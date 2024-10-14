import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Navbar, Nav } from 'react-bootstrap';

const SidebarNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Navbar for small screens */}
      <Navbar bg="dark" variant="dark" expand="lg" className="d-lg-none w-100">
        <div className="container-fluid">
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
          <Navbar.Brand>
            <Link to="/" className="text-white text-decoration-none">
              Booksmandala
            </Link>
          </Navbar.Brand>
        </div>
      </Navbar>

      {/* Sidebar for larger screens */}
      <div className="bg-dark text-white p-3 d-none d-lg-block" style={{ width: '250px', height: '100vh' }}>
        <h2>
          <Link to="/" className="text-white text-decoration-none">
            Booksmandala
          </Link>
        </h2>
        <hr />
        <ul className="nav flex-column font-weight-bold font-size-24">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              <i className="fas fa-tachometer-alt me-2"></i> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/books" className="nav-link text-white">
              <i className="fas fa-book me-2"></i> Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/genres" className="nav-link text-white">
              <i className="fas fa-tags me-2"></i> Genres
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/orders" className="nav-link text-white">
              <i className="fas fa-shopping-cart me-2"></i> Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link text-white">
              <i className="fas fa-users me-2"></i> Users
            </Link>
          </li>
        </ul>
      </div>

      {/* Offcanvas (Sidebar) for small screens */}
      <Offcanvas show={show} onHide={handleClose} placement="top" className="bg-dark text-white w-100 h-100">
        <Offcanvas.Header closeButton className="bg-white">
          <Offcanvas.Title className='text-dark'>Booksmandala</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white" onClick={handleClose}>
                <i className="fas fa-tachometer-alt me-2"></i> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/books" className="nav-link text-white" onClick={handleClose}>
                <i className="fas fa-book me-2"></i> Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/genres" className="nav-link text-white" onClick={handleClose}>
                <i className="fas fa-tags me-2"></i> Genres
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/orders" className="nav-link text-white" onClick={handleClose}>
                <i className="fas fa-shopping-cart me-2"></i> Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-link text-white" onClick={handleClose}>
                <i className="fas fa-users me-2"></i> Users
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SidebarNavbar;
