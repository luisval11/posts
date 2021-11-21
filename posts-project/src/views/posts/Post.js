import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'
import CommentsContainer from '../../containers/CommentsContainer'
import PostContainer from '../../containers/PostContainer'
import UserContainer from '../../containers/UserContainer'
import { useAsyncFetch } from '../../hooks/useAsyncFetch'
import { BASE_URL, POST } from '../../utils/endpoints'
import { buildUrl } from '../../utils/http'
import './style.css';

export const Post = () => {

    const { id } = useParams();
    const [requests, loading] = useAsyncFetch(buildUrl(BASE_URL, POST + `/${id}`, { id: id }))
    const [postReq, setPostReq] = useState(null);
    const [authorReq, setAuthorReq] = useState([]);
    const [commentsReq, setCommentsReq] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loading) {
            const { post, author, comments } = requests;
            setPostReq(post);
            setAuthorReq(author);
            setCommentsReq(comments);
            setLoaded(true);
        }
    }, [loading, requests])

    const viewPost = (p) => {
        return <Row key={p.id} className="mt-3">
            <Col md={8} sm={12}>
                <PostContainer post={(p != null) ? p : null} />
                <div className="mt-3 mb-3 post__buttons--space-between">
                    <Link to={`/`}><Button variant="secondary">Go to Posts</Button></Link>
                    <Link to={`/post/${id}/edit`}><Button className="ms-3" variant="primary">Edit this post</Button></Link>
                </div>
                <CommentsContainer comments={commentsReq} />
            </Col>
            <Col md={4} sm={12}>
                <UserContainer author={authorReq} />
            </Col>
        </Row>
    }

    return (
        <>
            {!loading ?
                loaded && postReq !== null && postReq !== undefined
                    ? postReq.map(viewPost)
                    : <Loading />
            : <Loading />
            }
        </>
    )
}
