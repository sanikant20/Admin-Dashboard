import React, { useState } from 'react';
import { Button, Table, Card, Image, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SearchComponent from '../search/SearchComponent';

const BookList = () => {
  const navigation = useNavigate();

  // Sample data for the book list with all fields included
  const books = [
    {
      _id: "66ff91f5721dd746b4bda0fc",
      title: "The Thanous",
      author: "Hector Garcia Puigcerver and Francesc Miralles",
      price: 455,
      quantity: 43,
      coverImage: "http://res.cloudinary.com/dn7llji7x/image/upload/v1728025079/bookMandala/u5ca59plumieed0jxyhl.png",
      descriptionTitle: "DISCOVER A NEW LIFE-CHANGING SECRET FOR HAPPINESS AND SUCCESS",
      description: "Purushartha (n.): The ultimate purpose of human beings.\n\nIn Hindu philosophy, there are four goals that all human beings strive for: virtue, prosperity, love, and freedom. These are the four purusharthas.",
      pageCount: 224,
      weight: "410g",
      ISBN: 9781529938593,
      language: "English",
      createdAt: "2024-10-04T06:57:57.570Z",
      updatedAt: "2024-10-06T04:33:54.847Z",
    },
    {
      _id: "66ff91f5721dd746b4bda0ffs",
      title: "The Thanous",
      author: "Hector Garcia Puigcerver and Francesc Miralles",
      price: 455,
      quantity: 43,
      coverImage: "http://res.cloudinary.com/dn7llji7x/image/upload/v1728025079/bookMandala/u5ca59plumieed0jxyhl.png",
      descriptionTitle: "DISCOVER A NEW LIFE-CHANGING SECRET FOR HAPPINESS AND SUCCESS",
      description: "Purushartha (n.): The ultimate purpose of human beings.\n\nIn Hindu philosophy, there are four goals that all human beings strive for: virtue, prosperity, love, and freedom. These are the four purusharthas.",
      pageCount: 224,
      weight: "410g",
      ISBN: 9781529938593,
      language: "English",
      createdAt: "2024-10-04T06:57:57.570Z",
      updatedAt: "2024-10-06T04:33:54.847Z",
    },
    {
      _id: "66ff91f5721dd746b4bda0dsffc",
      title: "The Thanous",
      author: "Hector Garcia Puigcerver and Francesc Miralles",
      price: 455,
      quantity: 43,
      coverImage: "http://res.cloudinary.com/dn7llji7x/image/upload/v1728025079/bookMandala/u5ca59plumieed0jxyhl.png",
      descriptionTitle: "DISCOVER A NEW LIFE-CHANGING SECRET FOR HAPPINESS AND SUCCESS",
      description: "Purushartha (n.): The ultimate purpose of human beings.\n\nIn Hindu philosophy, there are four goals that all human beings strive for: virtue, prosperity, love, and freedom. These are the four purusharthas.",
      pageCount: 224,
      weight: "410g",
      ISBN: 9781529938593,
      language: "English",
      createdAt: "2024-10-04T06:57:57.570Z",
      updatedAt: "2024-10-06T04:33:54.847Z",
    },
    {
      _id: "66ff91f5721dd746b4bdfgfea0fc",
      title: "The Thanous",
      author: "Hector Garcia Puigcerver and Francesc Miralles",
      price: 455,
      quantity: 43,
      coverImage: "http://res.cloudinary.com/dn7llji7x/image/upload/v1728025079/bookMandala/u5ca59plumieed0jxyhl.png",
      descriptionTitle: "DISCOVER A NEW LIFE-CHANGING SECRET FOR HAPPINESS AND SUCCESS",
      description: "Purushartha (n.): The ultimate purpose of human beings.\n\nIn Hindu philosophy, there are four goals that all human beings strive for: virtue, prosperity, love, and freedom. These are the four purusharthas.",
      pageCount: 224,
      weight: "410g",
      ISBN: 9781529938593,
      language: "English",
      createdAt: "2024-10-04T06:57:57.570Z",
      updatedAt: "2024-10-06T04:33:54.847Z",
    },
    {
      _id: "66ff91f5721dd74vsd6b4bda0fc",
      title: "The Thanous",
      author: "Hector Garcia Puigcerver and Francesc Miralles",
      price: 455,
      quantity: 43,
      coverImage: "http://res.cloudinary.com/dn7llji7x/image/upload/v1728025079/bookMandala/u5ca59plumieed0jxyhl.png",
      descriptionTitle: "DISCOVER A NEW LIFE-CHANGING SECRET FOR HAPPINESS AND SUCCESS",
      description: "Purushartha (n.): The ultimate purpose of human beings.\n\nIn Hindu philosophy, there are four goals that all human beings strive for: virtue, prosperity, love, and freedom. These are the four purusharthas.",
      pageCount: 224,
      weight: "410g",
      ISBN: 9781529938593,
      language: "English",
      createdAt: "2024-10-04T06:57:57.570Z",
      updatedAt: "2024-10-06T04:33:54.847Z",
    },
    {
      _id: "66ff91f5721dd746bdgs4bda0fc",
      title: "The Thanous",
      author: "Hector Garcia Puigcerver and Francesc Miralles",
      price: 455,
      quantity: 43,
      coverImage: "http://res.cloudinary.com/dn7llji7x/image/upload/v1728025079/bookMandala/u5ca59plumieed0jxyhl.png",
      descriptionTitle: "DISCOVER A NEW LIFE-CHANGING SECRET FOR HAPPINESS AND SUCCESS",
      description: "Purushartha (n.): The ultimate purpose of human beings.\n\nIn Hindu philosophy, there are four goals that all human beings strive for: virtue, prosperity, love, and freedom. These are the four purusharthas.",
      pageCount: 224,
      weight: "410g",
      ISBN: 9781529938593,
      language: "English",
      createdAt: "2024-10-04T06:57:57.570Z",
      updatedAt: "2024-10-06T04:33:54.847Z",
    },
    {
      _id: "66ff91f5721dd746b4bvdsvda0fc",
      title: "The Thanous",
      author: "Hector Garcia Puigcerver and Francesc Miralles",
      price: 455,
      quantity: 43,
      coverImage: "http://res.cloudinary.com/dn7llji7x/image/upload/v1728025079/bookMandala/u5ca59plumieed0jxyhl.png",
      descriptionTitle: "DISCOVER A NEW LIFE-CHANGING SECRET FOR HAPPINESS AND SUCCESS",
      description: "Purushartha (n.): The ultimate purpose of human beings.\n\nIn Hindu philosophy, there are four goals that all human beings strive for: virtue, prosperity, love, and freedom. These are the four purusharthas.",
      pageCount: 224,
      weight: "410g",
      ISBN: 9781529938593,
      language: "English",
      createdAt: "2024-10-04T06:57:57.570Z",
      updatedAt: "2024-10-06T04:33:54.847Z",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5; // Number of books to display per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(books.length / booksPerPage);

  // Get the current books to display
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const handleEdit = (id) => {
    console.log(`Edit book with id: ${id}`);
    navigation(`/books/edit/${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete book with id: ${id}`);
    // You might want to add confirmation before deletion
  };

  const handleAddBook = () => {
    navigation('/books/add');
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container p-4 shadow bg-dark text-white rounded-3">
      <h1 className="mb-4">Books</h1>
      <div className="row justify-content-center align-items-center">
        <Card className="shadow bg-light">
          <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-center ">
              <h4>Books List</h4>
              <div>
                <SearchComponent />
              </div>
              <Button variant="primary" onClick={handleAddBook}>
                Add New Book
              </Button>
            </Card.Title>

            <Table striped bordered hover className="mt-3 ">
              <thead >
                <tr>
                  <th>Cover</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>ISBN</th>
                  <th>Page Count</th>
                  <th>Weight</th>
                  <th>Language</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentBooks.map((book) => (
                  <tr key={book._id}>
                    <td>
                      <Image src={book.coverImage} rounded style={{ width: '50px', height: 'auto' }} />
                    </td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>Rs:{book.price}</td>
                    <td>{book.quantity}</td>
                    <td>{book.ISBN}</td>
                    <td>{book.pageCount}</td>
                    <td>{book.weight}</td>
                    <td>{book.language}</td>
                    <td>
                      <Button variant="warning" className="p-2 mb-2 w-100" onClick={() => handleEdit(book._id)}>
                        Edit
                      </Button>{' '}
                      <Button variant="danger" className="p-2 mb-2 w-100" onClick={() => handleDelete(book._id)}>
                        Delete
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

export default BookList;
