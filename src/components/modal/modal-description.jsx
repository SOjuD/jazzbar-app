import React from "react"
import {Modal} from "react-bootstrap";
import {connect} from 'react-redux';

import {togledModalDescription} from '../../actions';

import './modal-description.sass';

const ModalDescription = ({isOpen, tableId, productId, togledModalDescription}) => {
    return (
        <Modal show={isOpen}>
            <Modal.Header>
                <Modal.Title>Укажите комментарий к позиции</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea
                    name="description"
                    onChange={(evt) => {
                        togledModalDescription(tableId, productId, evt.target.value)
                    }}/>
            </Modal.Body>
            <Modal.Footer>
                <button
                    className="btn btn-primary"
                    onClick={togledModalDescription}>
                    ok
                </button>
            </Modal.Footer>
        </Modal>
    )
}
const mapStateToProps = ({descriptionParams: {
        isOpen,
        tableId,
        productId
    }}) => {
        return { isOpen, tableId, productId}
    }

const mapDispatchToProps = {togledModalDescription};


export default connect(mapStateToProps, mapDispatchToProps)(ModalDescription);