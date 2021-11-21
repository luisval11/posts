import React from 'react'
import { Row } from 'react-bootstrap'
import banner from '../assets/banner.png'

const Banner = () => {
    return (
        <Row className="mt-2">
            <img src={banner} alt="Banner"/>
        </Row>
    )
}

export default Banner