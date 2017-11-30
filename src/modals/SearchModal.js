import React, {Component} from 'react';
import {Button, Form, FormControl, FormGroup, Modal, Table} from "react-bootstrap";
import {bikeSearch} from "../components/actions/searchBike";
import {connect} from "react-redux";


class SearchModal extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            value: ''
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.whileInputHandle = this.whileInputHandle.bind(this);
    }

    componentWillReceiveProps(someProps, nextProps) {
        this.setState({
            bikeSearch: someProps,
            bikeFound: nextProps
        })
    }

    componentDidMount() {
        this.props.bikeSearch
    }

    open() {
        this.props.bikeSearch();
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
        gatheredData.keyword = event.target.value
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
                                        <Results items={this.props.foundBikes}/>
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

const gatheredData = {
    keyword: ''
}

const mapStateToProps = (state) => {
    return {
        keyword: state.searchBikeReducer.keyword,
        foundBikes: state.searchBikeReducer.foundBikes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        bikeSearch: () => dispatch(bikeSearch(gatheredData.keyword))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (SearchModal)


class Results extends Component {

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