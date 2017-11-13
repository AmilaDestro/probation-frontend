import React, { Component } from 'react';
import {searchBikeRequest} from "../api/bikes";
import {Button, Form, FormControl, FormGroup, Modal, Table} from "react-bootstrap";


class SearchModal extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            value: '',
            newItems: []
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.whileInputHandle = this.whileInputHandle.bind(this);
        this.searchInit = this.searchInit.bind(this);
    }

    componentDidMount() {
        this.searchInit();
    }


    componentWillReceiveProps() {
        this.searchInit();
    }

    open() {
        this.searchInit();
        this.setState({
            showModal: true
        });
    }

    close() {
        this.setState({
            showModal: false,
            value: ''
        });
    }

    whileInputHandle(event) {
        this.setState({
            value: event.target.value
        });
    }


    searchInit() {
        console.log("Search initiated by " + this.state.value);
        if (this.state.value != '') {
            searchBikeRequest(this.state.value).then((response) => {
                this.setState({
                    newItems: response
                });
                return this.state.newItems;
            }).catch((error) => {
                console.error(error);
            });
        }
    }

    render() {
        return (
            <div>
                <Form inline>
                    <FormGroup controlId="searchForm">
                        <div className="newSearchTable">
                            <div id="newSearchTableCell2">
                                <FormControl type="name" placeholder="bike's name, product number, color or ID" value={this.state.value} onChange = {this.whileInputHandle}/>
                            </div>
                            <div id="newSearchTableCell3">
                                <Button bsStyle="primary" onClick={this.open}>
                                    Start search
                                </Button>
                                <Modal show={this.state.showModal} onHide={this.close}>
                                    <Modal.Header closeButton>
                                        <Modal.Title><div id="searchResultsTitle">Search results</div></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Results items={this.state.newItems}/>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={this.close} bsStyle="primary">Close</Button>
                                    </Modal.Footer>
                                </Modal>

                            </div>
                        </div>
                    </FormGroup>
                </Form>
            </div>
        );
    }


}

export default SearchModal;


class Results extends Component {

    componentWillReceiveProps(someProps) {
        console.log(someProps);
    }

    render() {
        return <div>
            <Table className="foundBikes" striped>
                <thead id="searchResultsHead">
                <tr>
                    <th id="searchResultsHeadCell1">ID</th>
                    <th id="searchResultsHeadCell2">Name</th>
                    <th id="searchResultsHeadCell3">Product number</th>
                    <th id="searchResultsHeadCell4">Color</th>
                    <th id="searchResultsHeadCell5">Price</th>
                    <th id="searchResultsHeadCell6">Size</th>
                    <th id="searchResultsHeadCell7">Weight</th>
                    <th id="searchResultsHeadCell8">Type</th>
                </tr>
                </thead>
                <tbody id="searchResultsBody">
                {
                    this.props.items.map((item, index) =>
                        <tr key={index}>
                            <th scope="row">{item.productId}</th>
                            <td>{item.name}</td>
                            <td>{item.productNumber}</td>
                            <td>{item.color}</td>
                            <td>{item.price}</td>
                            <td>{item.size}</td>
                            <td>{item.weight}</td>
                            <td>{item.typeName}</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
    }
}