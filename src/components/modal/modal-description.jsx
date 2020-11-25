import React from "react"
import {Modal} from "react-bootstrap";
import {connect} from 'react-redux';

import {togledModalDescription, changedProductDescription} from '../../actions';

import './modal-description.sass';

const ModalDescription = ({descriptionParams, tables, changedProductDescription, togledModalDescription}) => {
    const {isOpen, tableId, productId} = descriptionParams;
    const currentTable = tables.find( el => el.id === tableId );
    let currentProduct, currentDescription;
    if(currentTable){
        currentProduct = currentTable.list.find( el => el.ID === productId );
        currentDescription = currentProduct.description;
    }
    return (
        <Modal
            onHide={togledModalDescription}
            show={isOpen}>
            <Modal.Header>
                <Modal.Title>Укажите комментарий к позиции</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea
                    name="description"
                    value={currentDescription}
                    onChange={(evt) => {
                        changedProductDescription(tableId, productId, evt.target.value)
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
const mapStateToProps = ({descriptionParams, tables}) => {
        return { descriptionParams, tables }
    }

const mapDispatchToProps = {togledModalDescription, changedProductDescription};


export default connect(mapStateToProps, mapDispatchToProps)(ModalDescription);