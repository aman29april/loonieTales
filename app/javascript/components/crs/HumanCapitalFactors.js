import React from "react"
import PropTypes from "prop-types"
import Age from "./SectionA/Age";
import FirstLanguage from "./SectionA/FirstLanguage";
class HumanCapitalFactors extends React.Component {
  render () {
    return (
        <div>
          <h4>A. Core / human capital factors</h4>
          <Age />
          <FirstLanguage />
        </div>
  );
  }
}

export default HumanCapitalFactors;
