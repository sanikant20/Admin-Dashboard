import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, ListGroup, Row, Col, Table } from 'react-bootstrap';

const OrderDetails = () => {
    const { id } = useParams();

    // Sample data for orders (you might fetch this data from an API based on the order ID)
    const orders = [
        {
            _id: "order123",
            orderNumber: "ORD001",
            customerName: "John Doe",
            totalAmount: 150.50,
            paymentStatus: "Paid",
            status: "Confirmed",
            orderDate: "2024-10-10",
            deliveryDetails: {
                recipientName: "John Doe",
                address: "123 Main St, Springfield, IL",
                city: "Springfield",
                postalCode: "62701",
                phoneNumber: "555-1234"
            },
            items: [
                { bookTitle: "React for Beginners", price: 29.99, quantity: 1 },
                { bookTitle: "Learning JavaScript", price: 39.99, quantity: 2 },
                { bookTitle: "CSS: The Missing Manual", price: 24.99, quantity: 1 },
            ]
        },
        {
            _id: "order124",
            orderNumber: "ORD002",
            customerName: "Jane Smith",
            totalAmount: 250.75,
            paymentStatus: "Paid",
            status: "Shipped",
            orderDate: "2024-10-11",
            deliveryDetails: {
                recipientName: "Jane Smith",
                address: "456 Elm St, Springfield, IL",
                city: "Springfield",
                postalCode: "62702",
                phoneNumber: "555-5678"
            },
            items: [
                { bookTitle: "Learning React", price: 45.00, quantity: 1 },
                { bookTitle: "JavaScript: The Good Parts", price: 34.99, quantity: 2 },
                { bookTitle: "HTML & CSS: Design and Build Websites", price: 39.99, quantity: 1 },
            ]
        },
        
    ];

    // Find the order by ID
    const order = orders.find(order => order._id === id);

    if (!order) {
        return (
            <div className="text-center text-danger mt-5">
                <h2 className="mb-3">Error</h2>
                <p className="lead">Order not found</p>
                <i className="bi bi-exclamation-circle" style={{ fontSize: '3rem' }}></i>
                <p className="mt-3">
                    Please check the order ID or return to the <a href="/" className="text-primary">home page</a>.
                </p>
            </div>
        );
    }
    

    const calculateTotal = () => {
        return order.items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    return (
        <div className="container p-4 shadow bg-dark text-white rounded-3">
            <h1 className="mb-4">Order Details</h1>
            <Card className="mb-4">
                <Row className="g-3">
                    <Col md={6} className="d-flex flex-column justify-content-center">
                        <Card.Header className="text-center bg-primary text-white">Order Information</Card.Header>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item><strong>Order Number:</strong> {order.orderNumber}</ListGroup.Item>
                                <ListGroup.Item><strong>Customer Name:</strong> {order.customerName}</ListGroup.Item>
                                <ListGroup.Item><strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}</ListGroup.Item>
                                <ListGroup.Item><strong>Payment Status:</strong> {order.paymentStatus}</ListGroup.Item>
                                <ListGroup.Item><strong>Status:</strong> {order.status}</ListGroup.Item>
                                <ListGroup.Item><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Col>
                    <Col md={6} className="d-flex flex-column justify-content-center">
                        <Card.Header className="text-center bg-primary text-white">Delivery Details</Card.Header>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item><strong>Recipient Name:</strong> {order.deliveryDetails.recipientName}</ListGroup.Item>
                                <ListGroup.Item><strong>Address:</strong> {order.deliveryDetails.address}</ListGroup.Item>
                                <ListGroup.Item><strong>City:</strong> {order.deliveryDetails.city}</ListGroup.Item>
                                <ListGroup.Item><strong>Postal Code:</strong> {order.deliveryDetails.postalCode}</ListGroup.Item>
                                <ListGroup.Item><strong>Phone Number:</strong> {order.deliveryDetails.phoneNumber}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

            <Card className="mb-4 shadow bg-light text-dark overflow-auto">
                <Card.Header className="text-center bg-primary text-white">
                    <h4>Order Bill</h4>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Book Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.bookTitle}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-end"><strong>Subtotal:</strong></td>
                                <td><strong>${calculateTotal()}</strong></td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        </div>
    );
};

export default OrderDetails;
