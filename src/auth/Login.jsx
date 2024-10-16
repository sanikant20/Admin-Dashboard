import React, { useState } from 'react';
import { Form, Button, Card, InputGroup } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Static user data for validation
  const staticUser = {
    email: 'admin@example.com',
    password: 'password123',
    token: 'sampleToken123456789'
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate user input against static data
    if (email === staticUser.email && password === staticUser.password) {
      localStorage.setItem('token', staticUser.token); // No need for expiry with localStorage
      navigate('/');
    } else {
      setErrorMessage('Invalid email or password');
    }
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

      {/* Card content */}
      <div className="col-12 d-flex justify-content-center align-items-center vh-100">
        <Card style={{ width: '500px', zIndex: 1 }} className="p-4 shadow bg-light">
          <Card.Body>
            <h2 className="text-center mb-4">Booksmandala Login</h2>
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            <Form onSubmit={handleLogin}>
              {/* Email Input */}
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

              {/* Password Input */}
              <Form.Group className="mb-1" controlId="formBasicPassword">
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
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </Button>
                </InputGroup>
              </Form.Group>

              {/* Forgot Password Link */}
              <Button
                variant="link"
                className="w-100 mb-2 text-decoration-none text-primary d-flex justify-content-end"
                onClick={() => navigate('/forgot-password')}
              >
                Forgot Password?
              </Button>

              {/* Login Button */}
              <Button variant="primary" type="submit" className="w-100">
                <i className="fas fa-sign-in-alt me-2"></i>
                Login
              </Button>

              {/* Google Login Button */}
              <Button
                variant="danger"
                type="button"
                className="w-100 mt-2"
                onClick={() => navigate('/google-login')}
              >
                <i className="fab fa-google me-2"></i>
                Login with Google
              </Button>

              {/* Facebook Login Button */}
              <Button
                variant="primary"
                type="button"
                className="w-100 mt-2"
                onClick={() => navigate('/facebook-login')}
                style={{ backgroundColor: '#4267B2', borderColor: '#4267B2' }}
              >
                <i className="fab fa-facebook me-2"></i>
                Login with Facebook
              </Button>

              {/* Register Link */}
              <div className="mt-3 text-center">
                Don't have an account?{' '}
                <Link to="/register" className="text-decoration-none">
                  Register
                </Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>

  );
};

export default Login;
