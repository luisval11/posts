import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import ModalItem from '../../components/ModalItem';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';
import { ACTION_PUT } from '../../utils/const';
import { BASE_URL, POST } from '../../utils/endpoints';
import { buildUrl } from '../../utils/http';
import './style.css'

const EditPost = () => {

    const { id } = useParams();
    const [initialValues, setInitialValues] = useState({
        id: "",
        title: "",
        body: "",
        userId: 0
    })
    const [idPost, setIdPost] = useState(0);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState(0);
    const [disabledButton, setDisabledButton] = useState(true);

    const [requests, loading] = useAsyncFetch(buildUrl(BASE_URL, '/edit', {}))
    const [postReq, setPostReq] = useState([]);
    const [authorsReq, setAuthorsReq] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        if (!loading) {
            const { post, authors } = requests;
            setPostReq(post);
            setAuthorsReq(authors);
            setLoaded(true);
        }
    }, [loading, requests])

    useEffect(() => {
        if (postReq !== null && postReq !== undefined && postReq[0] !== null && postReq[0] !== undefined) {
            setInitialValues({
                id: postReq[0].id,
                title: postReq[0].title,
                body: postReq[0].body,
                userId: postReq[0].userId
            })
            setIdPost(postReq[0].id)
            setTitle(postReq[0].title)
            setBody(postReq[0].body)
            setUserId(postReq[0].userId)
        }
    }, [postReq])

    const handleSubmit = () => {
        fetch(buildUrl(BASE_URL, POST + `/${initialValues.id}`, {}), {
            method: 'PUT',
            body: JSON.stringify({
                id: idPost,
                title: title,
                body: body,
                userId: userId
            }),
            headers: { 'Content-type': 'application/json' }
        }).then((resp) => {
            if (resp.ok) setIsUpdated(true);
        }).catch(console.log);
    }

    useEffect(() => {
        if (title !== initialValues['title'] || body !== initialValues['body'] || userId !== initialValues['userId']) {
            setDisabledButton(false)
        } else {
            setDisabledButton(true)
        }
    }, [initialValues, title, body, userId])


    return (
        <>
            {isUpdated && <ModalItem action={ACTION_PUT} show={isUpdated} />}
            {loaded
                ? <>
                    <h1 className="mt-3">Edit Post #{idPost}</h1>
                    <Form onSubmit={handleSubmit} className="mt-2 mb-3">
                        <Form.Group className="mt-3">
                            <Form.Label>Author</Form.Label>
                            <Form.Control as="select" name="userId" value={userId} onChange={({ target }) => setUserId(target.value)}>
                                {(authorsReq !== undefined) &&
                                    authorsReq.map((author) => {
                                        return <option key={author.id} value={author.id}>{author.name}</option>
                                    })
                                }
                            </Form.Control>
                        </Form.Group>
                        <Input
                            className="mt-3"
                            label="Title"
                            name="title"
                            max={50}
                            placeholder="Title"
                            autoComplete="true"
                            value={title}
                            setInput={({ target }) => setTitle(target.value)} />

                        <Input
                            className="mt-3"
                            label="Body"
                            name="body"
                            as="textarea"
                            max={300}
                            placeholder="Title"
                            autoComplete="true"
                            value={body}
                            setInput={({ target }) => setBody(target.value)} />
                        <div className="mt-3 post__buttons--space-between">
                            <div>
                                <Link to={`/`}><Button variant="secondary">Go to Posts</Button></Link>
                                <Link to={`/post/${id}`}><Button className="ms-3" variant="secondary">Go to Details</Button></Link>
                            </div>
                            <Button variant="success" disabled={disabledButton} onClick={handleSubmit}>Save</Button>
                        </div>
                    </Form>
                </>
                : <Loading />
            }
        </>
    )
}

export default EditPost
