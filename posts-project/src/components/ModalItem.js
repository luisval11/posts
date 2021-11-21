import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ACTION_POST, ACTION_PUT } from '../utils/const'

const ModalItem = ({show, action}) => {
    return (
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Post submitted!</Modal.Title>
            </Modal.Header>
            {
                (action===ACTION_POST) && <Modal.Body>Your post has been saved successfully!</Modal.Body>
            }
            {
                (action===ACTION_PUT) && <Modal.Body>Your post has been updated successfully!</Modal.Body>
            }
            
            <Modal.Footer>
                <Link to="/">
                    <Button variant="secondary">
                        Close
                    </Button>
                </Link>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalItem
