import React from "react"
import PropTypes from "prop-types"
import HumanCapitalFactors from "./crs/HumanCapitalFactors";

const NONE_OR_LESS_THAN_A_YEAR = "None or less than a year"
const ONE_YEAR = "1 year"
const TWO_YEARS = "2 years"
const THREE_YEARS = "3 years"
const FOUR_YEARS = "4 years"
const FIVE_YEARS_OR_MORE = "5 years or more"

class CrsCalculator extends React.Component {
  render () {
    return (
        <div style={{display: 'flex'}}>
          <div id="currentScore">
              <h3>CRS</h3>
            <HumanCapitalFactors ></HumanCapitalFactors>
          </div>
        </div>
    );
  }
}

export default CrsCalculator
