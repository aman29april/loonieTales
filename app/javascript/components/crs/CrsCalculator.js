import React from "react"
import PropTypes from "prop-types"
import HumanCapitalFactors from "./HumanCapitalFactors";
import SectionA from "./SectionA/SectionA";
import {useSelector} from "react-redux";
import crsStore from "../../redux/crsStore";


function CrsCalculator(props){
    const totalPoints = useSelector(state => state.crsStore.total)

    return (
        <div style={{display: 'flex'}}>
            <div id="currentScore" className='col-md-6'>
                <SectionA></SectionA>
            </div>

            <div className='col-md-6'>
                Total Points: {totalPoints}
            </div>
        </div>
    );

}

export default CrsCalculator