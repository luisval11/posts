import React from 'react'
import { Card } from 'react-bootstrap'

const PostContainer = ({post}) => {
    
    const {id, title, body} = post;
    
    return (
        (post != null) 
            ?   <Card>
                    <Card.Title className="pt-2 ps-3">Post #{id}</Card.Title>
                    <Card.Subtitle className="pt-2 ps-3">{title}</Card.Subtitle>
                    <Card.Body>{body}</Card.Body>
                </Card>
            :   <h1>Not found</h1>
    )
}
export default PostContainer