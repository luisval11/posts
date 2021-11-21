import React from 'react'
import { Accordion, ListGroup } from 'react-bootstrap'
import './style.css'

const AuthorItem = ({author, image}) => {
    return (
        <>
            <div>
                <img className="image" src={image} alt="avatar"/>
            </div>
            <Accordion className="mt-2" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Personal</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>name: {author.name}</ListGroup.Item>
                            <ListGroup.Item>username: {author.username}</ListGroup.Item>
                            <ListGroup.Item>email: {author.email}</ListGroup.Item>
                            <ListGroup.Item>phone: {author.phone}</ListGroup.Item>
                            <ListGroup.Item>website: {author.website}</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion className="mt-2" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Address</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Street: {author.address.street}</ListGroup.Item>
                            <ListGroup.Item>Suite: {author.address.suite}</ListGroup.Item>
                            <ListGroup.Item>City: {author.address.city}</ListGroup.Item>
                            <ListGroup.Item>Zipcode: {author.address.zipcode}</ListGroup.Item>
                            <ListGroup.Item>Latitude / Longitude: {author.address.geo.lat} / {author.address.geo.lng}</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion className="mt-2 mb-3" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Company</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>name: {author.company.name}</ListGroup.Item>
                            <ListGroup.Item>catch Phrase: {author.company.catchPhrase}</ListGroup.Item>
                            <ListGroup.Item>{author.company.bs}</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default AuthorItem
