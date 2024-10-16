import React, { useState } from 'react';
import { Card, Button, Form, Alert, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChangePassword = (e) => {
        e.preventDefault();

        // Reset any previous messages
        setError('');
        setSuccess('');

        // Simple validation
        if (!oldPassword || !newPassword || !confirmPassword) {
            setError('All fields are required.');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('New password and confirm password do not match.');
            return;
        }

        // Here, you would typically send the passwords to your API for validation and update
        // For example:
        // api.changePassword({ oldPassword, newPassword })
        //     .then(() => {
        //         setSuccess('Password changed successfully.');
        //         navigate('/profile'); // Redirect to profile after successful change
        //     })
        //     .catch(err => {
        //         setError(err.message || 'Failed to change password.');
        //     });

        // Simulating a successful password change
        setSuccess('Password changed successfully.');
        navigate('/profile'); // Redirect to profile after successful change
    };

    const goBack = () => {
        navigate('/profile');
    };

    return (
        <div className="container p-4 shadow bg-dark text-white rounded-3">
            <h1 className="mb-4 text-center">Change Password</h1>
            <Card className="col-12 col-md-8 col-lg-6 mx-auto">
                <Card.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}
                    <Form onSubmit={handleChangePassword}>

                        <Form.Group controlId="formOldPassword" className="mb-3">
                            <Form.Label>Old Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type={showOldPassword ? 'text' : 'password'}
                                    placeholder="Enter your old password"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    required
                                />
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => setShowOldPassword(!showOldPassword)}
                                >
                                    <i className={`fas ${showOldPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </Button>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formNewPassword" className="mb-3">
                            <Form.Label>New Password</Form.Label>
                            <InputGroup>
                            <Form.Control
                                type={showNewPassword ? 'text' : 'password'}
                                placeholder="Enter your new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                            <Button
                                variant="outline-secondary"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                            >
                                <i className={`fas ${showNewPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </Button>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword" className="mb-3">
                            <Form.Label>Confirm New Password</Form.Label>
                            <InputGroup>
                            <Form.Control
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="Confirm your new password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <Button
                                variant="outline-secondary"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                               <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </Button>
                            </InputGroup>
                        </Form.Group>

                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <Button variant="outline-secondary" onClick={goBack}>
                                Cancel
                            </Button>
                            <Button variant="primary" type="submit">
                                Change Password
                            </Button>
                        </div>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChangePassword;
