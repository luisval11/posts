import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Loading from '../../components/Loading';
import NoPostItem from '../../components/NoPostItem';
import PostItem from '../../components/PostItem';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';
import { useForm } from '../../hooks/useForm';
import { BASE_URL } from '../../utils/endpoints';
import { buildUrl } from '../../utils/http';
import Search from '../search/Search';

const Posts = () => {

    const [values, handleInputChange] = useForm({ search: "", userId: "0" })
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [requests, loading] = useAsyncFetch(buildUrl(BASE_URL, '/home', {}));

    const [postsReq, setPostsReq] = useState([]);
    const [authorsReq, setAuthorsReq] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loading) {
            const { posts, authors } = requests;
            setPostsReq(posts);
            setAuthorsReq(authors);
            setLoaded(true);
        }

    }, [loading, requests])

    const handleSearch = (e) => {
        e.preventDefault();
        let array = [];
        const searchFilter = (el) => el.title.includes(values.search) || el.body.includes(values.search);
        const userIdFilter = (el) => el.userId === Number(values.userId);
        const combinedFilter = (el) => (el.title.includes(values.search) || el.body.includes(values.search)) && el.userId === Number(values.userId);
        if (values.search !== "" && values.userId > 0) {
            array = postsReq.filter(combinedFilter);
            setFilteredPosts(array);
            setIsSubmitted(true);
        } else if (values.search !== "") {
            array = postsReq.filter(searchFilter);
            setIsSubmitted(true);
            setFilteredPosts(array);
        } else if (values.userId > 0) {
            array = postsReq.filter(userIdFilter);
            setFilteredPosts(array);
            setIsSubmitted(true);
        } else if (values.search === "" && values.userId === '0') {
            setFilteredPosts([]);
            setIsSubmitted(false);
        } else {
            setFilteredPosts([]);
            setIsSubmitted(true);
        }
    }

    const funcPostItems = (post) => {
        const author = authorsReq.find(a => a.id === post.userId)
        return <Row className="mt-3 mb-3" key={post.id}>
            <Col>
                <PostItem post={post} author={author} />
            </Col>
        </Row>
    }

    return (
        <>
            {
                loaded
                    ? (postsReq !== undefined && authorsReq !== undefined)
                        ? <>
                            <Search
                                handleInputChange={handleInputChange}
                                onSubmit={handleSearch}
                                authors={authorsReq} />
                            {(isSubmitted)
                                ? (filteredPosts.length === 0 && values.search.length !== 0)
                                    ? <NoPostItem values={values} />
                                    : filteredPosts.map(funcPostItems)
                                : postsReq.map(funcPostItems)
                            }
                        </>
                        : <Loading />
                    : <Loading />
            }
        </>
    )
}

export default Posts
