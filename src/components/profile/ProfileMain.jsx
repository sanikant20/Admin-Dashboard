import React from 'react';
import { Card, Image, Button, Table } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const ProfileMain = () => {
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

    const ProfileEdit = () => {
        navigate('/profile/edit'); 
    };

    const ChangePassword = () => {
        navigate('/profile/change-password');
    };

    return (
        <div className="container p-4 shadow bg-dark text-white rounded-3">
            <h1 className="mb-4">Admin Profile</h1>
            <div className="row justify-content-center">
                <Card className="col-12 col-md-8">
                    <Card.Body>
                        <Image 
                            src={user.avatar} 
                            roundedCircle 
                            className="mb-3 d-block mx-auto" 
                            style={{ width: '100px', height: '100px' }} 
                        />
                        <h4 className="text-center mt-3">{user.fullname}</h4>
                        <Table striped bordered hover responsive className="mt-3">
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
                        <div className="d-flex justify-content-between mt-4">
                            <Button variant="info" className="me-2" onClick={ProfileEdit}>
                                Edit Profile
                            </Button>
                            <Button variant="info" onClick={ChangePassword}>
                                Change Password
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ProfileMain;
