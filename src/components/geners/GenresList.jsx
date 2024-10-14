import React, { useState } from 'react';
import { Button, Table, Card, Image, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SearchComponent from '../search/SearchComponent';

const GenresList = () => {
  const navigation = useNavigate();

  // Sample data for the genres (geners)
  const genres = [
    {
      _id: "66fce945e5cf7cb726f51b78",
      title: "CD12 Books",
      icon: "http://res.cloudinary.com/dn7llji7x/image/upload/v1727850820/bookMandala/dsefgekjcwyyjho4hvck.jpg",
      books: [
        { _id: "66fce3e5d46bd17d589b9335" },
        { _id: "66fce2040e26cf2a6e5dace5" },
        { _id: "66fce2040e26cf2a6e5dace5" },
        { _id: "66fce2040e26cf2a6e5dace5" },
      ],
      owner: { _id: "66f5143b677beb91e9babc01" },

    },
    // Additional genre entries can be added here...
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const genresPerPage = 5; // Number of genres to display per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(genres.length / genresPerPage);

  // Get the current genres to display
  const indexOfLastGenre = currentPage * genresPerPage;
  const indexOfFirstGenre = indexOfLastGenre - genresPerPage;
  const currentGenres = genres.slice(indexOfFirstGenre, indexOfLastGenre);

  const handleEdit = (id) => {
    console.log(`Edit genre with id: ${id}`);
    navigation(`/genres/edit/${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete genre with id: ${id}`);
    // You might want to add confirmation before deletion
  };

  const handleAddGenre = () => {
    navigation('/genres/add');
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container p-4 shadow bg-dark text-white rounded-3">
      <h1 className="mb-4">Genres</h1>
      <div className="row justify-content-center align-items-center">
        <Card>
          <Card.Body className='overflow-auto'>
            <Card.Title className="d-flex justify-content-between align-items-center ">
              <h4>Genres List</h4>
              <div>
                <SearchComponent />
              </div>
              <Button variant="primary" onClick={handleAddGenre}>
                Add New Genre
              </Button>
            </Card.Title>

            <Table striped bordered hover className="mt-3">
              <thead>
                <tr>
                  <th>Icon</th>
                  <th>Title</th>
                  <th>Books Count</th>
                  <th>Owner ID</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentGenres.map((genre) => (
                  <tr key={genre._id}>
                    <td>
                      <Image src={genre.icon} rounded style={{ width: '50px', height: 'auto' }} />
                    </td>
                    <td>{genre.title}</td>
                    <td>{genre.books.length}</td>
                    <td>{genre.owner._id}</td>
                    <td>
                      <Button variant="warning" className="p-2 m-2 justify-content-center" onClick={() => handleEdit(genre._id)}>
                        Edit
                      </Button>{' '}
                      <Button variant="danger" className="p-2 m-2 justify-content-center" onClick={() => handleDelete(genre._id)}>
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

export default GenresList;
