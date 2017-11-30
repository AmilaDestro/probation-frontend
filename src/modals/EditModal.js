import React, {Component} from 'react';
import {Button, FormControl, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {editBike, getBikesOldProps} from "../components/actions/editBike";


class EditModal extends Component {
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
        this.productIdInputHandle = this.productIdInputHandle.bind(this);
    }

    componentWillReceiveProps(someProps, nextProps) {
        this.setState({
           getBikesOldProps: someProps,
           editBike: nextProps
        });
    }

    componentDidMount() {
        // this.props.getBikesOldProps;
        this.props.editBike;
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }


    closeModal() {
        this.setState({
            modalIsOpen: false
        });
        bike.productId = 0;
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

    productIdInputHandle() {
        bike.productId = document.getElementById("productId").value;
        this.props.getBikesOldProps(bike.productId);
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
                                <div id="editActionName"><FormControl type="text" size="50" id="bikeName" placeholder = {this.props.notUpdatedBike.name} onChange={this.nameInputHandle}/></div>
                            </div>
                            <div className="editBikeProductNumberTable">
                                <div id="editProductNumberLabel">Product number</div>
                                <div id="editActionProductNumber"><FormControl type="text" id="ProductNumber" placeholder = {this.props.notUpdatedBike.productNumber}
                                                                           onChange={this.productNumberInputHandle}/></div>
                            </div>
                            <div className="editBikeColorTable">
                                <div id="editColorLabel">Color</div>
                                <div id="editActionColor"><FormControl type="text" id="color" placeholder = {this.props.notUpdatedBike.color} onChange={this.colorInputHandle}/></div>
                            </div>
                            <div className="editBikePriceTable">
                                <div id="editPriceLabel">Price</div>
                                <div id="editActionPrice"><FormControl type="text" id="price"  placeholder = {this.props.notUpdatedBike.price} onChange={this.priceInputHandle}/></div>
                            </div>
                            <div className="editBikeSizeTable">
                                <div id="editSizeLabel">Size</div>
                                <div id="editActionSize"><FormControl type="text" id="size" placeholder = {this.props.notUpdatedBike.size} onChange={this.sizeInputHandle}/></div>
                            </div>
                            <div className="editBikeWeightTable">
                                <div id="editWeightLabel">Weight</div>
                                <div id="editActionWeight"><FormControl type="text" id="weight" placeholder = {this.props.notUpdatedBike.weight} onChange={this.weightInputHandle}/></div>
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
                            <div>Previously set type: {this.props.notUpdatedBike.type}</div>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="editBikeButtonsTable">
                                <div id="applyButtonEdit"><Button bsStyle="primary" onClick={this.props.editBike}>Apply</Button></div>
                                <div id="cancelButtonEdit"><Button bsStyle="secondary" onClick={this.closeModal}>Cancel</Button></div>
                            </div>
                        </Modal.Footer>
                    </Modal.Header>
                </Modal>
            </div>
        );
    }
}

const bike = {
    name: '',
    productNumber: '',
    color: '',
    price: '',
    size: '',
    weight: '',
    type: 1,
    productId: 0
};

const mapStateToProps = (state) => {
  return {
      productId: state.editBikeReducer.productId,
      notUpdatedBike: state.editBikeReducer.notUpdatedBike,
      bike: state.editBikeReducer.bike,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      getBikesOldProps: () => dispatch(getBikesOldProps(bike.productId)),
      editBike: () => dispatch(editBike(bike))
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (EditModal)