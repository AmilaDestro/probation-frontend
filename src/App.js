import React, { Component } from 'react';
import './App.css';
import BikeList from "./components/BikeList";
import Top5 from "./components/Top5";
import AddModal from "./modals/AddModal";
import DeleteModal from "./modals/DeleteModal";
import SearchModal from "./modals/SearchModal";
import EditModal from "./modals/EditModal";
import {loadAllBikes} from "./components/actions/loadBikeList";
import {connect} from "react-redux";
import {loadTop5Sales} from "./components/actions/loadTop5";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillReceiveProps(someProps, nextProps) {
        this.setState({
            loadAllBikes: someProps,
            loadTop5Sales: nextProps
        })
    }

    componentDidMount() {
        this.props.loadAllBikes();
        this.props.loadTop5Sales();
    }


  render() {
    return (
        <div>
            <div>
                <SearchModal/>
            </div>
            <div className="bikeDisplayTable">
                <div id="bikeDisplayTableCell1"><BikeList bikes={this.props.bikes}/></div>
                <div id="bikeDisplayTableCell2"><Top5 items={this.props.topSales} className="top5Block"/></div>
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

const mapStateToProps = (state) => {
    return {
        bikes: state.bikeListReducer.bikes,
        topSales: state.top5Reducer.topSales
    };
};

const mapDispatchToProps = (dispatch) => {
   return {
       loadAllBikes: () => dispatch(loadAllBikes()),
       loadTop5Sales: () => dispatch(loadTop5Sales())
   };
};

export default connect(mapStateToProps, mapDispatchToProps) (App)
