import React, { Component } from 'react';
import './App.css';
import BikeList from "./components/BikeList";
import Top5 from "./components/Top5";
import {loadTop5BikesRequest} from "./api/bikes";
import AddModal from "./modals/AddModal";
import DeleteModal from "./modals/DeleteModal";
import SearchModal2 from "./modals/SearchModal2";
import EditModal from "./modals/EditModal";
import {loadAllBikes} from "./components/actions/loadBikeList";
import {connect} from "react-redux";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bikes: [],
            bestBikes: [],
        };

        this.loadTop5 = this.loadTop5.bind(this);
    }

    componentWillReceiveProps(someProps) {
        this.setState({
            loadAllBikes: someProps
        })
    }

    componentDidMount() {
        this.loadTop5();
        this.props.loadAllBikes();
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
                <div id="bikeDisplayTableCell1"><BikeList bikes={this.props.bikes}/></div>
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

// export default App;

const mapStateToProps = (state) => {
    return {
        bikes: state.bikeListReducer.bikes
    };
};

const mapDispatchToProps = (dispatch) => {
   return {
       loadAllBikes: () => dispatch(loadAllBikes())
   };
};

export default connect(mapStateToProps, mapDispatchToProps) (App)
