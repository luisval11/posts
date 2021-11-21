import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NoPostItem = () => {
    return (
        <Row className="mt-3">
            <Col>
                <Card>
                    <Card.Title className="ms-3 mt-3">No Post available</Card.Title>
                    <Card.Body>
                        Unfortunately, we don't have posts with that title or body.
                        <br /> 
                        <Link to={`/post/create`}>Why don't you try to add it?</Link>
                    </Card.Body>
                    
                </Card>
            </Col>
        </Row>
    )
}
export default NoPostItem