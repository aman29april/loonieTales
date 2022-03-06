import React from "react"
import PropTypes from "prop-types"
import store from './../../redux/store'
import {Provider, useSelector} from 'react-redux'
import CrsCalculator from "./CrsCalculator";

function Main(props){

    return (
        <Provider store={store}>
            <CrsCalculator></CrsCalculator>
        </Provider>

    );

}

export default Main