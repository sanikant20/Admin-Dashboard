import React from 'react';
import { Card, Image, Button, Table } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const { userId } = useParams(); // Retrieve userId from URL parameters
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

    const handleBack = () => {
        navigate('/users'); // Navigate back to the users list
    };

    return (
        <div className="container p-4 shadow bg-dark text-white rounded-3">
            <h1 className="mb-4">Users</h1>
            <div className="row justify-content-center align-items-center">
                <Card style={{ width: '24rem' }}>
                    <Card.Body>
                        <Image src={user.avatar} roundedCircle className="mb-3 d-block mx-auto" style={{ width: '100px', height: '100px' }} />
                        <h4 className="text-center mt-3">{user.fullname}</h4>
                        <Table striped bordered hover className="mt-3">
                            <tbody>
                                <tr>
                                    <td><strong>Email:</strong></td>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <td><strong>Phone Number:</strong></td>
                                    <td>{user.phoneNumber}</td>
                                </tr>
                                <tr>
                                    <td><strong>Date of Birth:</strong></td>
                                    <td>{new Date(user.dob).toLocaleDateString()}</td>
                                </tr>
                                <tr>
                                    <td><strong>Gender:</strong></td>
                                    <td>{user.gender}</td>
                                </tr>
                                <tr>
                                    <td><strong>Created At:</strong></td>
                                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className="text-center mt-3">
                            <Button variant="primary" onClick={handleBack}>
                                Back to Users List
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default UserDetails;
