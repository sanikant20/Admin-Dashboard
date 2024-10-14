import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const GenresAdd = () => {
  const navigator = useNavigate();

  const [genres, setGenres] = useState({
    title: '',
    icon: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGenres((prevGenres) => ({
      ...prevGenres,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Genres details:', genres);
    // Add logic to submit the form data, such as an API call to add the genre
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigator('/genres');
  };

  return (
    <div className="container p-4 shadow bg-dark text-white rounded-3">
      <h1 className="mb-4">Genres</h1>
      <div className="row justify-content-center align-items-center">
        <Card className="shadow bg-light">
          <Card.Body>
            <h4>Add New Genre</h4>
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
                      value={genres.title}
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
                      value={genres.description}
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
                  Add Genre
                </Button>
              </div>

            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default GenresAdd;
