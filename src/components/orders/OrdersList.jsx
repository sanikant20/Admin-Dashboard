import React, { useState } from 'react';
import { Button, Table, Card, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SearchComponent from '../search/SearchComponent';

const OrdersList = () => {
    const navigate = useNavigate();

    // Sample data for orders
    const orders = [
        {
            _id: "order123",
            orderNumber: "ORD001",
            customerName: "John Doe",
            totalAmount: 150.50,
            paymentStatus: "Paid",
            status: "Confirmed",
            orderDate: "2024-10-10",
        },
        {
            _id: "order124",
            orderNumber: "ORD002",
            customerName: "Jane Smith",
            totalAmount: 250.75,
            paymentStatus: "Paid",
            status: "Shipped",
            orderDate: "2024-10-11",
        },
        {
            _id: "order14324",
            orderNumber: "ORD003",
            customerName: "Alice Johnson",
            totalAmount: 180.25,
            paymentStatus: "Paid",
            status: "Cancelled",
            orderDate: "2024-10-11",
        },
        {
            _id: "order12434",
            orderNumber: "ORD004",
            customerName: "Bob Williams",
            totalAmount: 220.10,
            paymentStatus: "Unpaid",
            status: "Shipped",
            orderDate: "2024-10-11",
        },
        {
            _id: "order12435",
            orderNumber: "ORD005",
            customerName: "David Brown",
            totalAmount: 130.65,
            paymentStatus: "Paid",
            status: "Delivered",
            orderDate: "2024-10-12",
        },
        {
            _id: "order12436",
            orderNumber: "ORD006",
            customerName: "Emily Clark",
            totalAmount: 275.90,
            paymentStatus: "Unpaid",
            status: "Pending",
            orderDate: "2024-10-13",
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 8; // Number of orders to display per page

    // Calculate total number of pages
    const totalPages = Math.ceil(orders.length / ordersPerPage);

    // Get the current orders to display
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    // Functions for order actions
    const handleViewOrder = (id) => {
        console.log(`View order with id: ${id}`);
        navigate(`/orders/view/${id}`);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container p-4 shadow bg-dark text-white rounded-3">
            <h1 className="mb-4">Orders</h1>
            <div className="row justify-content-center align-items-center">
                <Card>
                    <Card.Body className="overflow-auto">
                        <Card.Title className="d-flex justify-content-between align-items-center">
                            <h4>Orders List</h4>
                            <div>
                                <SearchComponent />
                            </div>
                        </Card.Title>

                        <Table striped bordered hover className="mt-3">
                            <thead>
                                <tr>
                                    <th>Order Number</th>
                                    <th>Customer Name</th>
                                    <th>Total Amount</th>
                                    <th>Payment Status</th>
                                    <th>Status</th>
                                    <th>Order Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentOrders.map((order) => (
                                    <tr key={order._id}>
                                        <td>{order.orderNumber}</td>
                                        <td>{order.customerName}</td>
                                        <td>${order.totalAmount.toFixed(2)}</td>
                                        <td>
                                            {
                                                order.paymentStatus === "Paid" ? (
                                                    <span
                                                        className="bg-success text-white rounded p-2 d-inline-block"
                                                        style={{ minWidth: '80px', textAlign: 'center' }}
                                                    >
                                                        Paid
                                                    </span>
                                                ) : (
                                                    <span
                                                        className="bg-danger text-white rounded p-2 d-inline-block"
                                                        style={{ minWidth: '80px', textAlign: 'center' }}
                                                    >
                                                        Unpaid
                                                    </span>
                                                )
                                            }
                                        </td>
                                        <td>
                                            {
                                                order.status === "Pending" ? (
                                                    <span className="bg-warning text-dark p-2 rounded d-inline-block"
                                                        style={{ minWidth: '80px', textAlign: 'center' }}>
                                                        Pending
                                                    </span>
                                                ) : order.status === "Confirmed" ? (
                                                    <span className="bg-primary text-white p-2 rounded d-inline-block"
                                                        style={{ minWidth: '80px', textAlign: 'center' }}>
                                                        Confirmed
                                                    </span>
                                                ) : order.status === "Shipped" ? (
                                                    <span className="bg-info text-white p-2 rounded d-inline-block"
                                                        style={{ minWidth: '80px', textAlign: 'center' }}>
                                                        Shipped
                                                    </span>
                                                ) : order.status === "Delivered" ? (
                                                    <span className="bg-success text-white p-2 rounded d-inline-block"
                                                        style={{ minWidth: '80px', textAlign: 'center' }}>
                                                        Delivered
                                                    </span>
                                                ) : order.status === "Cancelled" ? (
                                                    <span className="bg-danger text-white p-2 rounded d-inline-block"
                                                        style={{ minWidth: '80px', textAlign: 'center' }}>
                                                        Cancelled
                                                    </span>
                                                ) : null
                                            }
                                        </td>
                                        <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                                        <td>
                                            <Button onClick={() => handleViewOrder(order._id)}>
                                                <span>
                                                    View
                                                </span>
                                            </Button>{' '}
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

export default OrdersList;
