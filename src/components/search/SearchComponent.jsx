import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search Term:', searchTerm);
        // Add logic to handle the search action, such as filtering a list or making an API call
    };

    return (
        <div >
            <Form onSubmit={handleSearch} className="d-flex">
                <Form.Group controlId="searchField" className="flex-grow-1">
                    <Form.Control
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
        </div>
    );
};

export default SearchComponent;
