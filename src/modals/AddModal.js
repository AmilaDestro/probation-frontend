import React, {Component} from 'react';
import {addNewBike} from "../components/actions/addBike";
import {connect} from "react-redux";
import {bikesReducers} from "../components/reducers/addBike";
import {Button, FormControl, Modal} from "react-bootstrap";


class AddModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
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
    }

    componentWillReceiveProps(someProps) {
        this.setState({
            addNewBike: someProps
        })
    }


    componentDidMount() {
        this.props.addNewBike;
    }


    openModal() {
        this.setState({modalIsOpen: true});
    }


    closeModal() {
        this.setState({modalIsOpen: false});
    }


    nameInputHandle() {
        bike.name = document.getElementById("bikeName").value;
    }


    productNumberInputHandle() {
        bike.productNumber = document.getElementById("ProductNumber").value;
    }


    colorInputHandle() {
        bike.color = document.getElementById("color").value;
    }


    priceInputHandle() {
        bike.price = document.getElementById("price").value;
    }


    sizeInputHandle() {
        bike.size = document.getElementById("size").value;
    }


    weightInputHandle() {
        bike.weight = document.getElementById("weight").value;
    }


    typeSelectHandler() {
        bike.type = document.getElementById("typeId").value;
    }


    render() {
        return (
            <div>
                <Button bsStyle="primary" onClick={this.openModal}>Add bike</Button>
                <Modal
                    show={this.state.modalIsOpen}
                    onHide={this.closeModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title><div id="addingBikeText">Add new bike</div></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="addBikeNameTable">
                            <div id="addNameLabel">Name</div>
                            <div id="actionName"><FormControl type="text" size="50" id="bikeName" onChange={this.nameInputHandle}/></div>
                        </div>
                        <div className="addBikeProductNumberTable">
                            <div id="addProductNumberLabel">Product number</div>
                            <div id="actionProductNumber"><FormControl type="text" id="ProductNumber"
                                                                 onChange={this.productNumberInputHandle}/></div>
                        </div>
                        <div className="addBikeColorTable">
                            <div id="addColorLabel">Color</div>
                            <div id="actionColor"><FormControl type="text" id="color" onChange={this.colorInputHandle}/></div>
                        </div>
                        <div className="addBikePriceTable">
                            <div id="addPriceLabel">Price</div>
                            <div id="actionPrice"><FormControl type="text" id="price" onChange={this.priceInputHandle}/></div>
                        </div>
                        <div className="addBikeSizeTable">
                            <div id="addSizeLabel">Size</div>
                            <div id="actionSize"><FormControl type="text" id="size" onChange={this.sizeInputHandle}/></div>
                        </div>
                        <div className="addBikeWeightTable">
                            <div id="addWeightLabel">Weight</div>
                            <div id="actionWeight"><FormControl type="text" id="weight" onChange={this.weightInputHandle}/></div>
                        </div>
                        <div className="addBikeTypeTable">
                            <div id="addTypeLabel">Type</div>
                            <div id="actionType">

                                <select name="bikeType" id="typeId" onChange={this.typeSelectHandler}>
                                    <option value="1" title="Mountain Bikes">1</option>
                                    <option value="2" title="Road Bikes">2</option>
                                    <option value="3" title="Touring Bikes">3</option>
                                </select>

                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="addBikeButtonsTable">
                            <div id="applyButtonAdd"><Button bsStyle="primary" onClick={this.props.addNewBike}>Apply</Button></div>
                            <div id="cancelButtonAdd"><Button bsStyle="secondary" onClick={this.closeModal}>Cancel</Button></div>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


const bike = {
    name: undefined,
    productNumber: undefined,
    color: undefined,
    price: undefined,
    size: undefined,
    weight: undefined,
    type: undefined
};


const mapStateToProps = (state, ownProps) => {
    debugger;
    return {
        bike : state.bikesReducers.bike
    }
};


const mapDispatchToProps = (dispatch, ownProps) => {
    debugger;
    return {
        addNewBike: () => dispatch(addNewBike(bike))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(AddModal)

