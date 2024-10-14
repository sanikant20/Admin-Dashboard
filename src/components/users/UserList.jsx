import React, { useState } from 'react';
import { Button, Table, Card, Image, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SearchComponent from '../search/SearchComponent';

const CardUsers = () => {
    const navigate = useNavigate();

    // Sample data for the users
    const users = [
        {
            _id: "66f5143b677beb91e9babc01",
            fullname: "Admin - Sanikant",
            email: "sani@gmail.com",
            phoneNumber: 9799999999,
            avatar: "http://res.cloudinary.com/dn7llji7x/image/upload/v1727422651/bookMandala/chxvdpqd3j6ymfcilklt.jpg",
            gender: "Male",
            createdAt: "2024-09-26T07:58:52.010Z"
        },
        {
            _id: "66f5143b677beb91egre9babc01",
            fullname: "Admin",
            email: "admin@gmail.com",
            phoneNumber: 9799999999,
            avatar: "http://res.cloudinary.com/dn7llji7x/image/upload/v1727422651/bookMandala/chxvdpqd3j6ymfcilklt.jpg",
            gender: "Male",
            createdAt: "2024-09-26T07:58:52.010Z"
        },
        // Additional user entries can be added here...
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5; // Number of users to display per page

    // Calculate the total number of pages
    const totalPages = Math.ceil(users.length / usersPerPage);

    // Get the current users to display
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const handleViewDetails = (id) => {
        console.log(`View details for user with id: ${id}`);
        navigate(`/users/details/${id}`); // Navigate to the user details page
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container p-4 shadow bg-dark text-white rounded-3">
            <h1 className="mb-4">Users</h1>
            <div className="row justify-content-center align-items-center">
                <Card>
                    <Card.Body className='overflow-auto'>
                        <Card.Title className="d-flex justify-content-between align-items-center ">
                            <h4>Users List</h4>
                            <div>
                                <SearchComponent />
                            </div>
                        </Card.Title>

                        <Table striped bordered hover className="mt-3">
                            <thead>
                                <tr>
                                    <th>Avatar</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Gender</th>
                                    <th>Created At</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentUsers.map((user) => (
                                    <tr key={user._id}>
                                        <td>
                                            <Image src={user.avatar} rounded style={{ width: '50px', height: 'auto' }} />
                                        </td>
                                        <td>{user.fullname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>{user.gender}</td>
                                        <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <Button variant="info" onClick={() => handleViewDetails(user._id)}>
                                                View Details
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        {/* Pagination Controls */}
                        <Pagination className="justify-content-center mt-4">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <Pagination.Item
                                    key={index + 1}
                                    active={index + 1 === currentPage}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default CardUsers;
