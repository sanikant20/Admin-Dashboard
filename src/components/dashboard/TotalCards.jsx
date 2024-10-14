import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faShoppingCart, faUsers, faClipboardCheck, faTag, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const TotalCards = () => {
  return (
    <>
    <div className='container p-4 shadow bg-light rounded-3'>
      <h2 className="mb-4 text-center text-dark">Total Cards</h2>
      
      {/* Total Cards */}
      <Row>
        <Col md={4}>
          <Card className="mb-4 shadow-sm text-center">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faBook} className="me-2" /> Total Books
              </Card.Title>
              <Card.Text>
                1200 {/* Replace with dynamic data */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm text-center">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faShoppingCart} className="me-2" /> Total Orders
              </Card.Title>
              <Card.Text>
                350 {/* Replace with dynamic data */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm text-center">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faUsers} className="me-2" /> Total Users
              </Card.Title>
              <Card.Text>
                150 {/* Replace with dynamic data */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card className="mb-4 shadow-sm text-center">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faClipboardCheck} className="me-2" /> Pending Orders
              </Card.Title>
              <Card.Text>
                45 {/* Replace with dynamic data */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm text-center">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faTag} className="me-2" /> Genres
              </Card.Title>
              <Card.Text>
                25 {/* Replace with dynamic data */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm text-center">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faUserPlus} className="me-2" /> New Users
              </Card.Title>
              <Card.Text>
                10 this week {/* Replace with dynamic data */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </div>
    </>
  );
};

export default TotalCards;
