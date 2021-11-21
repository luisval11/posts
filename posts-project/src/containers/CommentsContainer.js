import React from 'react'
import { Card } from 'react-bootstrap'
import { CommentItem } from '../components/CommentItem'

const CommentsContainer = ({comments}) => {
    return (
        <Card className="p-2">
            <Card.Title>Comments {`(${comments.length})`}</Card.Title>
            {
                comments.map((comment) => {
                    return <CommentItem key={comment.id} comment={comment} />
                })
            }
        </Card>
    )
}

export default CommentsContainer
