import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.css';

const PostItem = ({post, author}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text className="mb-0">{post.body}</Card.Text>
                <div className="mt-1 post__footer">
                    <p className="font--italic">{(author === null) ? 'Unknown author' : `Author: ${author.name}`}</p>
                    <div>
                        <Link to={`/post/${post.id}/edit`}><Button className="me-3" variant="secondary">Edit this post</Button></Link>
                        <Link to={`/post/${post.id}`}><Button>Go to this post</Button></Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default PostItem
