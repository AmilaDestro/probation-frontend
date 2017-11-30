import React, {Component} from 'react';
import {Button, FormControl, Modal} from "react-bootstrap";
import {editBikeRequest, getBikeByIdRequest} from "../api/bikes";


class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            nameValue: '',
            productNumberValue: '',
            colorValue: '',
            priceValue: '',
            sizeValue: '',
            weightValue: '',
            typeValue: 1,
            productIdValue: 0,

            previousName: '',
            previousProductNumber: '',
            previousColor: '',
            previousPrice: '',
            previousSize: '',
            previousWeight: '',
            previousType: ''
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.nameInputHandle = this.nameInputHandle.bind(this);
        this.productNumberInputHandle = this.productNumberInputHandle.bind(this);
        this.colorInputHandle = this.colorInputHandle.bind(this);
        this.priceInputHandle = this.priceInputHandle.bind(this);
        this.sizeInputHandle = this.sizeInputHandle.bind(this);
        this.weightInputHandle = this.weightInputHandle.bind(this);
        this.typeSelectHandler = this.typeSelectHandler.bind(this);
        this.productIdInputHandle = this.productIdInputHandle.bind(this);
        this.editBike = this.editBike.bind(this);
        this.getBikesOldProps = this.getBikesOldProps.bind(this);
    }

    componentDidMount() {
        this.editBike();
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }


    closeModal() {
        this.setState({
            modalIsOpen: false,
            nameValue: '',
            productNumberValue: '',
            colorValue: '',
            priceValue: '',
            sizeValue: '',
            weightValue: '',
            typeValue: 1,
            productIdValue: 0,
            previousName: '',
            previousProductNumber: '',
            previousColor: '',
            previousPrice: '',
            previousSize: '',
            previousWeight: '',
            previousType: ''
        });
    }

    nameInputHandle() {
        this.setState({
            nameValue: document.getElementById("bikeName").value
        })
    }

    productNumberInputHandle() {
        this.setState({
            productNumberValue: document.getElementById("ProductNumber").value
        })

    }

    colorInputHandle() {
        this.setState({
            colorValue: document.getElementById("color").value
        })
    }

    priceInputHandle() {
        this.setState({
            priceValue: document.getElementById("price").value
        })
    }

    sizeInputHandle() {
        this.setState({
            sizeValue: document.getElementById("size").value
        })
    }

    weightInputHandle() {
        this.setState({
            weightValue: document.getElementById("weight").value
        })
    }

    typeSelectHandler() {
        this.setState({
            typeValue: document.getElementById("typeId").value
        })
    }

    productIdInputHandle() {
        this.setState({
            productIdValue: document.getElementById("productId").value
        });
        console.log("typed " + document.getElementById("productId").value);
        this.getBikesOldProps();
    }

    getBikesOldProps() {
        let enteredId = document.getElementById("productId").value;
        if (enteredId >= 749) {
            getBikeByIdRequest(enteredId)
                .then((response) => {
                    if (response != null) {
                        this.setState({
                            previousName: response.name,
                            previousProductNumber: response.productNumber,
                            previousColor: response.color,
                            previousPrice: response.price,
                            previousSize: response.size,
                            previousWeight: response.weight,
                            previousType: response.type
                        });
                    }
                });
        }
    }

    editBike() {
        const bike = {
            productId: this.state.productIdValue,
            name: this.state.nameValue,
            productNumber: this.state.productNumberValue,
            color: this.state.colorValue,
            price: this.state.priceValue,
            size: this.state.sizeValue,
            weight: this.state.weightValue,
            type: this.state.typeValue
        }
        console.log(bike);
        if (this.state.productIdValue !== 0) {
            editBikeRequest(bike)
                .then((success) => {
                    if (success === 1) {
                        alert("SUCCESS: record updated");
                    } else {
                        alert("ERROR: record update failed");
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
                <Button bsStyle="primary" onClick={this.openModal}>Edit bike</Button>
                <Modal
                    show={this.state.modalIsOpen}
                    onHide={this.closeModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title><div id="editBikeText">Edit bike</div></Modal.Title>
                        <Modal.Body>
                            <div className="editIDTable">
                                <div id="editNameLabel">ID</div>
                                <div id="editActionID"><FormControl type="text" size="50" id="productId" onChange={this.productIdInputHandle} /></div>
                            </div>
                            <div className="editBikeNameTable">
                                <div id="editNameLabel">Name</div>
                                <div id="editActionName"><FormControl type="text" size="50" id="bikeName" placeholder = {this.state.previousName} onChange={this.nameInputHandle}/></div>
                            </div>
                            <div className="editBikeProductNumberTable">
                                <div id="editProductNumberLabel">Product number</div>
                                <div id="editActionProductNumber"><FormControl type="text" id="ProductNumber" placeholder = {this.state.previousProductNumber}
                                                                           onChange={this.productNumberInputHandle}/></div>
                            </div>
                            <div className="editBikeColorTable">
                                <div id="editColorLabel">Color</div>
                                <div id="editActionColor"><FormControl type="text" id="color" placeholder = {this.state.previousColor} onChange={this.colorInputHandle}/></div>
                            </div>
                            <div className="editBikePriceTable">
                                <div id="editPriceLabel">Price</div>
                                <div id="editActionPrice"><FormControl type="text" id="price"  placeholder = {this.state.previousPrice} onChange={this.priceInputHandle}/></div>
                            </div>
                            <div className="editBikeSizeTable">
                                <div id="editSizeLabel">Size</div>
                                <div id="editActionSize"><FormControl type="text" id="size" placeholder = {this.state.previousSize} onChange={this.sizeInputHandle}/></div>
                            </div>
                            <div className="editBikeWeightTable">
                                <div id="editWeightLabel">Weight</div>
                                <div id="editActionWeight"><FormControl type="text" id="weight" placeholder = {this.state.previousWeight} onChange={this.weightInputHandle}/></div>
                            </div>
                            <div>
                                <div>Type</div>
                                <div>

                                    <select name="bikeType" id="typeId" onChange={this.typeSelectHandler}>
                                        <option value="1" title="Mountain Bikes" defaultValue="1">1</option>
                                        <option value="2" title="Road Bikes">2</option>
                                        <option value="3" title="Touring Bikes">3</option>
                                    </select>

                                </div>
                            </div>
                            <div>Current type: {this.state.previousType}</div>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="editBikeButtonsTable">
                                <div id="applyButtonEdit"><Button bsStyle="primary" onClick={this.editBike}>Apply</Button></div>
                                <div id="cancelButtonEdit"><Button bsStyle="secondary" onClick={this.closeModal}>Cancel</Button></div>
                            </div>
                        </Modal.Footer>
                    </Modal.Header>
                </Modal>
            </div>
        );
    }
}

export default EditModal;