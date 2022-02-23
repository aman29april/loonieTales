import React from "react"
import PropTypes from "prop-types"
import Age from "./Age";
class HumanCapitalFactors extends React.Component {
  render () {
    return (
        <div>
          <h4>A. Core / human capital factors</h4>
          <Age />
        </div>
  );
  }
}

export default HumanCapitalFactors;
