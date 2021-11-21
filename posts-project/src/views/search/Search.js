import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';

const Search = ({ handleInputChange, onSubmit, authors }) => {
    return (
        <Card className="mt-3">
            <Card.Title className="pt-3 ps-3">Search</Card.Title>
            <Card.Body>
                <Row>
                    <Col>
                        <Form onSubmit={onSubmit}>
                            <Input
                                label="Title or Body of the post"
                                name="search"
                                setInput={handleInputChange} />
                            <Form.Group className="mt-2">
                                <Form.Label>Author</Form.Label>
                                <Form.Control as="select" defaultValue={0} name="userId" onChange={handleInputChange}>
                                    <option key={0} value={0}>Any author</option>
                                    {authors.map((author) => {
                                        return <option key={author.id} value={author.id}>{author.name}</option>
                                    })}
                                </Form.Control>
                            </Form.Group>
                            <div className="mt-2 post__buttons--space-between">
                                <Button variant="secondary" onClick={onSubmit}>Search</Button>
                                <Link to="post/create"><Button variant="outline-primary">Add Post</Button></Link>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Search
