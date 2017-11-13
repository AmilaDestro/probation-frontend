import React, { Component } from 'react';
import {deleteBikeRequest} from "../api/bikes";
import {Button, FormControl, Modal} from "react-bootstrap";


class DeleteModal extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            productIdValue: '',
            success: ''
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.bikeNameInputHandle = this.bikeNameInputHandle.bind(this);
        this.deleteBike = this.deleteBike.bind(this);
    }


    componentDidMount() {
        this.deleteBike();
    }


    openModal() {
        this.setState({modalIsOpen: true});
        this.setState({
            productIdValue: '',
            success: ''
        });
    }


    closeModal() {
        this.setState({modalIsOpen: false});
        this.setState({
            productIdValue: '',
            success: ''
        });
    }


    bikeNameInputHandle(event) {
        this.setState({productIdValue: event.target.value})
    }


    deleteBike() {
        const bike = {
            productId: this.state.productIdValue
        }
        console.log(bike.productId);
        if (bike.productId == '') {
            this.setState({
                success: 'ID of bike was not specified'
            });
        } else {
            deleteBikeRequest(bike.productId)
                .then((success) => {
                if (success == 1) {
                    alert("SUCCESS: record deleted");
                } else {
                    alert("ERROR: record not found");
                }
                    return this.state.success
                }).catch((error) => {
                console.error(error);
            });
        }
    }


    render() {
        return (
            <div>
                <Button bsStyle="primary" onClick={this.openModal}>Delete bike</Button>
                <Modal
                    show={this.state.modalIsOpen}
                    onHide={this.closeModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title><div id="deleteBikeText">Delete bike</div></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="deleteModalTable">
                            <div id="deleteNameLabel">ID</div>
                            <div id="deleteInput"><FormControl type="text" size="50" onInput={this.bikeNameInputHandle}/></div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="deleteModalButtons">
                            <div id="deleteApplyButtons"><Button bsStyle="primary" onClick={this.deleteBike} >Apply</Button></div>
                            <div id="deleteCancelButton"><Button bsStyle="secondary" onClick={this.closeModal}>Cancel</Button></div>
                        </div>
                        <div id="deleteSuccess">{this.state.success}</div>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default DeleteModal;