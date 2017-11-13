import React, { Component } from 'react';
import './App.css';
import BikeList from "./components/BikeList";
import Top5 from "./components/Top5";
import {loadAllBikesRequest, loadTop5BikesRequest} from "./api/bikes";
import AddModal from "./modals/AddModal";
import DeleteModal from "./modals/DeleteModal";
import SearchModal2 from "./modals/SearchModal2";
import EditModal from "./modals/EditModal";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bikes: [],
            bestBikes: [],
        };

        this.loadBikesList = this.loadBikesList.bind(this);
        this.loadTop5 = this.loadTop5.bind(this);
    }

    componentDidMount() {
        this.loadBikesList();
        this.loadTop5();
    }

    loadBikesList() {
        loadAllBikesRequest().then((bikes) => {
            this.setState({
                bikes: bikes
            });
            return this.state.bikes;
        }).catch((error) => {
            console.error(error);
        });
    }

    loadTop5() {
        loadTop5BikesRequest().then((bestBikes) => {
            this.setState({
                bestBikes: bestBikes
            });
            return this.state.bestBikes;
        }).catch((error) => {
            console.error(error);
        });
    }

  render() {
    return (
        <div>
            <div>
                <SearchModal2/>
            </div>
            <div className="bikeDisplayTable">
                <div id="bikeDisplayTableCell1"><BikeList items={this.state.bikes}/></div>
                <div id="bikeDisplayTableCell2"><Top5 items={this.state.bestBikes} className="top5Block"/></div>
            </div>
            <div className="buttonsMain">
                <div id="buttonsMainCell1"><AddModal/></div>
                <div id="buttonsMainCell2"><DeleteModal/></div>
                <div id="buttonsMainCell3"><EditModal/></div>
            </div>
        </div>

    );
  }
}

export default App;
