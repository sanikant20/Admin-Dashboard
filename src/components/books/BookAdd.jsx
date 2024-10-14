import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BookAdd = () => {
  const navigator = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    price: '',
    quantity: '',
    coverImage: '',
    descriptionTitle: '',
    description: '',
    pageCount: '',
    weight: '',
    ISBN: '',
    language: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Book details:', book);
    // Add logic to submit the form data, such as an API call to add the book
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigator('/books');
  };

  return (
    <div className="container p-4 shadow bg-dark text-white rounded-3">
      <h1 className="mb-4">Books</h1>
      <div className="row justify-content-center align-items-center">
        <Card className="shadow bg-light">
          <Card.Body>
            <h4 className='d-flex justify-content-between align-items-center'>Add New Book</h4>
            <Form onSubmit={handleSubmit}>
              {/* First Row */}
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter book title"
                      name="title"
                      value={book.title}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter author name"
                      name="author"
                      value={book.author}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Second Row */}
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter price"
                      name="price"
                      value={book.price}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter quantity"
                      name="quantity"
                      value={book.quantity}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Third Row */}
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="formCoverImage">
                    <Form.Label>Cover Image </Form.Label>
                    <Form.Control
                      type="file"
                      placeholder="Select cover image "
                      name="coverImage"
                      value={book.coverImage}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formPageCount">
                    <Form.Label>Page Count</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter page count"
                      name="pageCount"
                      value={book.pageCount}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Fourth Row */}
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="formWeight">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter weight"
                      name="weight"
                      value={book.weight}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formISBN">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter ISBN"
                      name="ISBN"
                      value={book.ISBN}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Fifth Row */}
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="formLanguage">
                    <Form.Label>Language</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter language"
                      name="language"
                      value={book.language}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formDescriptionTitle">
                    <Form.Label>Description Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter description title"
                      name="descriptionTitle"
                      value={book.descriptionTitle}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Sixth Row */}
              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter book description"
                      name="description"
                      value={book.description}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-flex justify-content-between">
                <Button variant="info" onClick={handleBack}>
                  Back
                </Button>

                <Button variant="primary" type="submit">
                  Add Book
                </Button>
              </div>

            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default BookAdd;
