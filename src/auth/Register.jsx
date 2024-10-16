import React, { useState } from 'react';
import { Form, Button, Card, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Separate state for confirm password visibility

  const handleRegister = (e) => {
    e.preventDefault();
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Handle register logic here
    console.log("Registering with:", { name, email, password });
  };

  return (
    <div className="container-fluid position-relative row min-vh-100 m-0 p-0 overflow-hidden">
      {/* Background image */}
      <div className="col-12 position-absolute top-0 start-0 h-100 p-0">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          className="img-fluid w-100 h-100 object-fit-cover object-position-center"
          style={{ zIndex: -1 }}
        />
      </div>

      {/* Registration form */}
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <Card style={{ width: '500px' }} className="p-4 shadow bg-light">
          <Card.Body>
            <h2 className="text-center mb-4">Booksmandala Register</h2>
            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Password Field */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i
                      className={showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'}
                    ></i>
                  </Button>
                </InputGroup>
              </Form.Group>

              {/* Confirm Password Field */}
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Separate toggle for confirm password
                  >
                    <i
                      className={showConfirmPassword ? 'fa fa-eye-slash' : 'fa fa-eye'}
                    ></i>
                  </Button>
                </InputGroup>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                <i className="fa fa-user-plus me-2"></i>
                Register
              </Button>

              <Button
                variant="secondary"
                type="button" // Fixed to prevent form submission
                className="w-100 mt-3"
                onClick={() => {
                  setName('');
                  setEmail('');
                  setPassword('');
                  setConfirmPassword('');
                }}
              >
                <i className="fa fa-eraser me-2"></i>
                Clear Form
              </Button>

              <div className="mt-3 text-center">
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Register;
