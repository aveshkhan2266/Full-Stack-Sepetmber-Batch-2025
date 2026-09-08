import Card from 'react-bootstrap/Card';
import { Bolgdata } from '../data/Bolgdata';
import { NavLink, useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function BolgListing() {
    const [searchValue, setSearchValue] = useState('');
    const [appliedSearch, setAppliedSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        setAppliedSearch(searchValue);
    };

    const highlightText = (text, search) => {
        if (!search.trim()) return text;

        const regex = new RegExp(`(${search})`, 'gi');
        const parts = text.split(regex);

        return parts.map((part, index) =>
            regex.test(part) ? (
                <mark key={index} style={{ backgroundColor: 'yellow', padding: '2px' }}>
                    {part}
                </mark>
            ) : (
                part
            )
        );
    };

    return (
        <Row>
            <h1 className="mb-4 mt-3 text-decoration-underline">Blogs</h1>

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Enter blog name to read"
                    aria-label="Search data"
                    aria-describedby="basic-addon2"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <Button variant="secondary" id="button-addon2" onClick={handleSearch}>
                    Search
                </Button>
            </InputGroup>
            {Bolgdata.filter((item) =>
                item.title.toLowerCase().includes(appliedSearch.toLowerCase())
            ).map((item) => {
                return (
                    <Col md={4} className="mb-3" key={item.id}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={item.image} />

                            <Card.Body>
                                <Card.Title className="small">
                                    {highlightText(item.title, searchValue)}
                                </Card.Title>

                                <NavLink to={"/bolg/" + item.id}>Read more</NavLink>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}

        </Row>
    );
}

export default BolgListing;