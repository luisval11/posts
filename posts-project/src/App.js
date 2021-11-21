import { Col, Container } from 'react-bootstrap';
import './App.css';
import Banner from './components/Banner';
import PostsRouter from './routers/PostsRouter';

function App() {
    return (
        <Col>
            <Container className="main">
                <Banner />
                <PostsRouter/>
            </Container>
        </Col>
    );
}

export default App;
