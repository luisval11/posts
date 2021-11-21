import React from 'react'
import { Card } from 'react-bootstrap'

export const CommentItem = ({comment}) => {
    return (
        <Card className="mb-3">
            <Card.Title className="pt-2 ps-3">{`#${comment.id} - (${comment.email})`}</Card.Title>
            <Card.Subtitle className="pt-2 ps-3">{comment.name}</Card.Subtitle>
            <Card.Body>{comment.body}</Card.Body>
        </Card>
    )
}
