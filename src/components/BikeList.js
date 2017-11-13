import React, {Component} from 'react';
import '../App.css';
import {Panel, Table} from "react-bootstrap";


const bikesList = (<h1 id="allBikesTitle">List of bikes</h1>);


class BikeList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="listBikesAll">
                <Panel header={bikesList}>
                <Table striped className="bikeList">
                    <thead id="allBikesTableHead">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Product number</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Size</th>
                        <th>Weight</th>
                        <th>Type</th>
                    </tr>
                    </thead>
                    <tbody>
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
                </Panel>
            </div>
        );
    }
}

export default BikeList;