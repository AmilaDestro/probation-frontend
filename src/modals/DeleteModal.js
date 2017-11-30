import React, { Component } from 'react';
import {Button, FormControl, Modal} from "react-bootstrap";
import {bikeDeleted} from "../components/actions/deleteBike";
import {connect} from "react-redux";


class DeleteModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.bikeNameInputHandle = this.bikeNameInputHandle.bind(this);
    }

    componentWillReceiveProps(someProps) {
        this.setState({
            bikeDeleted: someProps
        })
    }

    componentDidMount() {
        this.props.bikeDeleted;
    }


    openModal() {
        this.setState({modalIsOpen: true});
    }


    closeModal() {
        this.setState({modalIsOpen: false});
    }


    bikeNameInputHandle(event) {
        bike.productId = event.target.value;
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
                            <div id="deleteApplyButtons"><Button bsStyle="primary" onClick={this.props.bikeDeleted} >Apply</Button></div>
                            <div id="deleteCancelButton"><Button bsStyle="secondary" onClick={this.closeModal}>Cancel</Button></div>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


const bike = {
    productId: 0
}

const mapStateToProps = (state) => {
    debugger;
    return {
        productId: state.removableBikesReducers.productId
    }
};

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        bikeDeleted: () => dispatch(bikeDeleted(bike.productId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (DeleteModal)