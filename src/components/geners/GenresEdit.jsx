import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const GenresEdit = () => {
  const navigate = useNavigate();

  // Initial state for the genre form
  const [genre, setGenre] = useState({
    title: '',
    icon: '',
    description: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGenre((prevGenre) => ({
      ...prevGenre,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated genre details:', genre);
    // Add logic to update the genre, such as an API call
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigate('/genres'); // Redirect back to the genre list
  };

  return (
    <div className="container p-4 shadow bg-dark text-white rounded-3">
      <h1 className="mb-4">Genres</h1>
      <div className="row justify-content-center align-items-center">
        <Card className="shadow bg-light">
          <Card.Body>
            <h4>Edit Genre</h4>
            <Form onSubmit={handleSubmit}>
              {/* First Row */}
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter genre title"
                      name="title"
                      value={genre.title}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formIcon">
                    <Form.Label>Icon</Form.Label>
                    <Form.Control
                      type="file"
                      placeholder="Select icon image"
                      name="icon"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Second Row */}
              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter genre description"
                      name="description"
                      value={genre.description}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-flex justify-content-between">
                <Button variant="warning" onClick={handleBack}>
                  Back
                </Button>

                <Button variant="primary" type="submit">
                  Update Genre
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default GenresEdit;
