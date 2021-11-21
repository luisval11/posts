import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import Loading from '../../components/Loading'
import ModalItem from '../../components/ModalItem'
import { useAsyncFetch } from '../../hooks/useAsyncFetch'
import { useForm } from '../../hooks/useForm'
import { ACTION_POST } from '../../utils/const'
import { BASE_URL, POST } from '../../utils/endpoints'
import { buildUrl } from '../../utils/http'
import './style.css'

const AddPost = () => {

    const [formValues, handleInputChange] = useForm({
        title: "",
        body: "",
        userId: 1
    })
    
    const [requests, loading] = useAsyncFetch(buildUrl(BASE_URL, POST + '/create', {}))
    const [authorsReq, setAuthorsReq] = useState([]);
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        if (!loading) {
            const { authors } = requests;
            setAuthorsReq(authors);
        }
    }, [loading, requests])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(buildUrl(BASE_URL, POST, {}), {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: { 'Content-type': 'application/json' }
        }).then((resp) => {
            if (resp.ok) setIsSaved(true);
        }).catch(console.log)
    }

    return (
        <>
            {isSaved && <ModalItem action={ACTION_POST} show={isSaved} />}
            {loading
                ? <Loading />
                : <>
                    <h1 className="mt-3">Create Post</h1>
                    <Form onSubmit={handleSubmit} className="mt-2">
                        <Form.Group className="mt-3">
                            <Form.Label>Author</Form.Label>
                            <Form.Control as="select" defaultValue={1} name="userId" onChange={handleInputChange}>
                                {(authorsReq !== undefined && authorsReq.length > 0) && authorsReq.map((author) => <option key={author.id} value={author.id}>{author.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                        <Input
                            className="mt-3"
                            label="Title"
                            name="title"
                            max={50}
                            placeholder="Title"
                            autoComplete="true"
                            setInput={handleInputChange} />

                        <Input
                            className="mt-3"
                            label="Body"
                            name="body"
                            as="textarea"
                            max={300}
                            placeholder="Title"
                            autoComplete="true"
                            setInput={handleInputChange} />
                        <div className="mt-2 post__buttons--space-between">
                            <Link to={`/`}><Button variant="secondary">Go to Posts</Button></Link>
                            <Button variant="success" onClick={handleSubmit}>Save</Button>
                        </div>
                    </Form>
                </>
            }
        </>
    )
}

export default AddPost
