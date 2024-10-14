import React, { useState } from 'react';
import { Card, Button, Form, Alert, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
    const navigate = useNavigate();

    // Sample user data (you would typically fetch this from an API)
    const user = {
        _id: "66f5143b677beb91e9babc01",
        fullname: "Admin - Sanikant",
        email: "sani@gmail.com",
        phoneNumber: 9799999999,
        avatar: "http://res.cloudinary.com/dn7llji7x/image/upload/v1727422651/bookMandala/chxvdpqd3j6ymfcilklt.jpg",
        dob: "2003-01-11",
        gender: "Male",
        createdAt: "2024-09-26T07:58:52.010Z"
    };

    // State to hold form values
    const [formData, setFormData] = useState({
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        dob: user.dob,
        gender: user.gender,
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Reset messages
        setError('');
        setSuccess('');

        // Validation logic here...
        if (!formData.fullname || !formData.email || !formData.phoneNumber) {
            setError('Please fill in all fields');
            return;
        }

        // Simulating a successful profile update
        setSuccess('Profile updated successfully.');
        navigate('/profile'); // Redirect to profile or any other page
    };

    return (
        <div className="container p-4 shadow bg-dark text-white rounded-3">
            <h1 className="mb-4 text-center">Edit Profile</h1>
            <Card className="col-12 col-md-8 col-lg-6 mx-auto">
                <Card.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}
                    
                    <div className="text-center mb-4">
                        <Image src={user.avatar} roundedCircle style={{ width: '100px', height: '100px' }} />
                    </div>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formFullname" className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="fullname" 
                                placeholder="Enter your full name" 
                                value={formData.fullname} 
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                name="email" 
                                placeholder="Enter your email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>

                        <Form.Group controlId="formPhoneNumber" className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control 
                                type="tel" 
                                name="phoneNumber" 
                                placeholder="Enter your phone number" 
                                value={formData.phoneNumber} 
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>

                        <Form.Group controlId="formDob" className="mb-3">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control 
                                type="date" 
                                name="dob" 
                                value={formData.dob} 
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>

                        <Form.Group controlId="formGender" className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control 
                                as="select" 
                                name="gender" 
                                value={formData.gender} 
                                onChange={handleChange} 
                                required
                            >
                                <option value="">Select your gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Form.Control>
                        </Form.Group>

                        <div className="d-flex justify-content-between mt-4">
                            <Button variant="outline-secondary" onClick={() => navigate('/profile')}>
                                Cancel
                            </Button>
                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProfileEdit;
